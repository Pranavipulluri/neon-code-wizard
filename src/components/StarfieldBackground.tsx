import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    particles: THREE.Points | null;
    lines: THREE.LineSegments | null;
    particlePositions: Float32Array | null;
    particleVelocities: Array<{ x: number; y: number; z: number }>;
    originalPositions: Array<{ x: number; y: number; z: number }>;
    time: number;
    isMouseMoving: boolean;
    mouseTimeout: NodeJS.Timeout | null;
    mouse: THREE.Vector2;
    mouseInfluence: THREE.Vector3;
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    particles: null,
    lines: null,
    particlePositions: null,
    particleVelocities: [],
    originalPositions: [],
    time: 0,
    isMouseMoving: false,
    mouseTimeout: null,
    mouse: new THREE.Vector2(),
    mouseInfluence: new THREE.Vector3(),
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const particleCount = 1500;
    const connectionDistance = 120;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1000, 3000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 1000;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    canvasRef.current.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      [1.0, 1.0, 1.0], // White
      [0.53, 0.85, 1.0], // Light blue
      [1.0, 0.67, 0.53], // Orange
      [0.67, 0.53, 1.0], // Purple
      [0.53, 1.0, 0.67], // Green
      [1.0, 1.0, 0.53], // Yellow
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      const x = (Math.random() - 0.5) * 3000;
      const y = (Math.random() - 0.5) * 3000;
      const z = (Math.random() - 0.5) * 3000;
      
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      
      sceneRef.current.originalPositions.push({ x, y, z });
      sceneRef.current.particleVelocities.push({
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
        z: (Math.random() - 0.5) * 0.3
      });
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color[0];
      colors[i3 + 1] = color[1];
      colors[i3 + 2] = color[2];
      
      sizes[i] = Math.random() * 2 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    sceneRef.current.particlePositions = positions;

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create connections
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Store references
    sceneRef.current.scene = scene;
    sceneRef.current.camera = camera;
    sceneRef.current.renderer = renderer;
    sceneRef.current.particles = particles;
    sceneRef.current.lines = lines;

    // Mouse event handlers
    const handleMouseMove = (event: MouseEvent) => {
      sceneRef.current.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      sceneRef.current.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      sceneRef.current.mouseInfluence.x = (event.clientX / window.innerWidth - 0.5) * 1500;
      sceneRef.current.mouseInfluence.y = (event.clientY / window.innerHeight - 0.5) * -1500;
      
      sceneRef.current.isMouseMoving = true;
      if (sceneRef.current.mouseTimeout) clearTimeout(sceneRef.current.mouseTimeout);
      sceneRef.current.mouseTimeout = setTimeout(() => {
        sceneRef.current.isMouseMoving = false;
      }, 150);
    };

    const handleResize = () => {
      if (sceneRef.current.camera && sceneRef.current.renderer) {
        sceneRef.current.camera.aspect = window.innerWidth / window.innerHeight;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Update connections function
    const updateConnections = () => {
      if (!sceneRef.current.particlePositions || !sceneRef.current.lines) return;
      
      const positions: number[] = [];
      const connectionCounts = new Array(particleCount).fill(0);
      const maxConnections = 4;
      
      for (let i = 0; i < particleCount; i++) {
        if (connectionCounts[i] >= maxConnections) continue;
        
        const i3 = i * 3;
        const x1 = sceneRef.current.particlePositions[i3];
        const y1 = sceneRef.current.particlePositions[i3 + 1];
        const z1 = sceneRef.current.particlePositions[i3 + 2];
        
        for (let j = i + 1; j < particleCount; j++) {
          if (connectionCounts[i] >= maxConnections || connectionCounts[j] >= maxConnections) continue;
          
          const j3 = j * 3;
          const x2 = sceneRef.current.particlePositions[j3];
          const y2 = sceneRef.current.particlePositions[j3 + 1];
          const z2 = sceneRef.current.particlePositions[j3 + 2];
          
          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < connectionDistance) {
            positions.push(x1, y1, z1);
            positions.push(x2, y2, z2);
            
            connectionCounts[i]++;
            connectionCounts[j]++;
          }
        }
      }
      
      if (positions.length > 0) {
        sceneRef.current.lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        sceneRef.current.lines.geometry.attributes.position.needsUpdate = true;
      }
    };

    // Animation loop
    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate);
      
      sceneRef.current.time += 0.008;
      
      if (sceneRef.current.particlePositions) {
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const original = sceneRef.current.originalPositions[i];
          const velocity = sceneRef.current.particleVelocities[i];
          
          sceneRef.current.particlePositions[i3] += velocity.x;
          sceneRef.current.particlePositions[i3 + 1] += velocity.y;
          sceneRef.current.particlePositions[i3 + 2] += velocity.z;
          
          if (sceneRef.current.isMouseMoving) {
            const dx = sceneRef.current.particlePositions[i3] - sceneRef.current.mouseInfluence.x;
            const dy = sceneRef.current.particlePositions[i3 + 1] - sceneRef.current.mouseInfluence.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              const force = (200 - distance) / 200;
              sceneRef.current.particlePositions[i3] += dx * force * 0.005;
              sceneRef.current.particlePositions[i3 + 1] += dy * force * 0.005;
            }
          }
          
          sceneRef.current.particlePositions[i3] += Math.sin(sceneRef.current.time + original.x * 0.002) * 0.3;
          sceneRef.current.particlePositions[i3 + 1] += Math.cos(sceneRef.current.time + original.y * 0.002) * 0.3;
          sceneRef.current.particlePositions[i3 + 2] += Math.sin(sceneRef.current.time + original.z * 0.002) * 0.2;
          
          // Boundary wrapping
          if (sceneRef.current.particlePositions[i3] > 1500) sceneRef.current.particlePositions[i3] = -1500;
          if (sceneRef.current.particlePositions[i3] < -1500) sceneRef.current.particlePositions[i3] = 1500;
          if (sceneRef.current.particlePositions[i3 + 1] > 1500) sceneRef.current.particlePositions[i3 + 1] = -1500;
          if (sceneRef.current.particlePositions[i3 + 1] < -1500) sceneRef.current.particlePositions[i3 + 1] = 1500;
          if (sceneRef.current.particlePositions[i3 + 2] > 1500) sceneRef.current.particlePositions[i3 + 2] = -1500;
          if (sceneRef.current.particlePositions[i3 + 2] < -1500) sceneRef.current.particlePositions[i3 + 2] = 1500;
        }
        
        if (sceneRef.current.particles) {
          sceneRef.current.particles.geometry.attributes.position.needsUpdate = true;
        }
        
        if (sceneRef.current.time % 0.1 < 0.008) {
          updateConnections();
        }
      }
      
      if (sceneRef.current.scene) {
        sceneRef.current.scene.rotation.y += 0.0005;
      }
      
      if (sceneRef.current.camera) {
        sceneRef.current.camera.position.x = Math.sin(sceneRef.current.time * 0.2) * 30;
        sceneRef.current.camera.position.y = Math.cos(sceneRef.current.time * 0.15) * 20;
      }
      
      if (sceneRef.current.renderer && sceneRef.current.scene && sceneRef.current.camera) {
        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      if (sceneRef.current.mouseTimeout) {
        clearTimeout(sceneRef.current.mouseTimeout);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (canvasRef.current && sceneRef.current.renderer) {
        canvasRef.current.removeChild(sceneRef.current.renderer.domElement);
      }
      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div 
        className="fixed w-72 h-72 rounded-full pointer-events-none transition-all duration-300 opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        }}
        id="mouseGlow"
      />
    </>
  );
};

export default StarfieldBackground;