'use client';
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './ui/Model';
import { ErrorBoundary } from './ui/ErrorBoundary';
import { Controls } from './ui/Controls';
import { observer } from 'mobx-react-lite';
import { CircularProgress } from '@mui/material';
import s from './style.module.scss';

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

  if (!url) {
    return (
      <div className={s.container}>
        <div className={s.containerView} />
        <div className={s.containerViewLoader}>
          <CircularProgress size={40} color="secondary" />
        </div>
        <div className={s.containerControls}>
          <Controls x={0} y={0} z={0} volume={'0'} />
        </div>
      </div>
    );
  }
  return (
    <div className={s.container}>
      <div className={s.containerView}>
        <ErrorBoundary fallback={<>Ошибка чтения файла</>}>
          <Canvas camera={{ position: [0, 0, 80], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
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
