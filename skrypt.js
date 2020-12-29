const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

let a = false;
let d = false;
let s = false;
let w = false;


/*function printmap(){
	let minion = new Image();
	minion.src="img/minion.png";
	minion.onload = function(){
	ctx.drawImage(this,80,70,70,70);
	}
}*/

function printmap(){
	const map = new Image();
	map.src="img/mapa.png";
	map.onload = function(){
	ctx.drawImage(this,0,0);
	}
}

const player = {
	posX: cw/2,
	posY: ch/2,
	printPlayer: function () {
		const playergraph = new Image();
		playergraph.src="img/gracz.png";
		const a = this.posX;
		const b = this.posY;
		playergraph.onload = function(){
		ctx.drawImage(this,a,b,165,175);
		}
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


function gra(){
	printmap();
	player.printPlayer();
	playerMove();
}

setInterval(gra, 1000/60);

document.addEventListener("keydown", obslugaklawiszy);
document.addEventListener("keyup", obslugaklawiszystop);