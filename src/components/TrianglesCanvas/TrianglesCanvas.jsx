import React, { useEffect } from 'react';
import generateUniqueRandomNumbers from '../../utilities/functions';
const trianglesConfigs = [
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [10],
  [11],
  [12],
  [13],
  [14],
  [15],
  [16],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
  [1, 11],
  [1, 12],
  [1, 13],
  [1, 14],
  [1, 15],
  [1, 16],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
  [2, 9],
  [2, 10],
  [2, 11],
  [2, 12],
  [2, 13],
  [2, 14],
  [2, 15],
  [2, 16],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],
  [3, 8],
  [3, 9],
  [3, 10],
  [3, 11],
  [3, 12],
  [3, 13],
  [3, 14],
  [3, 15],
  [3, 16],
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [4, 9],
  [4, 10],
  [4, 11],
  [4, 12],
  [4, 13],
  [4, 14],
  [4, 15],
  [4, 16],
  [5, 6],
  [5, 7],
  [5, 8],
  [5, 9],
  [5, 10],
  [5, 11],
  [5, 12],
  [5, 13],
  [5, 14],
  [5, 15],
  [5, 16],
  [6, 7],
  [6, 9],
  [6, 10],
  [6, 11],
  [6, 12],
  [6, 13],
  [6, 14],
  [6, 15],
  [6, 16],
  [7, 8],
  [7, 9],
  [7, 10],
  [7, 11],
  [7, 12],
  [7, 13],
  [7, 14],
  [7, 15],
  [7, 16],
  [8, 9],
  [8, 10],
  [8, 11],
  [8, 12],
  [8, 13],
  [8, 14],
  [8, 15],
  [8, 16],
  [9, 10],
  [9, 11],
  [9, 12],
  [9, 13],
  [9, 14],
  [9, 16],
  [10, 11],
  [10, 13],
  [10, 14],
  [10, 15],
  [10, 16],
  [11, 12],
  [11, 13],
  [11, 14],
  [11, 15],
  [11, 16],
  [11, 16],
  [12, 13],
  [12, 14],
  [12, 15],
  [12, 16],
  [13, 14],
  [13, 15],
  [13, 16],
  [14, 15],
  [15, 16],
  [1, 2, 5],
  [1, 2, 6],
  [1, 2, 7],
  [1, 2, 8],
  [1, 2, 9],
  [1, 2, 10],
  [1, 2, 11],
  [1, 2, 12],
  [1, 2, 13],
  [1, 2, 14],
  [1, 2, 15],
  [1, 2, 16],
  [1, 3, 5],
  [1, 3, 6],
  [1, 3, 7],
  [1, 3, 8],
  [1, 3, 9],
  [1, 3, 10],
  [1, 3, 11],
  [1, 3, 12],
  [1, 3, 13],
  [1, 3, 14],
  [1, 3, 15],
  [1, 3, 16],
  [1, 4, 5],
  [1, 4, 6],
  [1, 4, 7],
  [1, 4, 8],
  [1, 4, 9],
  [1, 4, 10],
  [1, 4, 11],
  [1, 4, 12],
  [1, 4, 13],
  [1, 4, 14],
  [1, 4, 15],
  [1, 4, 16],
  [1, 5, 6],
  [1, 5, 7],
  [1, 5, 8],
  [1, 5, 9],
  [1, 5, 10],
  [1, 5, 11],
  [1, 5, 12],
  [1, 5, 13],
  [1, 5, 14],
  [1, 5, 15],
  [1, 5, 16],
  [1, 6, 7],
  [1, 6, 9],
  [1, 6, 10],
  [1, 6, 11],
  [1, 6, 12],
  [1, 6, 13],
  [1, 6, 14],
  [1, 6, 15],
  [1, 6, 16],
  [1, 7, 8],
  [1, 7, 9],
  [1, 7, 10],
  [1, 7, 11],
  [1, 7, 12],
  [1, 7, 13],
  [1, 7, 14],
  [1, 7, 15],
  [1, 7, 16],
  [1, 8, 9],
  [1, 8, 10],
  [1, 8, 11],
  [1, 8, 12],
  [1, 8, 13],
  [1, 8, 14],
  [1, 8, 15],
  [1, 8, 16],
  [1, 9, 10],
  [1, 9, 11],
  [1, 9, 12],
  [1, 9, 13],
  [1, 9, 14],
  [1, 9, 15],
  [1, 9, 16],
  [1, 10, 11],
  [1, 10, 13],
  [1, 10, 14],
  [1, 10, 15],
  [1, 10, 16],
  [1, 11, 12],
  [1, 11, 13],
  [1, 11, 14],
  [1, 11, 15],
  [1, 11, 16],
  [1, 12, 13],
  [1, 12, 14],
  [1, 12, 15],
  [1, 12, 16],
  [1, 13, 14],
  [1, 13, 15],
  [1, 13, 16],
  [1, 14, 15],
  [2, 3, 4],
  [2, 3, 5],
  [2, 3, 6],
  [2, 3, 7],
  [2, 3, 8],
  [2, 3, 9],
  [2, 3, 10],
  [2, 3, 11],
  [2, 3, 12],
  [2, 3, 13],
  [2, 3, 14],
  [2, 3, 15],
  [2, 3, 16],
  [2, 4, 5],
  [2, 4, 6],
  [2, 4, 7],
  [2, 4, 8],
  [2, 4, 9],
  [2, 4, 10],
  [2, 4, 11],
  [2, 4, 12],
  [2, 4, 13],
  [2, 4, 14],
  [2, 4, 15],
  [2, 4, 16],
  [2, 5, 6],
  [2, 5, 7],
  [2, 5, 8],
  [2, 5, 9],
  [2, 5, 10],
  [2, 5, 11],
  [2, 5, 12],
  [2, 5, 13],
  [2, 5, 14],
  [2, 5, 15],
  [2, 5, 16],
  [2, 6, 7],
  [2, 6, 9],
  [2, 6, 10],
  [2, 6, 12],
  [2, 6, 13],
  [2, 6, 14],
  [2, 6, 15],
  [2, 6, 16],
  [2, 7, 8],
  [2, 7, 9],
  [2, 7, 10],
  [2, 7, 11],
  [2, 7, 12],
  [2, 7, 13],
  [2, 7, 14],
  [2, 7, 15],
  [2, 7, 16],
  [2, 8, 9],
  [2, 8, 10],
  [2, 8, 11],
  [2, 8, 12],
  [2, 8, 13],
  [2, 8, 14],
  [2, 8, 15],
  [2, 8, 16],
  [2, 9, 10],
  [2, 9, 11],
  [2, 9, 12],
  [2, 9, 13],
  [2, 9, 14],
  [2, 9, 15],
  [2, 9, 16],
  [2, 10, 11],
  [2, 10, 13],
  [2, 10, 14],
  [2, 10, 15],
  [2, 10, 16],
  [2, 11, 12],
  [2, 11, 13],
  [2, 11, 14],
  [2, 11, 15],
  [2, 11, 16],
  [2, 12, 13],
  [2, 12, 14],
  [2, 12, 15],
  [2, 12, 16],
  [2, 13, 14],
  [2, 13, 15],
  [2, 13, 16],
  [2, 14, 15],
  [2, 15, 16],
  [3, 4, 5],
  [3, 4, 6],
  [3, 4, 7],
  [3, 4, 8],
  [3, 4, 9],
  [3, 4, 10],
  [3, 4, 11],
  [3, 4, 12],
  [3, 4, 13],
  [3, 4, 14],
  [3, 4, 15],
  [3, 4, 16],
  [3, 5, 6],
  [3, 5, 7],
  [3, 5, 8],
  [3, 5, 9],
  [3, 5, 10],
  [3, 5, 11],
  [3, 5, 12],
  [3, 5, 13],
  [3, 5, 14],
  [3, 5, 15],
  [3, 5, 16],
  [3, 6, 7],
  [3, 6, 9],
  [3, 6, 10],
  [3, 6, 11],
  [3, 6, 12],
  [3, 6, 13],
  [3, 6, 14],
  [3, 6, 15],
  [3, 6, 16],
  [3, 7, 8],
  [3, 7, 9],
  [3, 7, 10],
  [3, 7, 11],
  [3, 7, 12],
  [3, 7, 13],
  [3, 7, 14],
  [3, 7, 15],
  [3, 7, 16],
  [3, 7, 8],
  [3, 7, 9],
  [3, 7, 10],
  [3, 7, 11],
  [3, 7, 12],
  [3, 7, 13],
  [3, 7, 14],
  [3, 7, 15],
  [3, 7, 16],
  [3, 8, 9],
  [3, 8, 10],
  [3, 8, 11],
  [3, 8, 12],
  [3, 8, 13],
  [3, 8, 14],
  [3, 8, 15],
  [3, 8, 16],
  [3, 9, 10],
  [3, 9, 11],
  [3, 9, 12],
  [3, 9, 13],
  [3, 9, 14],
  [3, 9, 15],
  [3, 9, 16],
  [3, 10, 11],
  [3, 10, 13],
  [3, 10, 14],
  [3, 10, 15],
  [3, 10, 16],
  [3, 11, 12],
  [3, 11, 13],
  [3, 11, 14],
  [3, 11, 15],
  [3, 11, 16],
  [3, 12, 13],
  [3, 12, 13],
  [3, 12, 14],
  [3, 12, 15],
  [3, 12, 16],
  [3, 13, 14],
  [3, 13, 15],
  [3, 13, 16],
  [3, 14, 15],
  [3, 15, 16],
  [4, 5, 6],
  [4, 5, 7],
  [4, 5, 8],
  [4, 5, 9],
  [4, 9, 16],
  [4, 9, 16],
  [4, 10, 11],
  [4, 10, 13],
  [4, 10, 14],
  [4, 10, 15],
  [4, 10, 16],
  [4, 11, 12],
  [4, 11, 13],
  [4, 11, 14],
  [4, 11, 15],
  [4, 11, 16],
  [4, 12, 13],
  [4, 12, 14],
  [4, 12, 15],
  [4, 12, 16],
  [4, 13, 14],
  [4, 13, 15],
  [4, 13, 16],
  [4, 14, 15],
  [4, 15, 16],
  [5, 6, 7],
  [5, 6, 9],
  [5, 6, 10],
  [5, 6, 11],
  [5, 6, 12],
  [5, 6, 13],
  [5, 6, 14],
  [5, 6, 15],
  [5, 6, 16],
  [5, 7, 8],
  [5, 7, 9],
  [5, 7, 10],
  [5, 7, 11],
  [5, 7, 12],
  [5, 7, 13],
  [5, 7, 14],
  [5, 7, 15],
  [5, 7, 16],
  [5, 8, 9],
  [5, 8, 10],
  [5, 8, 11],
  [5, 8, 12],
  [5, 8, 13],
  [5, 8, 15],
  [5, 8, 16],
  [5, 9, 10],
  [5, 9, 11],
  [5, 9, 12],
  [5, 9, 13],
  [5, 9, 14],
  [5, 9, 15],
  [5, 9, 16],
  [5, 10, 11],
  [5, 10, 13],
  [5, 10, 14],
  [5, 10, 15],
  [5, 10, 16],
  [5, 11, 12],
  [5, 11, 13],
  [5, 11, 14],
  [5, 11, 15],
  [5, 11, 16],
  [5, 12, 13],
  [5, 12, 14],
  [5, 12, 15],
  [5, 12, 16],
  [5, 13, 14],
  [5, 13, 15],
  [5, 13, 16],
  [5, 14, 15],
  [5, 15, 16],
  [6, 7, 8],
  [6, 7, 9],
  [6, 7, 10],
  [6, 8, 11],
  [6, 8, 12],
  [6, 8, 13],
  [6, 8, 14],
  [6, 8, 15],
  [6, 8, 16],
  [6, 9, 10],
  [6, 9, 11],
  [6, 9, 12],
  [6, 9, 13],
  [6, 9, 14],
  [6, 9, 15],
  [6, 9, 16],
  [6, 10, 11],
  [6, 10, 13],
  [6, 10, 14],
  [6, 10, 15],
  [6, 10, 16],
  [6, 11, 12],
  [6, 11, 13],
  [6, 11, 14],
  [6, 11, 15],
  [6, 11, 16],
  [6, 12, 13],
  [6, 12, 14],
  [6, 12, 15],
  [6, 12, 16],
  [6, 13, 14],
  [6, 13, 15],
  [6, 13, 16],
  [6, 14, 15],
  [6, 15, 16],
  [7, 8, 9],
  [7, 8, 10],
  [7, 8, 11],
  [7, 8, 12],
  [7, 8, 13],
  [7, 8, 14],
  [7, 8, 15],
  [7, 8, 16],
  [7, 9, 10],
  [7, 9, 11],
  [7, 9, 13],
  [7, 9, 14],
  [7, 9, 15],
  [7, 9, 16],
  [7, 10, 11],
  [7, 10, 13],
  [7, 10, 14],
  [7, 10, 15],
  [7, 10, 16],
  [7, 11, 12],
  [7, 11, 13],
  [7, 11, 14],
  [7, 11, 15],
  [7, 11, 16],
  [7, 12, 13],
  [7, 12, 14],
  [7, 13, 15],
  [7, 14, 15],
  [7, 15, 16],
  [8, 9, 10],
  [8, 9, 11],
  [8, 9, 12],
  [8, 9, 13],
  [8, 9, 14],
  [8, 9, 15],
  [8, 9, 16],
  [8, 9, 14],
  [8, 9, 15],
  [8, 9, 16],
  [8, 10, 11],
  [8, 10, 13],
  [8, 10, 14],
  [8, 10, 15],
  [8, 10, 16],
  [8, 11, 12],
  [8, 11, 13],
  [8, 11, 14],
  [8, 11, 14],
  [8, 11, 15],
  [8, 11, 16],
  [8, 12, 13],
  [8, 12, 14],
  [8, 12, 15],
  [8, 12, 16],
  [8, 13, 14],
  [8, 13, 15],
  [8, 13, 16],
  [8, 14, 15],
  [8, 15, 16],
  [9, 10, 13],
  [9, 10, 14],
  [9, 10, 15],
  [9, 10, 16],
  [9, 11, 12],
  [9, 11, 13],
  [9, 11, 14],
  [9, 11, 15],
  [9, 11, 16],
  [9, 11, 12],
  [9, 11, 13],
  [9, 11, 14],
  [9, 11, 15],
  [9, 11, 16],
  [9, 12, 13],
  [9, 12, 14],
  [9, 12, 15],
  [9, 12, 16],
  [9, 13, 14],
  [9, 13, 15],
  [8, 13, 16],
  [9, 14, 15],
  [9, 15, 16],
  [10, 11, 13],
  [10, 11, 14],
];

const TrianglesCanvas = ({ screen, isClicked, canvasRef, bgColors, strokeColor, fillColor, trianglesSize, bgSize }) => {
  const configs = {
    1: [0, 0, trianglesSize / 4, 0, 0, trianglesSize / 4],
    2: [0, 0, trianglesSize / 4, 0, trianglesSize / 4, trianglesSize / 4],
    3: [trianglesSize / 4, 0, trianglesSize / 4, trianglesSize / 4, 0, trianglesSize / 4],
    4: [0, 0, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4, trianglesSize / 4],
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
  let numbers2 = generateUniqueRandomNumbers(0, 1, 2);
  let numbers3 = generateUniqueRandomNumbers(0, 2, 3);
  let numbers4 = generateUniqueRandomNumbers(0, 3, 4);
  let coin = Math.random();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = screen > 1440 ? 800 : bgSize;
    canvas.height = screen > 1440 ? 800 : bgSize;
    const numColors = bgColors.length;
    if (numColors === 1) {
      ctx.fillStyle = bgColors[0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (numColors === 2) {
      const halfWidth = canvas.width / 2;
      const halfHeight = canvas.height / 2;
      if (coin > 0.5) {
        ctx.fillStyle = bgColors[numbers2[0]];
        ctx.fillRect(0, 0, halfWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers2[1]];
        ctx.fillRect(halfWidth, 0, halfWidth, canvas.height);
      } else if (coin <= 0.5) {
        ctx.fillStyle = bgColors[numbers2[0]];
        ctx.fillRect(0, 0, canvas.width, halfHeight);
        ctx.fillStyle = bgColors[numbers2[1]];
        ctx.fillRect(0, halfHeight, canvas.width, halfHeight);
      }
    } else if (numColors === 3) {
      const thirdWidth = canvas.width / 3;
      if (coin > 0.666) {
        ctx.fillStyle = bgColors[numbers3[0]];
        ctx.fillRect(0, 0, thirdWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers3[1]];
        ctx.fillRect(thirdWidth, 0, thirdWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers3[2]];
        ctx.fillRect(2 * thirdWidth, 0, thirdWidth, canvas.height);
      } else if (coin <= 0.666 && coin > 0.333) {
        ctx.fillStyle = bgColors[numbers3[0]];
        ctx.fillRect(0, 0, thirdWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers3[1]];
        ctx.fillRect(thirdWidth, 0, thirdWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers3[2]];
        ctx.fillRect(2 * thirdWidth, 0, thirdWidth, canvas.height);
      } else if (coin <= 0.333) {
        ctx.fillStyle = bgColors[numbers3[0]];
        ctx.fillRect(0, 0, thirdWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers3[1]];
        ctx.fillRect(thirdWidth, 0, thirdWidth, canvas.height);
        ctx.fillStyle = bgColors[numbers3[2]];
        ctx.fillRect(2 * thirdWidth, 0, thirdWidth, canvas.height);
      }
    } else if (numColors === 4) {
      const quarter = canvas.width / 2;
      if (coin >= 0.75) {
        ctx.fillStyle = bgColors[numbers4[0]];
        ctx.fillRect(0, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[1]];
        ctx.fillRect(quarter, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[2]];
        ctx.fillRect(0, quarter, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[3]];
        ctx.fillRect(quarter, quarter, quarter, quarter);
      } else if (coin < 0.75 && coin >= 0.5) {
        ctx.fillStyle = bgColors[numbers4[0]];
        ctx.fillRect(0, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[1]];
        ctx.fillRect(quarter, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[2]];
        ctx.fillRect(0, quarter, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[3]];
        ctx.fillRect(quarter, quarter, quarter, quarter);
      } else if (coin < 0.5 && coin >= 0.25) {
        ctx.fillStyle = bgColors[numbers4[0]];
        ctx.fillRect(0, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[1]];
        ctx.fillRect(quarter, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[2]];
        ctx.fillRect(0, quarter, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[3]];
        ctx.fillRect(quarter, quarter, quarter, quarter);
      } else if (coin < 0.25) {
        ctx.fillStyle = bgColors[numbers4[0]];
        ctx.fillRect(0, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[1]];
        ctx.fillRect(quarter, 0, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[2]];
        ctx.fillRect(0, quarter, quarter, quarter);
        ctx.fillStyle = bgColors[numbers4[3]];
        ctx.fillRect(quarter, quarter, quarter, quarter);
      }
    }
    ctx.strokeStyle = 'none';
    draw(ctx);

    const handleCanvasClick = (event) => {
      const canvas = canvasRef.current;
      const canvasRect = canvas.getBoundingClientRect();
      const offsetX = event.clientX - canvasRect.left;
      const offsetY = event.clientY - canvasRect.top;

      const clickedTriangle = findClickedTriangle(offsetX, offsetY);
      if (clickedTriangle) {
        console.log('Clicked triangle coordinates:', clickedTriangle.x, clickedTriangle.y);
      }
    };

    const findClickedTriangle = (x, y) => {
      for (let ty = 0; ty < ctx.canvas.height; ty += trianglesSize / 2) {
        for (let tx = 0; tx < ctx.canvas.width; tx += trianglesSize / 2) {
          for (let i = 0; i < trianglesConfigs.length; i++) {
            const triangles = trianglesConfigs[i];
            for (let j = 0; j < triangles.length; j++) {
              const triangleNum = triangles[j];
              if (isPointInTriangle(x - tx, y - ty, configs[triangleNum])) {
                return { x: tx, y: ty };
              }
            }
          }
        }
      }
      return null;
    };

    const isPointInTriangle = (px, py, [x1, y1, x2, y2, x3, y3]) => {
      const dX = px - x3;
      const dY = py - y3;
      const dX21 = x2 - x3;
      const dY12 = y1 - y2;
      const D = dY12 * (x1 - x3) + dX21 * (y1 - y3);
      const s = dY12 * dX + dX21 * dY;
      const t = (y3 - y1) * dX + (x1 - x3) * dY;
      if (D < 0) return s <= 0 && t <= 0 && s + t >= D;
      return s >= 0 && t >= 0 && s + t <= D;
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [isClicked]);

  const drawTri16 = (ctx, x, y, num) => {
    let [x1, y1, x2, y2, x3, y3] = configs[num];
    ctx.beginPath();
    ctx.moveTo(x + x1, y + y1);
    ctx.lineTo(x + x2, y + y2);
    ctx.lineTo(x + x3, y + y3);
    ctx.closePath();
    ctx.strokeStyle = 'none';
    ctx.fill();
  };

  const draw = (ctx) => {
    ctx.fillStyle = strokeColor;
    ctx.strokeStyle = strokeColor;
    for (let y = 0; y < ctx.canvas.height; y += trianglesSize / 2) {
      for (let x = 0; x < ctx.canvas.width; x += trianglesSize / 2) {
        const randIndex = Math.floor(Math.random() * trianglesConfigs.length);
        const triangles = trianglesConfigs[randIndex];

        for (let i = 0; i < triangles.length; i++) {
          const triangleNum = triangles[i];
          drawTri16(ctx, x, y, triangleNum);
        }
      }
    }
  };

  return <canvas ref={canvasRef} />;
};

export default TrianglesCanvas;
