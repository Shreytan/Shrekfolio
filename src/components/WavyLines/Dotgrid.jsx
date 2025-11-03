import React, { useEffect, useRef } from "react";

const DotGrid = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = {
      el: svgRef.current,
      width: 1,
      height: 1,
    };

    const dots = [];
    const circle = {
      radius: 3,
      margin: 20,
    };

    const resizeHandler = () => {
      svg.width = window.innerWidth;
      svg.height = window.innerHeight;
      svg.el.setAttribute("viewBox", `0 0 ${svg.width} ${svg.height}`);
      svg.el.innerHTML = ""; // Clear existing dots
      createDots();
    };

    const createDots = () => {
      const dotSize = circle.radius + circle.margin;
      const rows = Math.floor(svg.height / dotSize);
      const cols = Math.floor(svg.width / dotSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * dotSize + dotSize / 2;
          const y = row * dotSize + dotSize / 2;

          const dotEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          dotEl.setAttribute("cx", x);
          dotEl.setAttribute("cy", y);
          dotEl.setAttribute("r", circle.radius);
          dotEl.setAttribute("fill", "black");

          svg.el.appendChild(dotEl);

          dots.push({ x, y, el: dotEl });
        }
      }
    };

    const mouseHandler = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      dots.forEach((dot) => {
        const distX = mouseX - dot.x;
        const distY = mouseY - dot.y;
        const distance = Math.hypot(distX, distY);

        const maxDist = 100; // Effect radius
        const effectStrength = Math.max(0, maxDist - distance);

        if (distance < maxDist) {
          const angle = Math.atan2(distY, distX);
          const offsetX = Math.cos(angle) * effectStrength;
          const offsetY = Math.sin(angle) * effectStrength;

          dot.el.setAttribute("cx", dot.x + offsetX);
          dot.el.setAttribute("cy", dot.y + offsetY);
        } else {
          dot.el.setAttribute("cx", dot.x);
          dot.el.setAttribute("cy", dot.y);
        }
      });
    };

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("mousemove", mouseHandler);

    resizeHandler(); // Initialize
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" />;
};

export default DotGrid;
