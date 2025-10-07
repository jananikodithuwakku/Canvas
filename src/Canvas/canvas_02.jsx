import { useEffect, useRef } from "react";

function CanvasFillStyle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "green";
      ctx.fillRect(10, 10, 100, 100);
    }
  }, []);

  return (
    <div>
      <h3>FillStyle</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={125}
        style={{ border: "1px solid #000000", marginBottom: "20px" }}
      >
      </canvas>
    </div>
  );
}


function CanvasStrokeStyle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 5;
      ctx.strokeRect(10, 10, 100, 100);
    }
  }, []);

  return (
    <div>
      <h3>strokeStyle</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={125}
        style={{ border: "1px solid #000000" }}
      >
      </canvas>
    </div>
  );
}

function CanvasFillStyleandStrokeStyle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle= "rgb(0 0 77 )";
      ctx.fillRect(10,10, 100,100); 

      ctx.strokeStyle = "rgb(128 0 64)";
      ctx.lineWidth = 5;
      ctx.strokeRect(10, 10, 100, 100);
    }
  }, []);

  return (
    <div>
      <h3>FillStyle and StrokeStyle</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={125}
        style={{ border: "1px solid #000000" }}
      >
      </canvas>
    </div>
  );
}

// Main Page Component (renders both)
export default function CanvasStyles() {
  return (
    <div>
      <h2>Canvas Style Examples</h2>
      <CanvasFillStyle />
      <CanvasStrokeStyle />
      <CanvasFillStyleandStrokeStyle />
    </div>
  );
}
