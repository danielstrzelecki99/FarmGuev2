/*window.onload = function(){
		var canvas = document.getElementById("can");
		var context = canvas.getContext("2d");
		var obrazek = new Image();
		obrazek.onload = function(){
			context.drawImage(this,80,70);
		}
obrazek.src="img/minion.png";
};*/

function table(){
	const can = document.getElementById("can");
	const ctx = can.getContext("2d");
	can.width = 1200;
	can.height = 800;
	let minion = new Image();
	minion.onload = function(){
		ctx.drawImage(this,80,70,70,70);
	}
	minion.src="img/minion.png";
}

table();