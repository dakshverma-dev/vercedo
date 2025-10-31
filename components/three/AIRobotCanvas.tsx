"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { type ReactNode, useMemo, useRef } from 'react'
import * as THREE from 'three'

function GroundGlow() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.95, 0]}>
        <ringGeometry args={[2, 3.2, 64]} />
        <meshBasicMaterial color="#5046d5" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.96, 0]}>
        <circleGeometry args={[1.95, 64]} />
        <meshBasicMaterial color="#5046d5" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

function RobotModel() {
  const bodyRef = useRef<THREE.Group | null>(null)
  
  // Dark glossy material for main body
  const primaryMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: '#0a0c12',
      roughness: 0.12,
      metalness: 0.95,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      reflectivity: 0.9
    }),
    []
  )
  
  // Lighter material for highlights
  const highlightMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: '#1a1d26',
      roughness: 0.18,
      metalness: 0.92,
      clearcoat: 0.9,
      clearcoatRoughness: 0.08
    }),
    []
  )
  
  // Visor/glass material
  const glassMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: '#0d0f18',
      transparent: true,
      opacity: 0.85,
      roughness: 0.05,
      metalness: 0.3,
      reflectivity: 0.95,
      transmission: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.03
    }),
    []
  )
  
  // Small accent dots/lights
  const accentMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      color: '#6b7fff',
      emissive: '#4d5aff',
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.3
    }),
    []
  )
  
  // Joint material
  const jointMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      color: '#12151d',
      roughness: 0.2,
      metalness: 0.96,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15
    }),
    []
  )

  useFrame(({ clock }) => {
    if (!bodyRef.current) return
    const elapsed = clock.getElapsedTime()
    bodyRef.current.position.y = Math.sin(elapsed * 0.5) * 0.12
    bodyRef.current.rotation.z = Math.sin(elapsed * 0.4) * 0.03
  })

  return (
    <group ref={bodyRef} position={[0, -0.25, 0]}>
      {/* Torso - main body */}
      <mesh material={primaryMaterial} position={[0, 0.55, 0]} scale={[0.85, 1.1, 0.75]}>
        <capsuleGeometry args={[0.5, 1.3, 32, 64]} />
      </mesh>
      
      {/* Chest plate highlight */}
      <mesh material={highlightMaterial} position={[0, 0.85, 0.42]} scale={[0.6, 0.5, 1]}>
        <boxGeometry args={[0.85, 0.65, 0.08]} />
      </mesh>
      
      {/* Waist/pelvis */}
      <mesh material={primaryMaterial} position={[0, -0.25, 0]} scale={[0.95, 0.35, 0.85]}>
        <sphereGeometry args={[0.42, 32, 32]} />
      </mesh>

      {/* Head - helmet style */}
      <group position={[0, 1.55, 0]}>
        {/* Main helmet */}
        <mesh material={primaryMaterial} scale={[1, 1.15, 1]}>
          <sphereGeometry args={[0.48, 64, 64]} />
        </mesh>
        
        {/* Visor/face plate */}
        <mesh material={glassMaterial} position={[0, 0.08, 0.32]} scale={[0.75, 0.55, 0.4]}>
          <sphereGeometry args={[0.48, 48, 48]} />
        </mesh>
        
        {/* Subtle accent dots on visor */}
        <mesh material={accentMaterial} position={[0, 0.12, 0.42]}>
          <sphereGeometry args={[0.03, 16, 16]} />
        </mesh>
        <mesh material={accentMaterial} position={[-0.08, 0.08, 0.42]}>
          <sphereGeometry args={[0.015, 16, 16]} />
        </mesh>
        <mesh material={accentMaterial} position={[0.08, 0.08, 0.42]}>
          <sphereGeometry args={[0.015, 16, 16]} />
        </mesh>
        
        {/* Neck connector */}
        <mesh material={jointMaterial} position={[0, -0.48, 0]} scale={[0.65, 0.25, 0.65]}>
          <cylinderGeometry args={[0.22, 0.26, 0.18, 32]} />
        </mesh>
      </group>

      {/* Shoulders */}
      <group position={[0.72, 1.05, 0]}>
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.24, 32, 32]} />
        </mesh>
      </group>
      <group position={[-0.72, 1.05, 0]}>
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.24, 32, 32]} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.72, 1.05, 0]} rotation={[0, 0, -0.35]}>
        {/* Upper arm */}
        <mesh material={primaryMaterial}>
          <capsuleGeometry args={[0.16, 0.75, 16, 32]} />
        </mesh>
        {/* Elbow */}
        <mesh material={jointMaterial} position={[0, -0.62, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
        </mesh>
        {/* Forearm */}
        <mesh material={primaryMaterial} position={[0, -1.05, 0]}>
          <capsuleGeometry args={[0.14, 0.68, 16, 32]} />
        </mesh>
        {/* Wrist */}
        <mesh material={jointMaterial} position={[0, -1.38, 0]}>
          <sphereGeometry args={[0.16, 24, 24]} />
        </mesh>
        {/* Hand */}
        <mesh material={primaryMaterial} position={[0, -1.62, 0.04]} scale={[1.15, 1, 1.35]}>
          <sphereGeometry args={[0.18, 24, 24]} />
        </mesh>
        {/* Fingers hint - small ridges */}
        <mesh material={highlightMaterial} position={[0, -1.75, 0.12]} scale={[0.8, 0.25, 0.6]}>
          <boxGeometry args={[0.24, 0.1, 0.2]} />
        </mesh>
      </group>

      {/* Left Arm */}
      <group position={[-0.72, 1.05, 0]} rotation={[0, 0, 0.35]}>
        {/* Upper arm */}
        <mesh material={primaryMaterial}>
          <capsuleGeometry args={[0.16, 0.75, 16, 32]} />
        </mesh>
        {/* Elbow */}
        <mesh material={jointMaterial} position={[0, -0.62, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
        </mesh>
        {/* Forearm */}
        <mesh material={primaryMaterial} position={[0, -1.05, 0]}>
          <capsuleGeometry args={[0.14, 0.68, 16, 32]} />
        </mesh>
        {/* Wrist */}
        <mesh material={jointMaterial} position={[0, -1.38, 0]}>
          <sphereGeometry args={[0.16, 24, 24]} />
        </mesh>
        {/* Hand */}
        <mesh material={primaryMaterial} position={[0, -1.62, 0.04]} scale={[1.15, 1, 1.35]}>
          <sphereGeometry args={[0.18, 24, 24]} />
        </mesh>
        {/* Fingers hint */}
        <mesh material={highlightMaterial} position={[0, -1.75, 0.12]} scale={[0.8, 0.25, 0.6]}>
          <boxGeometry args={[0.24, 0.1, 0.2]} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group position={[0.28, -0.95, 0]}>
        {/* Hip joint */}
        <mesh material={jointMaterial} position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 24, 24]} />
        </mesh>
        {/* Thigh */}
        <mesh material={primaryMaterial} position={[0, -0.48, 0]}>
          <capsuleGeometry args={[0.2, 0.85, 18, 32]} />
        </mesh>
        {/* Knee */}
        <mesh material={jointMaterial} position={[0, -0.92, 0]}>
          <sphereGeometry args={[0.22, 24, 24]} />
        </mesh>
        {/* Shin */}
        <mesh material={primaryMaterial} position={[0, -1.35, 0]}>
          <capsuleGeometry args={[0.18, 0.78, 18, 32]} />
        </mesh>
        {/* Ankle */}
        <mesh material={jointMaterial} position={[0, -1.76, 0]}>
          <sphereGeometry args={[0.19, 24, 24]} />
        </mesh>
        {/* Foot */}
        <mesh material={primaryMaterial} position={[0, -1.95, 0.22]} scale={[1.15, 0.3, 1.65]}>
          <sphereGeometry args={[0.26, 32, 32]} />
        </mesh>
      </group>

      {/* Left Leg */}
      <group position={[-0.28, -0.95, 0]}>
        {/* Hip joint */}
        <mesh material={jointMaterial} position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 24, 24]} />
        </mesh>
        {/* Thigh */}
        <mesh material={primaryMaterial} position={[0, -0.48, 0]}>
          <capsuleGeometry args={[0.2, 0.85, 18, 32]} />
        </mesh>
        {/* Knee */}
        <mesh material={jointMaterial} position={[0, -0.92, 0]}>
          <sphereGeometry args={[0.22, 24, 24]} />
        </mesh>
        {/* Shin */}
        <mesh material={primaryMaterial} position={[0, -1.35, 0]}>
          <capsuleGeometry args={[0.18, 0.78, 18, 32]} />
        </mesh>
        {/* Ankle */}
        <mesh material={jointMaterial} position={[0, -1.76, 0]}>
          <sphereGeometry args={[0.19, 24, 24]} />
        </mesh>
        {/* Foot */}
        <mesh material={primaryMaterial} position={[0, -1.95, 0.22]} scale={[1.15, 0.3, 1.65]}>
          <sphereGeometry args={[0.26, 32, 32]} />
        </mesh>
      </group>
    </group>
  )
}

function InteractiveRig({ children }: { children: ReactNode }) {
  const groupRef = useRef<THREE.Group | null>(null)

  useFrame(({ mouse }) => {
    if (!groupRef.current) return
    const targetY = mouse.x * Math.PI * 0.18
    const targetX = mouse.y * Math.PI * 0.12
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetX, 0.08)
  })

  return <group ref={groupRef}>{children}</group>
}

function CameraRig() {
  const { camera } = useThree()

  useFrame(({ mouse }) => {
    const targetX = mouse.x * 1.2
    const targetY = mouse.y * 0.8
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export function AIRobotCanvas() {
  return (
    <div className="relative h-[540px] w-full">
      <Canvas camera={{ position: [0, 0.8, 6.5], fov: 38 }} shadows>
        <color attach="background" args={[0x04050d]} />
        <fog attach="fog" args={[0x04050d, 10, 18]} />
        
        {/* Ambient base lighting */}
        <ambientLight intensity={0.4} />
        
        {/* Key light - main illumination from top-right */}
        <spotLight 
          position={[6, 8, 5]} 
          angle={0.7} 
          penumbra={0.4} 
          intensity={3.2} 
          color="#b8c5ff" 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Fill light - softer from left */}
        <spotLight 
          position={[-5, 5, 4]} 
          angle={0.6} 
          penumbra={0.5} 
          intensity={1.8} 
          color="#7d88ff" 
        />
        
        {/* Rim light - highlights edges from behind */}
        <directionalLight 
          position={[0, 3, -4]} 
          intensity={2.2} 
          color="#c5d3ff" 
        />
        
        {/* Side accent lights */}
        <pointLight position={[4, 2, 3]} intensity={1.8} color="#9eaaff" />
        <pointLight position={[-4, 3, 2]} intensity={1.5} color="#8590ff" />
        
        {/* Bottom up-light for dramatic effect */}
        <pointLight position={[0, -2, 2]} intensity={1.2} color="#6a76ff" />
        
        <InteractiveRig>
          <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.45}>
            <RobotModel />
          </Float>
        </InteractiveRig>
        
        <GroundGlow />
        
        {/* HDR environment for realistic reflections */}
        <Environment preset="night" />
        
        <CameraRig />
      </Canvas>
    </div>
  )
}
