// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, extend, Object3DNode } from '@react-three/fiber';
import { useTexture, Text, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Physics simulation parameters
const segmentCount = 40; // Number of rope segments
const segmentLength = 0.12;
const gravity = new THREE.Vector3(0, -30, 0);
const damping = 0.9;

// Extend Three.js with custom geometry if needed (though we use BufferGeometry directly)
extend({ PlaneGeometry: THREE.PlaneGeometry });

const Card = React.forwardRef((props: any, ref) => {
  return (
    <group {...props} ref={ref}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.4, 4.8, 0.1]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Card Content */}
      <group position={[0, 0, 0.06]}>
        {/* White Background Area */}
        <mesh position={[0, 0.5, 0]}>
            <planeGeometry args={[3, 3.5]} />
            <meshBasicMaterial color="#ffffff" />
        </mesh>
        
        {/* Photo Placeholder */}
        <mesh position={[0, 1.2, 0.01]}>
            <planeGeometry args={[2, 1.8]} />
            <meshBasicMaterial color="#f5f5f5" />
            {/* Simple Avatar Graphic */}
            <mesh position={[0, -0.2, 0.01]}>
               <circleGeometry args={[0.6, 32]} />
               <meshBasicMaterial color="#ddd" />
            </mesh>
            <mesh position={[0, 0.1, 0.01]}>
               <circleGeometry args={[0.3, 32]} />
               <meshBasicMaterial color="#bbb" />
            </mesh>
        </mesh>

        {/* Text Content */}
        <Text position={[0, -0.1, 0.01]} fontSize={0.35} color="black" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff" fontWeight="bold">
            SHIVEN
        </Text>
        <Text position={[0, -0.4, 0.01]} fontSize={0.15} color="gray" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff">
            Product Designer
        </Text>

        {/* Bottom Dark Section */}
        <mesh position={[0, -1.8, 0]}>
            <planeGeometry args={[3, 0.8]} />
            <meshBasicMaterial color="#000000" />
        </mesh>
        <Text position={[0, -1.8, 0.01]} fontSize={0.15} color="white" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff" letterSpacing={0.1}>
            CREATIVE DEVELOPER
        </Text>
      </group>
    </group>
  );
});

const Rope = () => {
  const ropeRef = useRef<THREE.Line>(null);
  const cardRef = useRef<THREE.Group>(null);
  
  // Physics state
  const points = useRef(new Array(segmentCount).fill(0).map(() => new THREE.Vector3(0, 0, 0)));
  const prevPoints = useRef(new Array(segmentCount).fill(0).map(() => new THREE.Vector3(0, 0, 0)));
  
  // Mouse interaction
  const [hovered, setHovered] = useState(false);
  const dragStart = useRef(new THREE.Vector3());
  
  useEffect(() => {
    // Initialize rope hanging down
    for (let i = 0; i < segmentCount; i++) {
      points.current[i].set(0, -i * segmentLength + 5, 0); // +5 to offset start position
      prevPoints.current[i].copy(points.current[i]);
    }
  }, []);

  useFrame((state, delta) => {
    // Clamp delta to avoid instability on lag
    const dt = Math.min(delta, 0.02);
    
    // 1. Verlet Integration
    for (let i = 1; i < segmentCount; i++) { // Skip index 0 (anchor)
      const p = points.current[i];
      const pp = prevPoints.current[i];
      
      const velocity = p.clone().sub(pp).multiplyScalar(damping);
      
      // Save current as prev
      pp.copy(p);
      
      // Apply forces
      p.add(velocity).add(gravity.clone().multiplyScalar(dt * dt));
    }

    // 2. Mouse Interaction (Swing effect)
    const mouse = state.pointer;
    // Simple interaction: push the bottom of the rope towards mouse x
    if (cardRef.current) {
         const targetX = (mouse.x * state.viewport.width) / 2;
         const targetY = (mouse.y * state.viewport.height) / 2;
         
         // Very subtle influence on the bottom segments based on mouse
         const influence = 50 * dt;
         const lastIdx = segmentCount - 1;
         points.current[lastIdx].x += (targetX - points.current[lastIdx].x) * influence * 0.1;
         points.current[lastIdx].y += (targetY - points.current[lastIdx].y) * influence * 0.1;
         points.current[lastIdx].z += 5 * dt; // slight push forward
    }

    // 3. Constraints (Rope Length)
    // Iterate multiple times for stability
    for (let iter = 0; iter < 10; iter++) {
        // Anchor point constraint
        points.current[0].set(0, 2, 0); // Top fixed point

        for (let i = 0; i < segmentCount - 1; i++) {
            const p1 = points.current[i];
            const p2 = points.current[i + 1];
            
            const diff = p2.clone().sub(p1);
            const dist = diff.length();
            
            if (dist > 0.001) {
                const correction = diff.multiplyScalar((dist - segmentLength) / dist * 0.5);
                if (i !== 0) p1.add(correction); // Don't move anchor
                p2.sub(correction);
            }
        }
    }

    // 4. Update Visuals
    // Update Rope Line
    if (ropeRef.current) {
        ropeRef.current.geometry.setFromPoints(points.current);
        ropeRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Update Card Position & Rotation
    if (cardRef.current) {
        const lastP = points.current[segmentCount - 1];
        const secondLastP = points.current[segmentCount - 2];
        
        // Position
        cardRef.current.position.copy(lastP);
        
        // Rotation based on the last segment vector
        const dir = lastP.clone().sub(secondLastP).normalize();
        
        // Calculate rotation to align with rope
        const targetQ = new THREE.Quaternion();
        const up = new THREE.Vector3(0, 1, 0);
        // We want the card 'up' (Y) to align with -dir (rope goes up)
        const matrix = new THREE.Matrix4().lookAt(secondLastP, lastP, new THREE.Vector3(0,0,1));
        targetQ.setFromRotationMatrix(matrix);

        // Smooth rotation
        cardRef.current.quaternion.slerp(targetQ, 0.1);
    }
  });

  return (
    <group>
      <line ref={ropeRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#333" linewidth={2} />
      </line>
      
      <Card 
        ref={cardRef} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  );
};

const Lanyard: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }} shadows>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Rope />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Lanyard;