'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
    const ref = useRef<THREE.Points>(null!)
    const count = 2000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.03
            ref.current.rotation.y = state.clock.elapsedTime * 0.05
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled>
            <PointMaterial
                transparent
                color="#c9a227"
                size={0.03}
                sizeAttenuation
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    )
}

function FloatingLines() {
    const group = useRef<THREE.Group>(null!)

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.02
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
        }
    })

    const lines = []
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2
        const radius = 4 + Math.random() * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const points = [new THREE.Vector3(x, -3, z), new THREE.Vector3(x * 0.5, 3, z * 0.5)]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: '#00d4ff', transparent: true, opacity: 0.15 })
        const line = new THREE.Line(geometry, material)
        lines.push(<primitive key={i} object={line} />)
    }

    return <group ref={group}>{lines}</group>
}

export default function HeroBackground() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.5} />
            <ParticleField />
            <FloatingLines />
        </Canvas>
    )
}
