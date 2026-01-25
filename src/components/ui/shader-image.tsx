"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

// Vertex Shader: Pass UV coordinates to fragment shader and handle position
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Fragment Shader: Smooth wave distortion effect driven by mouse and time
const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;
uniform float uHover;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Calculate distance from mouse pointer (mapped to UV space)
  float dist = distance(uv, uMouse);
  
  // Create a wave effect that decays with distance
  // uHover controls the intensity of the effect
  float wave = sin(dist * 10.0 - uTime * 2.0) * 0.05 * uHover;
  
  // Apply distortion to UVs
  uv += wave;
  
  // Sample texture with distorted UVs
  vec4 color = texture2D(uTexture, uv);
  
  gl_FragColor = color;
}
`;

interface WaveImageProps {
  src: string;
  className?: string;
}

const ImagePlane = ({ src }: { src: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const texture = useTexture(src);
  
  // Uniforms for the shader
  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uHover: { value: 0 },
    }),
    [texture]
  );

  useFrame((state) => {
    if (mesh.current) {
        // Update time uniform
        const { material } = mesh.current as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>; 
        if(material.uniforms) {
            material.uniforms.uTime.value = state.clock.getElapsedTime();
            
            // LERp hover value for smooth transition
            material.uniforms.uHover.value = THREE.MathUtils.lerp(
                material.uniforms.uHover.value,
                (mesh.current.userData.hover ? 1 : 0),
                0.1
            );
        }
    }
  });

  const handlePointerMove = (e: any) => {
    if (mesh.current) {
      const { material } = mesh.current as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
        if(material.uniforms) {
            material.uniforms.uMouse.value.x = e.uv.x;
            material.uniforms.uMouse.value.y = e.uv.y;
        }
    }
  };

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => {
          if(mesh.current) mesh.current.userData.hover = true;
      }}
      onPointerOut={() => {
          if(mesh.current) mesh.current.userData.hover = false;
      }}
      onPointerMove={handlePointerMove}
    >
      <planeGeometry args={[5, 3, 32, 32]} /> {/* Adjust args as needed or make responsive */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};


export function ShaderImage({ src, className }: WaveImageProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[300px]", className)}>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <React.Suspense fallback={null}>
           <ImagePlane src={src} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
