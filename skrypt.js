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

function printPlayer(){
	let playergraph = new Image();
	playergraph.src="img/gracz.png";
	playergraph.onload = function(){
	ctx.drawImage(this,200,200,165,175);
	}
}

printmap();
printPlayer();