import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Bubbles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let spheres = [];

    const colors = ['#9f7aea', '#a46de3', '#b052dc', '#ba37d4', '#c41cca'];

    const texts = [
      'Software', 'Web Dev', 'Machine Learning', 'Mobile App', 'DS & Algo', 'Digital Marketing',
      'BDE', 'Sales', 'Financial Modeling', 'Growth', 'Designing', 'Copywriting',
      'Video Editing', 'Content Writing', 'Public Relations', 'UI/UX', 'Operations',
      'Manual Testing', 'Project Management', 'Social Media'
    ];

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const createSphere = () => {
      const radius = randomInRange(30, 60);
      const x = randomInRange(radius, canvas.width - radius);
      const y = randomInRange(radius, canvas.height - radius);
      const dx = randomInRange(-2, 2);
      const dy = randomInRange(-2, 2);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const text = texts[Math.floor(Math.random() * texts.length)];

      spheres.push({ x, y, radius, dx, dy, color, text });
    };

    const drawSphere = (sphere) => {
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = sphere.color;
      ctx.beginPath();
      ctx.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#fff';
      ctx.font = '14px poppins';
      ctx.textAlign = 'center';
    
      // Wrap text within the sphere
      const maxTextWidth = sphere.radius * 2 - 10; // Adjust padding
      const words = sphere.text.split(' ');
      let line = '';
      let y = sphere.y;
    
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = ctx.measureText(testLine).width;
    
        if (testWidth > maxTextWidth) {
          ctx.fillText(line, sphere.x, y + 4);
          line = words[i] + ' ';
          y += 18; // Adjust line height
        } else {
          line = testLine;
        }
      }
    
      ctx.fillText(line, sphere.x, y); // Fill the last line
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < spheres.length; i++) {
        const sphere = spheres[i];

        sphere.x += sphere.dx;
        sphere.y += sphere.dy;

        if (sphere.x - sphere.radius < 0 || sphere.x + sphere.radius > canvas.width) {
          sphere.dx *= -1;
        }

        if (sphere.y - sphere.radius < 0 || sphere.y + sphere.radius > canvas.height) {
          sphere.dy *= -1;
        }

        drawSphere(sphere);
      }

      requestAnimationFrame(update);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight, 400); // Set max height to 400px

      spheres = [];
      for (let i = 0; i < 20; i++) {
        createSphere();
      }
    };

    window.addEventListener('resize', handleResize);

    canvas.width = window.innerWidth;
    canvas.height = Math.min(window.innerHeight, 400); // Set max height to 400px

    for (let i = 0; i < 20; i++) {
      createSphere();
    }

    update();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full h-full top-0 left-0" />
  );
};

export default Bubbles;
