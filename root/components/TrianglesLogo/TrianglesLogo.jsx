import React, { useEffect, useRef } from 'react';
const configs = {
  1: [0, 0, 15, 0, 0, 15],
  2: [0, 0, 15, 0, 15, 15],
  3: [15, 0, 15, 15, 0, 15],
  4: [0, 0, 15, 15, 15, 15],
  5: [15, 0, 30, 0, 15, 15],
  6: [15, 0, 30, 0, 30, 15],
  7: [30, 0, 30, 15, 15, 15],
  8: [15, 0, 30, 15, 15, 15],
  9: [0, 15, 15, 15, 0, 30],
  10: [0, 15, 15, 15, 15, 30],
  11: [15, 15, 15, 30, 0, 30],
  12: [0, 15, 15, 30, 0, 30],
  13: [15, 15, 30, 15, 15, 30],
  14: [15, 15, 30, 15, 30, 30],
  15: [30, 15, 30, 30, 15, 30],
  16: [15, 15, 30, 30, 15, 30],
};
const trianglesConfigs = [
  { rand116: 0, triangles: [1] },
  { rand116: 1, triangles: [2] },
  { rand116: 2, triangles: [3] },
  { rand116: 3, triangles: [4] },
  { rand116: 4, triangles: [5] },
  { rand116: 5, triangles: [6] },
  { rand116: 6, triangles: [7] },
  { rand116: 7, triangles: [8] },
  { rand116: 8, triangles: [9] },
  { rand116: 9, triangles: [10] },
  { rand116: 10, triangles: [11] },
  { rand116: 11, triangles: [12] },
  { rand116: 12, triangles: [13] },
  { rand116: 13, triangles: [14] },
  { rand116: 14, triangles: [15] },
  { rand116: 15, triangles: [16] },
];

const TrianglesLogo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 60;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw(ctx);
  }, []);

  const drawTri16 = (ctx, x, y, num) => {
    let [x1, y1, x2, y2, x3, y3] = configs[num];
    ctx.beginPath();
    ctx.moveTo(x + x1, y + y1);
    ctx.lineTo(x + x2, y + y2);
    ctx.lineTo(x + x3, y + y3);
    ctx.closePath();
    ctx.fill();
  };
  const drawSquare = (ctx, x, y, wh) => {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wh, y);
    ctx.lineTo(x + wh, y + wh);
    ctx.lineTo(x, y + wh);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  };
  const draw = (ctx) => {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';

    for (let x = 0; x <= ctx.canvas.width; x += 30) {
      const randIndex = Math.floor(Math.random() * 16);
      const triangles = trianglesConfigs[randIndex].triangles;
      drawTri16(ctx, x, 0, triangles);
      drawSquare(ctx, x, 0, 30);
    }
  };

  return <canvas ref={canvasRef} />;
};

export default TrianglesLogo;
