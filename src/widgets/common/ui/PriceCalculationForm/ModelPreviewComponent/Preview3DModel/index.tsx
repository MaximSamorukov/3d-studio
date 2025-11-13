'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './components/Model';
import { ErrorBoundary } from './components/ErrorBoundary';
import { observer } from 'mobx-react-lite';
import { CircularProgress } from '@mui/material';
import s from './style.module.scss';

export const Preview3DModel = observer(({ url }: { url: string }) => {
  if (!url) {
    return (
      <div className={s.container}>
        <div className={s.containerView} />
        <div className={s.containerViewLoader}>
          <CircularProgress size={40} color="secondary" />
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
              <Model url={url} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </ErrorBoundary>
      </div>
    </div>
  );
});
