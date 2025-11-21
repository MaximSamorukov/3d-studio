import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js';
import { ALLOWED_EXTENSIONS_ENUM } from '../constants/constants';

/**
 * Вычисляет объем геометрии в кубических единицах (зависит от масштаба модели)
 */
export function computeVolume(geometry: THREE.BufferGeometry): number {
  const position = geometry.attributes.position;
  const index = geometry.index;
  let volume = 0;

  // Создаём временные вектора для треугольников
  const p1 = new THREE.Vector3();
  const p2 = new THREE.Vector3();
  const p3 = new THREE.Vector3();

  if (index) {
    // Индексированная геометрия
    const indices = index.array;
    for (let i = 0; i < indices.length; i += 3) {
      p1.fromBufferAttribute(position, indices[i]);
      p2.fromBufferAttribute(position, indices[i + 1]);
      p3.fromBufferAttribute(position, indices[i + 2]);
      volume += signedVolumeOfTriangle(p1, p2, p3);
    }
  } else {
    // Неиндексированная
    for (let i = 0; i < position.count; i += 3) {
      p1.fromBufferAttribute(position, i);
      p2.fromBufferAttribute(position, i + 1);
      p3.fromBufferAttribute(position, i + 2);
      volume += signedVolumeOfTriangle(p1, p2, p3);
    }
  }

  return Math.abs(volume);
}

/**
 * Вычисляет "ориентированный" объем для одного треугольника
 */
function signedVolumeOfTriangle(
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  p3: THREE.Vector3,
): number {
  return p1.dot(p2.cross(p3)) / 6.0;
}

export async function getVolume(file: File): Promise<number> {
  const arrayBuffer = await file.arrayBuffer();
  const LoaderClass = getLoader(file.name);
  const loader = new LoaderClass();
  if (!loader) return 0;
  const parsed = loader.parse(arrayBuffer);

  if (parsed instanceof THREE.BufferGeometry) {
    return computeVolume(parsed);
  }

  if (parsed instanceof THREE.Mesh) {
    return computeVolume(parsed.geometry);
  }

  if (parsed instanceof THREE.Group) {
    let total = 0;

    parsed.traverse((obj) => {
      if (
        obj instanceof THREE.Mesh &&
        obj.geometry instanceof THREE.BufferGeometry
      ) {
        total += computeVolume(obj.geometry);
      }
    });

    return total;
  }
  return 0;
}

export function getVolumeByGeometry(
  geom: THREE.BufferGeometry | THREE.Group | THREE.Mesh,
): number {
  if (geom instanceof THREE.BufferGeometry) {
    return computeVolume(geom);
  }

  if (geom instanceof THREE.Mesh) {
    if (geom.geometry instanceof THREE.BufferGeometry) {
      return computeVolume(geom.geometry);
    }
    return 0;
  }

  if (geom instanceof THREE.Group) {
    let total = 0;

    geom.traverse((obj) => {
      if (
        obj instanceof THREE.Mesh &&
        obj.geometry instanceof THREE.BufferGeometry
      ) {
        total += computeVolume(obj.geometry);
      }
    });

    return total;
  }
  return 0;
}

export const getLoader = (
  fileName: string | null,
): typeof STLLoader | typeof ThreeMFLoader | typeof AMFLoader => {
  const extension = (fileName || '').split('.').pop()?.toLowerCase();
  switch (extension) {
    case ALLOWED_EXTENSIONS_ENUM.STL:
      return STLLoader;
    case ALLOWED_EXTENSIONS_ENUM.THREE_MF:
      return ThreeMFLoader;
    case ALLOWED_EXTENSIONS_ENUM.AMF:
      return AMFLoader;
    default:
      return STLLoader;
  }
};
