import React, { useEffect, useRef } from 'react'

const JumpingJack = () => {
  const  canvasRef = useRef(null);
  useEffect(()=> {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(20, 20, 200, 300);

  }, []);
  return (
    <canvas ref={canvasRef}>Pacman</canvas>
  )
}

export default JumpingJack