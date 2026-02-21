"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedStars(props: any) {
  const ref = useRef<THREE.Points>(null);
  const ref2 = useRef<THREE.Points>(null);
  
  // Generate main star field
  const starField = useMemo(() => {
    const positions = new Float32Array(7000 * 3);
    for (let i = 0; i < 7000; i++) {
      const r = 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  // Generate cyan nebula particles
  const nebulaCyan = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 1.5 + Math.random() * 0.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
    if (ref2.current) {
      ref2.current.rotation.x += delta / 25;
      ref2.current.rotation.y += delta / 30;
    }
  });

  return (
    <group>
      {/* Main Star Field - Cyan */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={starField} stride={3} frustumCulled={false} {...props}>
          <PointMaterial
            transparent
            color="#00f3ff"
            size={0.003}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.8}
          />
        </Points>
      </group>

      {/* Secondary Nebula - Purple */}
      <group rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <Points ref={ref2} positions={nebulaCyan} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#bd00ff"
            size={0.004}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.5}
          />
        </Points>
      </group>
    </group>
  );
}

// Floating geometric shapes
function GeometricShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[3, 1, -2]}>
      <mesh>
        <octahedronGeometry args={[0.3]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function GeometricShapes2() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={[-3, -1, -1]}>
      <mesh>
        <icosahedronGeometry args={[0.25]} />
        <meshBasicMaterial color="#bd00ff" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-cyber-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black opacity-80 z-10 pointer-events-none" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-10 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <AnimatedStars />
        <GeometricShapes />
        <GeometricShapes2 />
      </Canvas>

      {/* Additional CSS Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-secondary/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-accent/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
