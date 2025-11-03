import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [useRealProgress, setUseRealProgress] = useState(false);

  // Step 1: Artificially increase progress to 40%
  useEffect(() => {
    let animationFrame;
    const animateProgress = () => {
      if (useRealProgress) {
        setDisplayProgress(progress);
      }
    };

    animateProgress();

    const timer = setTimeout(() => {
      setUseRealProgress(true);
    }, 3000); // Switch to actual progress after 3 seconds

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, [progress, useRealProgress]);

  return (
    <Html center>
      <div className="loading-screen">

        <div class="loader">
          <div class="box box-1">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
          <div class="box box-2">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
          <div class="box box-3">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
          <div class="box box-4">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
        </div>
        <h2>Loading</h2>
      </div>

    </Html>
  );
};

export default Loader;
