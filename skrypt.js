const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

window.onload = function(){
	const playergraph = new Image();
	playergraph.src="img/gracz.png";
}

function printmap(){
	let minion = new Image();
	minion.src="img/minion.png";
	minion.onload = function(){
	ctx.drawImage(this,80,70,70,70);
	}
}

class Minion{
	constructor(){
		let hp = 1;
	}
}

class Player{
	constructor(){
		let posX = cw/2;
		let posY = ch/2;
	}
	render(){
		ctx.drawImage(playergraph, 100, 100, 100, 100);
	}
}

printmap();
const player = new Player();
player.render();