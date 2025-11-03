import { useEffect, useRef } from "react";

export default function DigitalRain() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 16;
    const characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルウォンヴヵヶヷヸヹヺ・ーヽヾヿ";

    // Function to resize the canvas
    const resizeCanvas = () => {
      // Adjust canvas size for high-DPI displays
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      
  //     const contentHeight = document.querySelector(".projects-container")?.scrollHeight || window.innerHeight;
  // canvas.width = window.innerWidth * window.devicePixelRatio;
  // canvas.height = contentHeight * window.devicePixelRatio;
  // ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  initializeRain();
    };

    // Initialize rain drops array
    let drops = [];
    const initializeRain = () => {
      const columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    // Draw function for the digital rain effect
    function draw() {
      if (!ctx || !canvas) return;

      // Semi-transparent black background for trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text for the rain effect
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop position randomly to create the falling effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // Initial setup and resizing
    resizeCanvas();
    const intervalId = setInterval(draw, 33);

    // window.addEventListener("resize", resizeCanvas);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" , minWidth:"100%"}} />
    </div>
  );
}
