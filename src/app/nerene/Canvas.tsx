"use client";

import { styled } from "@linaria/react";
import { useEffect, useRef } from "react";

import { nerene } from "@/const/nerene";

export const CanvasBody = styled.canvas`
  width: 100%;
  height: 200px;
`;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const height = 200 * 2;

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const boundingBox = canvasRef.current.getBoundingClientRect();
    const width = boundingBox.width * 2;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    const context = canvasRef.current.getContext("2d");
    if (!context) {
      return;
    }

    const countsPerHour = [...Array(12)].map(
      (_, x) => nerene.filter((tweet) => tweet.date[3] === x).length,
    );
    const max = Math.max(...countsPerHour);
    const mountHeight = height - 40;
    const maxHours = 10;
    const splitCount = 10;

    context.moveTo(0, height);
    for (let i = 0; i < maxHours + 1; i++) {
      const beforeX = (width / (maxHours + 1)) * i;
      const afterX = (width / (maxHours + 1)) * (i + 1);
      const beforeY = height - (countsPerHour[i] / max) * mountHeight;
      const afterY = height - (countsPerHour[i + 1] / max) * mountHeight;
      for (let j = 0; j < splitCount; j++) {
        const x = beforeX + ((afterX - beforeX) / splitCount) * j;
        const y =
          beforeY + ((afterY - beforeY) / splitCount) * j + Math.random() * 20;
        context.lineTo(x, y);
      }
      context.font = "24px Helvetica";
      context.fillText(i.toString(), beforeX + 4, beforeY - 14);
    }
    context.fillStyle = "#069";
    context.fill();
  }, []);

  return <CanvasBody ref={canvasRef} />;
};

export default Canvas;
