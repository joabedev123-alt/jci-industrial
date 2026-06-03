"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedGear() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
      
      // Simula a desmontagem no scroll
      const scrollY = window.scrollY;
      const factor = Math.min(scrollY / 1000, 1);
      meshRef.current.scale.setScalar(1 + factor * 0.5);
      meshRef.current.position.y = factor * -2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusGeometry args={[2, 0.5, 16, 32]} />
        <MeshDistortMaterial
          color="#153A8A"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Gear3D() {
  return (
    <div className="w-full h-full absolute inset-0 mix-blend-screen opacity-40">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#2B67F6" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#D9E1F2" />
        <AnimatedGear />
      </Canvas>
    </div>
  );
}
