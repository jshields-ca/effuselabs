'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Animated 3D sphere with wave distortion
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the sphere slowly
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#22C5C3" // Brand teal
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

// Multiple floating spheres for depth
function FloatingSpheres() {
  const spheres = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      scale: 0.5 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 0.5,
      color: i === 0 ? "#22C5C3" : i === 1 ? "#FFD25A" : "#22C5C3"
    }))
  }, [])

  return (
    <>
      {spheres.map((sphere, i) => (
        <FloatingSphere key={i} {...sphere} />
      ))}
    </>
  )
}

function FloatingSphere({ 
  position, 
  scale, 
  speed, 
  color 
}: { 
  position: [number, number, number]
  scale: number
  speed: number
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={2}
        roughness={0.2}
        metalness={0.6}
        transparent
        opacity={0.4}
      />
    </Sphere>
  )
}

interface TealWave3DProps {
  className?: string
}

export function TealWave3D({ className }: TealWave3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        performance={{
          min: 0.5 // Maintain at least 50% of target framerate
        }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Main directional light */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#ffffff"
        />
        
        {/* Point light for highlights */}
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5}
          color="#FFD25A" // Brand gold for accent
        />
        
        {/* Main animated sphere */}
        <AnimatedSphere />
        
        {/* Background floating spheres */}
        <FloatingSpheres />
      </Canvas>
    </div>
  )
}
