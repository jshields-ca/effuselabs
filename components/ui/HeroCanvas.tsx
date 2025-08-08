'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
// Postprocessing is optional; lazy import type to avoid type resolution issues in some setups
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { EffectComposer, Bloom, SMAA } from '@react-three/postprocessing'
import { FlowFieldMaterial } from './shaders/FlowFieldMaterial'

interface FlowLayerProps {
  color: string
  speed: number
  distortion: number
  opacity?: number
  direction: 'rtl' | 'ltr'
  depth: number
  offset?: [number, number]
}

const FlowLayer: React.FC<FlowLayerProps> = ({
  color,
  speed,
  distortion,
  opacity = 0.55,
  direction,
  depth,
  offset = [0, 0]
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock, gl }) => {
    if (!meshRef.current) return
    const material = meshRef.current.material as THREE.ShaderMaterial
    if (material && 'uTime' in material) {
      material.uTime = clock.getElapsedTime()
    }
    // Ensure color buffer not cleared between frames so accumulated vapour persists
    gl.autoClear = false
  })

  return (
    <mesh ref={meshRef} position={[offset[0], offset[1], depth]}>
      <planeGeometry args={[16, 10, 1, 1]} />
      <FlowFieldMaterial
        color={color}
        speed={speed}
        distortion={distortion}
        opacity={opacity}
        direction={direction}
      />
    </mesh>
  )
}

interface HeroCanvasProps {
  className?: string
  reducedMotion?: boolean
}

const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '', reducedMotion = false }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ alpha: false, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
        dpr={[1.5, window.devicePixelRatio || 2]}
      >
        <color attach="background" args={[ '#0e1013' ]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[6, 8, 4]} intensity={1.0} color="#ffffff" />

        {/* Deep dark haze layer to preserve the moody look across scroll */}
        <FlowLayer
          color="#0b0d10"
          speed={reducedMotion ? 0.03 : 0.12}
          distortion={reducedMotion ? 0.12 : 0.25}
          opacity={0.35}
          direction="ltr"
          depth={-1.9}
          offset={[0, 0]}
        />

        {/* Back slate layer (slower, left-to-right) */}
        <FlowLayer
          color="#2E3440"
          speed={reducedMotion ? 0.05 : 0.22}
          distortion={reducedMotion ? 0.12 : 0.3}
          opacity={0.5}
          direction="ltr"
          depth={-1.8}
          offset={[-0.6, -0.2]}
        />

        {/* Front teal layer (faster, right-to-left) */}
        <FlowLayer
          color="#22C5C3"
          speed={reducedMotion ? 0.08 : 0.55}
          distortion={reducedMotion ? 0.2 : 0.5}
          opacity={0.5}
          direction="rtl"
          depth={-0.8}
          offset={[0.5, 0.25]}
        />

        {/* Threads removed: vapour background only */}

        {/* Optional soft bloom via postprocessing */}
        {!reducedMotion && (
          <EffectComposer multisampling={0}>
            <SMAA />
            <Bloom intensity={0.3} luminanceThreshold={0.5} luminanceSmoothing={0.25} radius={0.7} />
          </EffectComposer>
        )}
        {/* Remove environment reflections now that wires are gone */}
      </Canvas>
    </div>
  )
}

export default HeroCanvas


