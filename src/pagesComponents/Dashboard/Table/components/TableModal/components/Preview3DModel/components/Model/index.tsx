'use client';
import React, { useEffect, useMemo } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { getLoader, getVolumeByGeometry } from '@/shared/utils/computeVolume';

type ModulePropsType = {
  url: string;
  setDimensions: (arg: { x: number; y: number; z: number }) => void;
  setVolume: (arg: { volume: string }) => void;
};
type ThreeContext = {
  camera: THREE.PerspectiveCamera;
};
type LoadedModel = THREE.BufferGeometry | THREE.Group | THREE.Mesh;

export const Model: React.FC<ModulePropsType> = ({
  url,
  setDimensions,
  setVolume,
}) => {
  const loader = useMemo(() => getLoader(url), [url]);

  const geometry: LoadedModel | null = useLoader(loader, url) as LoadedModel;

  const meshRef = React.useRef<THREE.Mesh>(null);

  const { camera } = useThree() as unknown as ThreeContext;

  useEffect(() => {
    if (!geometry) {
      setVolume({ volume: '0' });
      return;
    }
    const volume = getVolumeByGeometry(
      geometry as THREE.BufferGeometry | THREE.Group | THREE.Mesh,
    );
    setVolume({ volume: volume.toFixed(2) });
  }, [geometry]);

  useEffect(() => {
    if (meshRef.current) {
      const box = new THREE.Box3().setFromObject(meshRef.current);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      box.getCenter(center);
      box.getSize(size);

      setDimensions(size);

      meshRef.current.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

      camera.position.set(cameraZ, cameraZ, cameraZ); // изометрический угол
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [geometry, camera]);

  if (geometry instanceof THREE.Mesh) {
    return (
      <primitive object={geometry} ref={meshRef}>
        <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
      </primitive>
    );
  }
  if (geometry instanceof THREE.Group) {
    return (
      <primitive object={geometry} ref={meshRef}>
        <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
      </primitive>
    );
  }
  if (geometry instanceof THREE.BufferGeometry) {
    return (
      <mesh geometry={geometry} ref={meshRef}>
        <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
      </mesh>
    );
  }
  return null;
};
