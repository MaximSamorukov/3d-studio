import * as THREE from 'three';

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
