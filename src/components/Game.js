import React, { useRef, useEffect } from "react";
import spaceshipImg from "../images/logo-min.png";
import projectileImg from "../images/program-domain.png";
import meteorImg from "../images/program-domain.png";

const Game = () => {
  const canvasRef = useRef(null);

  const spaceship = { x: window.innerWidth / 2, y: window.innerHeight - 50 };
  const projectiles = [];
  const meteors = [];

  const spaceshipImage = new Image();
  spaceshipImage.src = spaceshipImg;

  const projectileImage = new Image();
  projectileImage.src = projectileImg;

  const meteorImage = new Image();
  meteorImage.src = meteorImg;

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw spaceship
    ctx.drawImage(spaceshipImage, spaceship.x, spaceship.y, 50, 50);

    // Draw projectiles
    projectiles.forEach((p) => ctx.drawImage(projectileImage, p.x, p.y, 10, 20));

    // Draw meteors
    meteors.forEach((m) => ctx.drawImage(meteorImage, m.x, m.y, 40, 40));
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight * 0.8;

    // Game loop
    const loop = setInterval(() => {
      // Create meteors every 2 seconds
      if (Date.now() % 2000 < 100) {
        meteors.push({ x: Math.random() * ctx.canvas.width, y: 0 });
      }

      // Move projectiles
      projectiles.forEach((p) => (p.y -= 5));

      // Move meteors
      meteors.forEach((m) => (m.y += 2));

      // Check for collisions
      meteors.forEach((m, mi) => {
        projectiles.forEach((p, pi) => {
          if (Math.abs(m.x - p.x) < 20 && Math.abs(m.y - p.y) < 20) {
            meteors.splice(mi, 1);
            projectiles.splice(pi, 1);
          }
        });
      });

      draw(ctx);
    }, 100);

    // Key press handling
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          spaceship.x = Math.max(0, spaceship.x - 5);
          break;
        case "ArrowRight":
          spaceship.x = Math.min(ctx.canvas.width, spaceship.x + 5);
          break;
        case " ":
          projectiles.push({ x: spaceship.x, y: spaceship.y });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      clearInterval(loop);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Game;
