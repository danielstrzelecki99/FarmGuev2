const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

function printmap(){
	
	let minion = new Image();
	minion.src="img/minion.png";
	minion.onload = function(){
		ctx.drawImage(this,80,70,70,70);
	}
}

class Minion{
	let positionX;
	let positionY;
	constructor(){
		let hp = 1;
	}
}

class Player{
}

printmap();
