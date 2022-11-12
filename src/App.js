import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, MapControls } from '@react-three/drei';

import Simulation from './simulation/World';

export default function App() {
  const canvasRef = useRef();
  const cameraRef = useRef();

  const fov = 60;
  const aspect = 1920 / 1080;
  const near = 0.1;
  const far = 10000.0;

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <div style={{height: 650, width: 1000, borderRadius: 5, borderStyle: 'solid', margin: 10, backgroundColor: 'lightblue'}}>
          <Canvas ref={canvasRef}>
            <PerspectiveCamera makeDefault {...{position: [-201, 81, 68], fov, aspect, near, far}} ref={cameraRef} />
          <Suspense fallback={null}>
            <Simulation {...{cameraRef, canvasRef}} />
          </Suspense>
          <MapControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>
    </div>
  );
}