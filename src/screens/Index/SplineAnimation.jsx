import React, { useEffect, useState } from 'react';
import { Application } from '@splinetool/runtime';

function SplineAnimation() {
  const [canvasInitialized, setCanvasInitialized] = useState(false);

  useEffect(() => {
    if (!canvasInitialized) {
      const canvas = document.getElementById('canvas3d');
      const app = new Application(canvas);
      app.load('https://prod.spline.design/Jl4yz79eUIWuhwux/scene.splinecode');
      setCanvasInitialized(true);
    }
  }, [canvasInitialized]);

  return (
    <canvas id="canvas3d" />
  );
}

export default SplineAnimation;
