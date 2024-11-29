import React, { useEffect, useRef } from 'react'
import PacM from './pacman';

const PacmanGameScreen = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        let score = 0;
        const gameObj = {
            width:canvas.width,
            height:canvas.height,
            ctx
        }

        const PacmanObj = {
            dx: 1,
            dy: 1,
            width: 20,
            height: 20,
            radius: 20,
            speed: 0
        }

        // game screen full width and height dependent on screen rotation (landscape)
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 90% of game screen will be the actual game view
        // 10% remaining will be for score and pacman remaining lives
        
        ctx.fillStyle = "#fff";
        ctx.font = "15px Arial";
        ctx.fillText(`Score: ${score}`, 10, 15);
        
        const renderr = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // create player
            PacM(gameObj, PacmanObj);
            requestAnimationFrame(renderr);
        }

        renderr();
    }, []);
    return (
        <div className='' style={{height:"100vh", width:"100vw", backgroundColor:"#000000"}}>
            <canvas ref={canvasRef}> Pacman</canvas>
        </div>
    )
}

export default PacmanGameScreen