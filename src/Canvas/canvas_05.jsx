import { useEffect, useRef } from "react";

function CanvasGradients() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 280,0);
      grad.addColorStop(0, "lightblue")
      grad.addColorStop(1, "darkblue")

      ctx.fillStyle = grad;
      ctx.fillRect(10, 10, 280, 130);
    }
  }, []);

  return (
    <div>
      <h3>Create Linear Gradient()</h3>
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

function CanvasGradientOutline() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 280,0);
      grad.addColorStop(0, "rgba(231, 150, 213, 1)")
      grad.addColorStop(1, "rgba(39, 4, 31, 1)")

      ctx.lineWidth = 10;
      ctx.strokeRect(10, 10, 280, 130);
      ctx.strokeStyle = grad;
    }
  }, []);

  return (
    <div>
      <h3>Create Linear Gradient()</h3>
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

function CanvasFillTextGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 280,0);
      grad.addColorStop(0, "rgba(160, 208, 169, 1)")
      grad.addColorStop(1, "rgba(4, 39, 8, 1)")

      ctx.font = "50px Arial";
      ctx.fillText("Hello World", 10, 80);
      ctx.fillStyle = grad;
    }
  }, []);

  return (
    <div>
      <h3>Fill Text with Gradient()</h3>
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

function CanvasTextAlignment() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
    
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 75);
      ctx.lineTo(500, 75);
      ctx.stroke();
      ctx.closePath();

      ctx.font = "20px Arial";
      ctx.fillStyle = "purple";

      ctx.textBaseline = "top";
      ctx.fillText ("top", 5, 75);

      ctx.textBaseline = "hanging";
      ctx.fillText  ("hanging", 40, 75);

      ctx.textBaseline = "middle";
      ctx.fillText ( "middle", 120, 75);

      ctx.textBaseline = "alphabetic";
      ctx.fillText  ("alphabetic", 190, 75);

      ctx.textBaseline = "ideographic";
      ctx.fillText  ("ideographic", 295, 75);

      ctx.textBaseline = "bottom";
      ctx.fillText  ("bottom", 410, 75);
    }
  }, []);

  return (
    <div>
      <h3>Text Baseline Property</h3>
      <canvas
        ref={canvasRef}
        width={500}
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
      <h2>Canvas Gradient Examples</h2>
      <CanvasGradients />
      <CanvasGradientOutline />
      <CanvasFillTextGradient />
      <CanvasTextAlignment />
    </div>
  );
}