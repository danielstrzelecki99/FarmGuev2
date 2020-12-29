const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

let playerPosX = cw/2;
let playerPosY = ch/2;

let a = false;
let d = false;
let s = false;
let w = false;

let playergraph = new Image();
playergraph.src="img/gracz.png";

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
	
	printPlayer: function () {
		
		playergraph.onload = function(){
		ctx.drawImage(this,playerPosX,playerPosY,165,175);
		}
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
		playerPosY-=4;
	}
	if (s == true) {
		playerPosY+=4;
	}
	if (a == true){
		playerPosX -=4;
	}
	if (d==true){
		playerPosX +=4;
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