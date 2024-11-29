class PacmanB {
    constructor(gameObj, playerObj) {
        this.x = 40;
        this.y = 10;
        this.speed = playerObj.speed;
        this.width = 20;
        this.height = 20;
        this.radius = 20;
        this.angle = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    }
    update(gameObj) {
        this.speed +=70;
        this.x +=this.speed;
        this.y +=this.speed;

        this.draw(gameObj.ctx);
    }
}

function Controller (pacman) {
    window.addEventListener("keydown", (e) => {
        let k = e.key;
        setTimeout(() => {
            if (k === "ArrowLeft" || k === "a") {
                // left arrow or a
                console.log("sdsd")
                pacman.x -= 3;
            } else if (k === "ArrowUp" || k === "w") {
                // up arrow or w
                pacman.y -= 3;
            } else if (k === "ArrowRight" || k === "d") {
                // right arrow or d
                pacman.x += 3;
            } else if (k === "ArrowDown" || k === "s") {
                // bottom arrow or s
                pacman.y += 3;
            }
        }, 1);
    });
    
    // let pad = (e) => {
    //     let k = e.target.dataset.direction;
    //     // console.log(e)
    //     // console.log(e.target.dataset.direction)
    //     setTimeout(() => {
    //         if (k == 'left') {
    //             // left arrow or a
    //             pacman.nextDirection = DIRECTION_LEFT;
    //         } else if (k == 'up') {
    //             // up arrow or w
    //             pacman.nextDirection = DIRECTION_UP;
    //         } else if (k == 'right') {
    //             // right arrow or d
    //             pacman.nextDirection = DIRECTION_RIGHT;
    //         } else if (k == 'down') {
    //             // bottom arrow or s
    //             pacman.nextDirection = DIRECTION_BOTTOM;
    //         }
    //     }, 1);
    // }
    
    
    // let Dpad = document.querySelectorAll('.pad-dir');
    
    // Dpad.forEach(elem => {
    //     elem.onclick = (e) => {
    //         pad(e)
    //     };
    // });
}

export default function PacM(gameObj, playerObj) {
    let pacman = new PacmanB(gameObj, playerObj);
    Controller(pacman)
    pacman.update(gameObj);
}