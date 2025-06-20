"use client";

import { useRef, useMemo } from 'react'; // Importamos useMemo
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedMesh() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const geometryRef = useRef<THREE.BufferGeometry>(null!);

    const originalPositions = useMemo(() => {
        if (geometryRef.current) {
            return geometryRef.current.attributes.position.clone();
        }
    }, [geometryRef.current]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0005;
        }

        if (geometryRef.current && originalPositions) {
            const time = state.clock.getElapsedTime();
            const positions = geometryRef.current.attributes.position.array as Float32Array;

            const noiseFrequency = 3.0;
            const noiseAmplitude = 0.03;

            for (let i = 0; i < positions.length; i += 3) {
                const originalX = originalPositions.array[i];
                const originalY = originalPositions.array[i + 1];
                const originalZ = originalPositions.array[i + 2];

                const noiseX = Math.sin(time + originalX * noiseFrequency) * noiseAmplitude;
                const noiseY = Math.sin(time + originalY * noiseFrequency) * noiseAmplitude;
                const noiseZ = Math.sin(time + originalZ * noiseFrequency) * noiseAmplitude;

                positions[i] = originalX + noiseX;
                positions[i + 1] = originalY + noiseY;
                positions[i + 2] = originalZ + noiseZ;
            }

            geometryRef.current.attributes.position.needsUpdate = true;
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry ref={geometryRef} args={[2.5, 2]} />
            <meshStandardMaterial wireframe wireframeLinewidth={2} color="white" />
        </mesh>
    );
}

export default function LowPolyBackground() {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Canvas camera={{ position: [0, 0, 2.0] }}>
                <ambientLight color="white" intensity={0.1} />
                <pointLight color="white" position={[5, 5, 5]} intensity={100} />
                <AnimatedMesh />
            </Canvas>
        </div>
    );
}