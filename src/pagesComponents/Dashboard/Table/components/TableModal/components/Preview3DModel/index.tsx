'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import s from './style.module.scss';
import { Model } from './components/Model';
import { Html } from '@react-three/drei';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Controls } from './components/Controls';
import { observer } from 'mobx-react-lite';

type DimensionsType = {
  x: number;
  y: number;
  z: number;
} | null;

type VolumeType = {
  volume: string;
} | null;
export const Preview3DModel = observer(({ url }: { url: string }) => {
  const [dimentions, setDimentions] = useState<DimensionsType>(null);
  const [volume, setVolume] = useState<VolumeType>(null);

  const handleSetDimensions = (data: DimensionsType) => {
    setDimentions(data);
  };
  const handleSetVolume = (data: VolumeType) => {
    setVolume(data);
  };

  console.log('Объем модели:', volume, 'куб.единиц');
  console.log('Размеры модели:', dimentions);
  return (
    <div className={s.container}>
      <div className={s.containerView}>
        <ErrorBoundary fallback={<>Ошибка чтения файла</>}>
          <Canvas camera={{ position: [0, 0, 80], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <Suspense
              fallback={
                <Html>
                  <div className={s.suspenseFallback}>Загрузка...</div>
                </Html>
              }
            >
              <Model
                url={url}
                setVolume={handleSetVolume}
                setDimensions={handleSetDimensions}
              />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </ErrorBoundary>
      </div>
      <div className={s.containerControls}>
        <Controls
          x={dimentions?.x}
          y={dimentions?.y}
          z={dimentions?.z}
          volume={volume?.volume}
        />
      </div>
    </div>
  );
});
