"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, OrbitControls, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function HolographicCore() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#7dd3fc', emissive: '#1f6feb', emissiveIntensity: 0.8, metalness: 0.6, roughness: 0.2 }), [])
  const ringMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#1f6feb', transparent: true, opacity: 0.25, side: THREE.DoubleSide }), [])

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.15 + mouse.x * 0.5
    meshRef.current.rotation.x = 0.2 + mouse.y * 0.2
  })

  return (
    <group ref={meshRef}>
      <mesh material={glowMaterial}>
        <icosahedronGeometry args={[1.3, 1]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={ringMaterial}>
        <ringGeometry args={[1.8, 2.1, 64]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 3]} material={ringMaterial}>
        <ringGeometry args={[2.3, 2.6, 64]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, -Math.PI / 3]} material={ringMaterial}>
        <ringGeometry args={[2.8, 3.1, 64]} />
      </mesh>
      <Html center distanceFactor={6}>
        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          VerceBot v2
        </div>
      </Html>
    </group>
  )
}

function EnergyOrbs() {
  const groupRef = useRef<THREE.Group>(null)
  const points = useMemo(() => new Array(6).fill(0).map((_, index) => ({
    phi: (index / 6) * Math.PI * 2,
    radius: 3 + Math.random() * 0.5
  })), [])

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, index) => {
      const point = points[index]
      const angle = elapsed * 0.6 + point.phi
      child.position.x = Math.cos(angle) * point.radius
      child.position.z = Math.sin(angle) * point.radius
      child.position.y = Math.sin(elapsed * 0.8 + index) * 0.6
    })
  })

  return (
    <group ref={groupRef}>
      {points.map((_, index) => (
        <mesh key={index}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#7dd3fc' : '#1f6feb'} emissive={index % 2 === 0 ? '#7dd3fc' : '#1f6feb'} emissiveIntensity={0.9} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  )
}

export function AIRobotCanvas() {
  return (
    <div className="relative h-[420px] w-full max-w-xl">
      <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 via-cobalt/20 to-transparent blur-3xl" />
      <Canvas camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={[0x04060f]} />
        <ambientLight intensity={0.6} />
        <Float speed={2.2} rotationIntensity={0.7} floatIntensity={0.8}>
          <HolographicCore />
        </Float>
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5}>
          <EnergyOrbs />
        </Float>
        <pointLight position={[5, 5, 5]} intensity={3} color="#7dd3fc" />
        <pointLight position={[-5, -3, -5]} intensity={2} color="#1f6feb" />
        <Stars radius={30} depth={40} count={4000} factor={4} saturation={0} fade speed={0.8} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  )
}
