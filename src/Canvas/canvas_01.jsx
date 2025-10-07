import { useEffect, useRef } from "react";

function CanvasRectangle() {
  const canvasRef = useRef(null); // reference to the canvas element

  useEffect(() => {
    const canvas = canvasRef.current; // get canvas from ref
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgb(0, 115, 153)";
      ctx.fillRect(0, 0, 150, 75);
    }
  }, []); // run once after component mountsq

  return (
    <div>
      <h3> Draw a Rectangle</h3>
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

function CanvasLine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Draw a Line</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        style={{ border: "1px solid #000000" }}
      />
    </div>
  );
}

function CanvasArc() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <h3>Draw an Arc</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        style={{ border: "1px solid #000000" }}
      />
    </div>
  );
}

function CanvasLineWidth() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
      ctx.lineWidth = 10;
      //ctx.strokeStyle = "red";
    }
  }, []);
  return (
    <div>
      <h3>Draw a Line</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        style={{ border: "1px solid #000000" }}
      />
    </div>
  );
}

function CanvasLineCap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(175, 75);
      ctx.stroke();
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(30, 108, 134, 1)";
    }
  }, []);
  return (
    <div>
      <h3>Draw a Line</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        style={{ border: "1px solid #000000" }}
      />
    </div>
  );
}

// Main component rendering both
export default function CanvasShapes() {
  return (
    <div>
      <h2>Canvas Examples</h2>
      <CanvasRectangle/>
      <CanvasLine />
      <CanvasArc />
      <CanvasLineWidth />
      <CanvasLineCap/>
    </div>
  );
}
