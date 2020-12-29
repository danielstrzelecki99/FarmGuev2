function printmap(){
	const can = document.getElementById("can");
	const ctx = can.getContext("2d");
	can.width = 1200;
	can.height = 800;
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
}

printmap();
