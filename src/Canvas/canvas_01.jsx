import { useEffect, useRef } from "react";

export default function CanvasRectangle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      //ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 150, 75);
    }
  }, []);

  return (
    <div>
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

