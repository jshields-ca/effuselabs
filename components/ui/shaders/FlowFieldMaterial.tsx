'use client'
/* eslint-disable @typescript-eslint/no-namespace */

import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { extend, ReactThreeFiber } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

// GLSL utilities: simple 2D noise + fbm for premium, organic motion
const vertexShader = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// 2D value noise + fbm (compact for readability)
const fragmentShader = /* glsl */`
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;        // seconds
  uniform float uSpeed;       // animation speed multiplier
  uniform float uDistortion;  // distortion intensity
  uniform vec3  uColor;       // base color
  uniform float uOpacity;     // overall opacity
  uniform float uDirectionX;  // -1.0 for rtl, +1.0 for ltr

  // Hash
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  // Value noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Fractal Brownian Motion
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    // Base UV with directional drift to create sweeping motion
    vec2 uv = vUv;
    float t = uTime * uSpeed;

    // Directional advection: translate UVs over time horizontally
    uv.x += t * 0.05 * uDirectionX;

    // Organic warping using layered fbm for silk-like flow
    vec2 warpUv = uv;
    warpUv.x += (fbm(uv * 2.0 + vec2(0.0, t * 0.15)) - 0.5) * 0.25 * uDistortion;
    warpUv.y += (fbm(uv * 1.6 + vec2(t * 0.1, 0.0)) - 0.5) * 0.20 * uDistortion;

    // Alpha mask to form a soft, fluid band
    float band = smoothstep(0.25, 0.75, fbm(warpUv * 2.0));
    float edgeSoftening = smoothstep(0.0, 0.15, vUv.y) * (1.0 - smoothstep(0.85, 1.0, vUv.y));
    float alpha = band * edgeSoftening * uOpacity;

    // Color with slight luminance variation for richness
    float highlight = fbm(warpUv * 3.0 + t * 0.05);
    vec3 color = uColor * mix(0.9, 1.15, highlight);

    gl_FragColor = vec4(color, alpha);
  }
`

// Runtime-updated uniforms are set on the material instance via R3F

const FlowFieldMaterialImpl = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uSpeed: 0.5,
    uDistortion: 0.45,
    uColor: new THREE.Color('#22C5C3'),
    uOpacity: 0.6,
    uDirectionX: -1,
  },
  // Vertex
  vertexShader,
  // Fragment
  fragmentShader,
)

extend({ FlowFieldMaterialImpl })

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Allow JSX usage of the injected shader material
      flowFieldMaterialImpl: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof FlowFieldMaterialImpl>
    }
  }
}

interface FlowFieldMaterialProps {
  color: string
  speed: number
  distortion: number
  opacity?: number
  direction: 'rtl' | 'ltr'
}

export const FlowFieldMaterial: React.FC<FlowFieldMaterialProps> = ({
  color,
  speed,
  distortion,
  opacity = 0.55,
  direction,
}) => {
  const colorObj = useMemo(() => new THREE.Color(color), [color])
  const directionX = direction === 'rtl' ? -1 : 1
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useEffect(() => {
    const m = materialRef.current as unknown as any
    if (!m) return
    m.uSpeed = speed
    m.uDistortion = distortion
    m.uColor = colorObj
    m.uOpacity = opacity
    m.uDirectionX = directionX
  }, [speed, distortion, colorObj, opacity, directionX])

  return (
    // Transparent blending so multiple layers accumulate; disable depth write to avoid occlusion
    <flowFieldMaterialImpl
      ref={materialRef}
      attach="material"
      transparent
      depthWrite={false}
      depthTest={false}
    />
  )
}

export default FlowFieldMaterial


