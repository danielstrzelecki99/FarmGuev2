const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

class AnimationFrame {
    constructor( fps = 60, animate ) {
        this.requestID = 0;
        this.fps = fps;
        this.animate = animate;
    }

    start() {
        let then = performance.now();
        const interval = 1000 / this.fps;
        const tolerance = 0.1;

        const animateLoop = now => {
            this.requestID = requestAnimationFrame( animateLoop );
            const delta = now - then;

            if ( delta >= interval - tolerance ) {
                then = now - ( delta % interval );
                this.animate( delta );
            }
        };
        this.requestID = requestAnimationFrame( animateLoop );
    }

    stop() {
        cancelAnimationFrame( this.requestID );
    }

}

let a = false;
let d = false;
let s = false;
let w = false;

const playergraph = new Image();
playergraph.src="img/gracz.png";
const map = new Image();
map.src="img/mapa.png";
map.addEventListener("load", e=>{
	const anim = new AnimationFrame(60, mainLoop);
	anim.start();
})



function printmap(){
	ctx.drawImage(map,0,0);
}

const player = {
	posX: cw/2,
	posY: ch/2,
	printPlayer: function () {
		const a = this.posX;
		const b = this.posY;
		ctx.drawImage(playergraph,a,b,165,175);
		console.log(a);
		console.log(b);
	}
}

function obslugaklawiszy(e){
	if (e.keyCode == 87) {
		w = true;
	}
	if (e.keyCode == 83) {
		s = true;
	}
	if (e.keyCode == 65) {
		a = true;
	}
	if (e.keyCode == 68) {
        d = true;
    }
}

function obslugaklawiszystop(e){
	if (e.keyCode == 87) {
		w = false;
	}
	if (e.keyCode == 83) {
		s = false;
	}
	if (e.keyCode == 65) {
		a = false;
	}
	if (e.keyCode == 68) {
        d = false;
    }
}

function playerMove(){
	if (w == true) {
		player.posY-=4;
	}
	if (s == true) {
		player.posY+=4;
	}
	if (a == true){
		player.posX -=4;
	}
	if (d==true){
		player.posX +=4;
	}
}


function mainLoop(){
	printmap();
	player.printPlayer();
	playerMove();
}

//setInterval(gra, 1000/60);

document.addEventListener("keydown", obslugaklawiszy);
document.addEventListener("keyup", obslugaklawiszystop);