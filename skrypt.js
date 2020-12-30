const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

const pw = 165;
const ph = 175;

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
	posX: cw/2-pw/2,
	posY: ch/2-ph/2,
	printPlayer: function () {
		ctx.drawImage(playergraph,this.posX,this.posY,pw,ph);
	}
}

function pressKey(e){
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
function releaseKey(e){
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

//Ograniczenie poruszania się gracza
function playerBorder(){
	if (player.posX <= 0){
		player.posX = 0;
	}
	if (player.posX + pw >= cw){
		player.posX  = cw - pw;
	}
	if (player.posY <= 0){
		player.posY = 0;
	}
	if(player.posY + ph>= ch){
		player.posY = ch - ph;
	}
	console.log(player.posY);
}

function mainLoop(){
	printmap();
	player.printPlayer();
	playerMove();
	playerBorder();
}

document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);