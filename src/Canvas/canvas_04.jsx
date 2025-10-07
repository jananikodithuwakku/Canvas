import { useEffect, useRef } from "react";

function CanvasClearRect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      // Draw rectangle
      ctx.fillStyle = "pink";
      ctx.fillRect(10, 10, 150, 100);

      // Clear a portion of it
      ctx.clearRect(60, 35, 150, 50);
    }
  }, []);

  return (
    <div>
      <h3>clearRect()</h3>
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

function CanvasClearRect02() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      // Draw rectangle
      ctx.strokeStyle = "blue";
      ctx.strokeRect(10,10, 150,100);

      // Clear a portion of it
      ctx.clearRect(60,35, 150,50);
    }
  }, []);

  return (
    <div>
      <h3>clearRect() on strokeRect</h3>
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

function CanvasHalfCircle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, Math.PI);
      ctx.fillStyle = "rgba(37, 37, 73, 1)";
      ctx.fill();
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Draw a Half Circle</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        style={{ border: "1px solid black" }}
      >
      </canvas>
    </div>
  );
}

function CanvasAnglesCircle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      //ctx.arc(95, 50, 40, 0, 0.5 * Math.PI);
      ctx.arc(95, 50, 40, 0, 0.5 * Math.PI, true);
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Angles Circle</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        style={{ border: "1px solid black" }}
      >
      </canvas>
    </div>
  );
}

function CanvasCurves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(10, 100);
      ctx.quadraticCurveTo(250, 170, 230, 20);
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Curves</h3>
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
function CanvasBezierCurves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.bezierCurveTo(110, 150, 180, 10, 210, 140);
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Bezier Curves</h3>
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
      <CanvasClearRect />
      <CanvasClearRect02 />
      <CanvasHalfCircle />
      <CanvasAnglesCircle />
      <CanvasCurves /> 
      <CanvasBezierCurves /> 
    </div>
  );
}
