"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

import { useTheme } from "next-themes";

function NetworkParticles(props: any) {
  const { theme } = useTheme();
  // Optimize count based on window width
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const count = isMobile ? 400 : 1500; 
  
  const ref = useRef<THREE.Points>(null);

  // Generate positions
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 15; 
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15; 
        positions[i * 3 + 2] = (Math.random() - 0.5) * 5;  
        
        velocities[i * 3] = (Math.random() - 0.5) * 0.005;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [positions, velocities];
  }, [count]);

  const mousePosition = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    if (!ref.current) return;
    
    const { pointer, viewport } = state;
    const targetX = (pointer.x * viewport.width) / 2;
    const targetY = (pointer.y * viewport.height) / 2;
    
    mousePosition.current.x += (targetX - mousePosition.current.x) * 0.1;
    mousePosition.current.y += (targetY - mousePosition.current.y) * 0.1;

    const positionsAttribute = ref.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
        let px = positionsAttribute.getX(i);
        let py = positionsAttribute.getY(i);
        let pz = positionsAttribute.getZ(i);

        px += velocities[i * 3];
        py += velocities[i * 3 + 1];
        pz += velocities[i * 3 + 2];

        if (px > 7.5) px = -7.5;
        if (px < -7.5) px = 7.5;
        if (py > 7.5) py = -7.5;
        if (py < -7.5) py = 7.5;

        // Interaction
        const dx = px - mousePosition.current.x;
        const dy = py - mousePosition.current.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        
        // Repulsion
        if (dist < 2) {
             const angle = Math.atan2(dy, dx);
             const force = (2 - dist) * 0.01;
             px += Math.cos(angle) * force;
             py += Math.sin(angle) * force;
        }

        positionsAttribute.setXYZ(i, px, py, pz);
    }
    
    positionsAttribute.needsUpdate = true;
    
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x += 0.0002;
  });

  const particleColor = theme === 'light' ? "#4285F4" : "#808080"; // Google Blue for light, Gray for dark

  return (
    <group>
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
            <PointMaterial
                transparent
                color={particleColor}
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={theme === 'light' ? 0.8 : 0.6}
            />
        </Points>
    </group>
  );
}

export function GravityBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="fixed inset-0 z-[-1] bg-background" />;

  return (
    <div className={`fixed inset-0 z-[-1] pointer-events-none transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#0a0a0a]'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <NetworkParticles />
      </Canvas>
      {/* Vignette Overlay for premium feel (Dark mode only) */}
      {theme !== 'light' && (
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
      )}
    </div>
  );
}
