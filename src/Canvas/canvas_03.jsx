import { useEffect, useRef } from "react";

function CanvasShape() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      // Define a new path
      ctx.beginPath();

      // Set start-point
      ctx.moveTo(20, 20);

      // Set sub-points
      ctx.lineTo(100, 20);
      ctx.lineTo(175, 100);
      ctx.lineTo(20, 100);

      // Set end-point
      ctx.lineTo(20, 20);

      // Draw the shape outline
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Draw a Shape</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={125}
        style={{ border: "1px solid #000000" }}
      />
    </div>
  );
}

function CanvasDrawShapes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Define a new path:
    ctx.beginPath();

    // Define a rectangle
    ctx.moveTo(20, 20);
    ctx.lineTo(180, 20);
    ctx.lineTo(180, 100);
    ctx.lineTo(20, 100);
    ctx.lineTo(20, 20);

    // Define a triangle
    ctx.moveTo(100, 20);
    ctx.lineTo(180, 100);
    ctx.lineTo(20, 100);
    ctx.lineTo(100, 20);

    // Draw shapes
    ctx.strokeStyle = "red";
    ctx.stroke();
  }, []);

  return (
    <div>
      <h3>Draw Shapes</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={125}
        style={{ border: "1px solid #000000" }}
      >
        Sorry, your browser does not support canvas.
      </canvas>
    </div>
  );
}

function CanvasRectangles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      // Red rectangle
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = "red";
      ctx.rect(5, 5, 290, 140);
      ctx.stroke();

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "green";
      ctx.rect(30, 30, 50, 50);
      ctx.stroke();

      // Blue rectangle
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.strokeStyle = "blue";
      ctx.rect(50, 50, 150, 80);
      ctx.stroke();
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>rect()</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid black" }}
      >
      </canvas>
    </div>
  );
}


export default function CanvasShapes() {
  return (
    <div>
      <h2>Canvas Shape Examples</h2>
      <CanvasShape />
      <CanvasDrawShapes />
      <CanvasRectangles />
    </div>
  );
}
