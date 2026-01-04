"use client";

import { OrbitControls, useTexture } from "@react-three/drei";
import { useSyncExternalStore, Suspense } from "react";
import * as THREE from "three";

function subscribeToMediaQuery(query: string, cb: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

function getMediaQuerySnapshot(query: string) {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (cb) => subscribeToMediaQuery("(prefers-reduced-motion: reduce)", cb),
    () => getMediaQuerySnapshot("(prefers-reduced-motion: reduce)"),
    getServerSnapshot
  );
}

function GlobeMesh() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Texture loading with error handling
  const texture = useTexture("/textures/earth.png", (texture) => {
    // Texture yüklendiğinde optimize et
    if (texture instanceof THREE.Texture) {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.colorSpace = THREE.SRGBColorSpace;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 2, 6]} intensity={1.6} />
      <directionalLight position={[-4, -2, 2]} intensity={0.6} />

      <mesh>
        <sphereGeometry args={[2, 48, 32]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={1}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {!prefersReducedMotion && (
        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.15}
        />
      )}
    </>
  );
}

export default function Globe() {
  return (
    <Suspense fallback={null}>
      <GlobeMesh />
    </Suspense>
  );
}
