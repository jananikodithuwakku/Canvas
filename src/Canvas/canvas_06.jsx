import { useEffect, useRef } from "react";

function CanvasShadows() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.shadowColor = "rgba(79, 14, 9, 1)";
      ctx.shadowOffsetX = 10;
      ctx.shadowOffsetY = 10;

      ctx.fillStyle = "rgba(56, 75, 9, 1)";
      ctx.fillRect(20, 20, 100, 100);

      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(56, 75, 9, 1)";
      ctx.strokeRect(170, 20, 100, 100);
    }
  }, []);

  return (
    <div>
      <h3>Shadow Blur Property</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

function CanvasShadowText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.shadowColor = "rgba(107, 174, 126, 1)";
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 4;

      ctx.font = "50px Arial";

      ctx.fillStyle = "rgba(12, 69, 19, 1)";
      ctx.fillText("Hello World", 10, 60);

      ctx.strokeStyle = "rgba(17, 63, 36, 1)";
      ctx.strokeText("Hello World", 10, 120);
    }
  }, []);

  return (
    <div>
      <h3>Filled and stroked text with a shadowBlur</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

function CanvasTransformation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.rotate((Math.PI / 180) * 20);

      ctx.fillStyle = "red";
      ctx.fillRect(50, 10, 100, 50);

      ctx.strokeStyle = "blue";
      ctx.strokeRect(70, 30, 100, 50);
    }
  }, []);

  return (
    <div>
      <h3>Rotate</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

function CanvasTransform() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas before redrawing

      ctx.fillStyle = "yellow";
      ctx.fillRect(10, 10, 200, 100);

      ctx.transform(1, 0.5, -0.5, 1, 30, 10);

      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 200, 100);

      ctx.transform(1, 0.5, -0.5, 1, 30, 10);

      ctx.fillStyle = "blue";
      ctx.fillRect(10, 10, 200, 100);
    }
  }, []);

  return (
    <div>
      <h3> transform</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

export default function CanvasShapes() {
  return (
    <div>
      <h2>Canvas Gradient Examples</h2>
      <CanvasShadows />
      <CanvasShadowText />
      <CanvasTransformation />
      <CanvasTransform />
    </div>
  );
}
