import { useEffect, useRef } from "react";
import pic from "./Image/pic.jpg";

function CanvasClipping() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.arc(100, 75, 70, 0, Math.PI * 2);
      ctx.clip();

      // Draw two rectangles
      ctx.fillStyle = "rgba(3, 3, 54, 1)";
      ctx.fillRect(0, 0, 300, 150);
      ctx.fillStyle = "rgba(9, 113, 40, 1)";
      ctx.fillRect(0, 0, 110, 100);
    }
  }, []);

  return (
    <div>
      <h3>clip</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

function CanvasTriangleShaped() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(100, 20);
      ctx.lineTo(180, 100);
      ctx.lineTo(20, 100);
      ctx.lineTo(100, 20);
      ctx.clip();

      // Draw two rectangles
      ctx.fillStyle = "rgba(24, 24, 107, 1)";
      ctx.fillRect(0, 0, 300, 150);
      ctx.fillStyle = "rgba(133, 120, 27, 1)";
      ctx.fillRect(0, 0, 110, 90);
    }
  }, []);

  return (
    <div>
      <h3>clip</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

function CanvasClipImage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = pic; // use imported path

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      ctx.arc(110, 145, 90, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(image, 0, 0, 220, 267);
      ctx.restore();
    };
  }, []);

  return (
    <div>
      <h3>Image Clipping </h3>
      <canvas
        ref={canvasRef}
        width={220}
        height={267}
        style={{ border: "1px solid grey" }}
      ></canvas>
    </div>
  );
}

function CanvasEvenodd() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      let r = new Path2D();
      r.rect(80, 10, 45, 130);
      r.rect(40, 50, 120, 50);
      ctx.clip(r, "evenodd");

      // Draw a rectangle
      ctx.fillStyle = "rgba(13, 13, 53, 1)";
      ctx.fillRect(0, 0, 300, 150);
    }
  }, []);

  return (
    <div>
      <h3>clip() with even-odd rule</h3>
      <canvas
        ref={canvasRef}
        width={200}
        height={150}
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}

function CanvasCompositing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Clear canvas in case of re-render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set type of compositing
    ctx.globalCompositeOperation = "xor";

    // Draw two overlapping rectangles
    ctx.fillStyle = "rgba(151, 69, 76, 1)";
    ctx.fillRect(10, 10, 100, 100);

    ctx.fillStyle = "rgba(142, 76, 132, 1)";
    ctx.fillRect(40, 40, 100, 100);
  }, []); // run once on mount

  return (
    <div>
      <h3>globalCompositeOperation = "xor"</h3>
      <canvas
        ref={canvasRef}
        width={200} // match your drawn shapes
        height={150}
        style={{ border: "1px solid grey" }}
      >
        Sorry, your browser does not support canvas.
      </canvas>
    </div>
  );
}

function CanvasCompositingLighten() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Draw two overlapping rectangles
    ctx.globalCompositeOperation = "lighten";

    // Draw two overlapping rectangles
    ctx.fillStyle = "rgba(213, 134, 15, 1)";
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "rgba(184, 11, 97, 1)";
    ctx.fillRect(40, 40, 100, 100);
  }, []); // run once on mount

  return (
    <div>
      <h3>globalCompositeOperation = "lighten"</h3>
      <canvas
        ref={canvasRef}
        width={200} // match your drawn shapes
        height={150}
        style={{ border: "1px solid grey" }}
      >
        Sorry, your browser does not support canvas.
      </canvas>
    </div>
  );
}

export default function CanvasShapes() {
  return (
    <div>
      <h2>Canvas Gradient Examples</h2>
      <CanvasClipping />
      <CanvasTriangleShaped />
      <CanvasClipImage />
      <CanvasEvenodd />
      <CanvasCompositing />
      <CanvasCompositingLighten />
    </div>
  );
}
