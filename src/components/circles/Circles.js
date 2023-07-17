import React, { useEffect } from 'react';
import generateUniqueRandomNumbers from '../../utilities/functions';

const Circles = ({ size, screen, canvasRef, isClicked, bgColors, bgSize, strokeColor, fillColor, strokeWidth }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const numColors = bgColors.length;

    let numbers2 = generateUniqueRandomNumbers(0, 1, 2);
    let numbers3 = generateUniqueRandomNumbers(0, 2, 3);
    let numbers4 = generateUniqueRandomNumbers(0, 3, 4);
    let coin = Math.random();
    const minRadius = 2;

    canvas.width = screen > 1440 ? 800 : bgSize;
    canvas.height = screen > 1440 ? 800 : bgSize;
    const drawCircles = () => {
      const totalCircles = 3000;
      let createCircleAttempts = 2000;
      const widthX = canvas.width;
      const circles = [];

      if (numColors === 1) {
        ctx.fillStyle = bgColors[0];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (numColors === 2) {
        const halfWidth = widthX / 2;
        ctx.fillStyle = bgColors[numbers2[0]];
        ctx.fillRect(0, 0, halfWidth, widthX);
        ctx.fillStyle = bgColors[numbers2[1]];
        ctx.fillRect(halfWidth, 0, halfWidth, widthX);
      } else if (numColors === 3) {
        const thirdWidth = canvas.width / 3;
        if (coin > 0.5) {
          ctx.fillStyle = bgColors[numbers3[0]];
          ctx.fillRect(0, 0, thirdWidth, widthX);
          ctx.fillStyle = bgColors[numbers3[1]];
          ctx.fillRect(thirdWidth, 0, thirdWidth, widthX);
          ctx.fillStyle = bgColors[numbers3[2]];
          ctx.fillRect(2 * thirdWidth, 0, thirdWidth, widthX);
        } else if (coin <= 0.5) {
          ctx.fillStyle = bgColors[numbers3[0]];
          ctx.fillRect(0, 0, widthX, thirdWidth);
          ctx.fillStyle = bgColors[numbers3[1]];
          ctx.fillRect(0, thirdWidth, widthX, thirdWidth);
          ctx.fillStyle = bgColors[numbers3[2]];
          ctx.fillRect(0, 2 * thirdWidth, widthX, thirdWidth);
        }
      } else if (numColors === 4) {
        const quarter = widthX / 2;
        ctx.fillStyle = bgColors[numbers4[0]];
        ctx.fillRect(0, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[1]];
        ctx.fillRect(quarter, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[2]];
        ctx.fillRect(0, quarter, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[3]];
        ctx.fillRect(quarter, quarter, quarter, quarter);
      }

      ctx.lineWidth = strokeWidth;

      const draw = () => {
        circles.forEach((circle) => {
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
          ctx.strokeStyle = strokeColor;
          ctx.fillStyle = `rgba(${fillColor},0.5)`;
          ctx.stroke();
          ctx.fill();
          // ctx.fillStyle = 'none';
        });
      };

      const doesCircleHaveACollision = (circle) => {
        for (let i = 0; i < circles.length; i++) {
          const existingCircle = circles[i];
          const dx = circle.x - existingCircle.x;
          const dy = circle.y - existingCircle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance <= circle.radius + existingCircle.radius) {
            return true;
          }
        }
        return false;
      };

      const createCircle = () => {
        const x = Math.random() * widthX;
        const y = Math.random() * widthX;
        const radius = (Math.random() * widthX) / 3;

        const newCircle = { x, y, radius };

        if (doesCircleHaveACollision(newCircle)) {
          if (createCircleAttempts > 0) {
            createCircleAttempts--;
            createCircle();
          }

          return;
        }

        circles.push(newCircle);
      };

      for (let i = 0; i < totalCircles; i++) {
        createCircle();
      }

      draw();
    };

    drawCircles();
  }, [isClicked]);

  return <canvas ref={canvasRef} />;
};

export default Circles;
