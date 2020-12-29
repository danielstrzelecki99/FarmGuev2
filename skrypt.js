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


function printmap(){
	let minion = new Image();
	minion.src="img/minion.png";
	minion.onload = function(){
	ctx.drawImage(this,80,70,70,70);
<<<<<<< HEAD
	}
}
const player = {
	posX: cw/2,
	posY: ch/2,
	printPlayer: function () {
		let playergraph = new Image();
		playergraph.src="img/gracz.png";
		playergraph.onload = function(){
		ctx.drawImage(this,200,200,165,175);
		}
=======
	}
}
const player = {
	printPlayer: function () {
		let playergraph = new Image();
		playergraph.src="img/gracz.png";
		playergraph.onload = function(){
		ctx.drawImage(this,playerPosX,playerPosY,165,175);
		ctx.clearImage(this,playerPosX,playerPosY,165,175);
		}
	}
}

function obslugaklawiszy(e){
	if (e.keyCode == 87) {
		w = true;
>>>>>>> 1da0e90eed830d27a8f6d556ab12199195982ec0
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

<<<<<<< HEAD
printmap();
player.printPlayer();
=======
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
>>>>>>> 1da0e90eed830d27a8f6d556ab12199195982ec0

function gra(){
	printmap();
	player.printPlayer();
<<<<<<< HEAD
	player.move();
}
=======
	playerMove();
	clear();
}

setInterval(gra, 1000/60);

document.addEventListener("keydown", obslugaklawiszy);
document.addEventListener("keyup", obslugaklawiszystop);
>>>>>>> 1da0e90eed830d27a8f6d556ab12199195982ec0
