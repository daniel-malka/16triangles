import React, { useEffect, useRef } from 'react';

const TrianglesLogo = ({ triNum, size }) => {
  const canvasRef = useRef(null);
  let trianglesSize = size * 2;
  const configs = {
    1: [0, 0, trianglesSize / 4, 0, 0, trianglesSize / 4],
    2: [0, 0, trianglesSize / 4, 0, trianglesSize / 4, trianglesSize / 4],
    3: [trianglesSize / 4, 0, trianglesSize / 4, trianglesSize / 4, 0, trianglesSize / 4],
    4: [0, 0, trianglesSize / 4, trianglesSize / 4, 0, trianglesSize / 4],
    5: [trianglesSize / 4, 0, trianglesSize / 2, 0, trianglesSize / 4, trianglesSize / 4],
    6: [trianglesSize / 4, 0, trianglesSize / 2, 0, trianglesSize / 2, trianglesSize / 4],
    7: [trianglesSize / 2, 0, trianglesSize / 2, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4],
    8: [trianglesSize / 4, 0, trianglesSize / 2, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4],
    9: [0, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4, 0, trianglesSize / 2],
    10: [0, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4, trianglesSize / 2],
    11: [trianglesSize / 4, trianglesSize / 4, trianglesSize / 4, trianglesSize / 2, 0, trianglesSize / 2],
    12: [0, trianglesSize / 4, trianglesSize / 4, trianglesSize / 2, 0, trianglesSize / 2],
    13: [trianglesSize / 4, trianglesSize / 4, trianglesSize / 2, trianglesSize / 4, trianglesSize / 4, trianglesSize / 2],
    14: [trianglesSize / 4, trianglesSize / 4, trianglesSize / 2, trianglesSize / 4, trianglesSize / 2, trianglesSize / 2],
    15: [trianglesSize / 2, trianglesSize / 4, trianglesSize / 2, trianglesSize / 2, trianglesSize / 4, trianglesSize / 2],
    16: [trianglesSize / 4, trianglesSize / 4, trianglesSize / 2, trianglesSize / 2, trianglesSize / 4, trianglesSize / 2],
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
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
    // Draw the text
    const centerX = (x + x1 + x + x2 + x + x3) / 3;
    const centerY = (y + y1 + y + y2 + y + y3) / 3;

    // Draw the text
    ctx.fillStyle = 'black';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(triNum.toString(), centerX, centerY);
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
    ctx.beginPath();
    ctx.moveTo(x, wh / 2);
    ctx.lineTo(x + wh, wh / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(wh / 2, y);
    ctx.lineTo(wh / 2, y + wh);
    ctx.closePath();
    ctx.stroke();
  };
  const draw = (ctx) => {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';

    drawTri16(ctx, 0, 0, triNum);
    drawSquare(ctx, 0, 0, size);
  };

  return (
    <div style={{ position: 'relative', zIndex: 999, boxSizing: 'border-box', margin: '10px' }}>
      <canvas ref={canvasRef} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',

          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

export default TrianglesLogo;
