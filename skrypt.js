const can = document.getElementById("can");
const ctx = can.getContext("2d");
const cw = can.width = 1200;
const ch = can.height = 800;

const mw = 78; //minion width
const mh = 73; //minion height
const pw = 165; //player width
const ph = 175; //player height
const bw = 6; //bullet width
const bh = 6; //bullet height

let a = false;
let d = false;
let s = false;
let w = false;

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
function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let minionsArray = [];

function minionSpawn(){
	const min = new Minion();
	minionsArray.push(min);
}
setInterval(minionSpawn, 2000);

let bulletsArray = [];

function shot(e){
	const mouseX = e.clientX - can.offsetLeft;
	const mouseY = e.clientY - can.offsetTop; 
	const sho = new Bullet(mouseX, mouseY);
	bulletsArray.push(sho);
}
	

const playergraph = new Image();
playergraph.src="img/gracz.png";
const map = new Image();
map.src="img/mapa.png";
const miniongraph = new Image();
miniongraph.src="img/minion.png";
map.addEventListener("load", e => {
	const anim = new AnimationFrame(60, mainLoop);
	anim.start();
})


const player = { 
	posX: cw/2-pw/2,
	posY: ch/2-ph/2,
	printPlayer: function () {
		this.playerBorder();
		this.playerMove();
		ctx.drawImage(playergraph,this.posX,this.posY,pw,ph);
	},
	playerMove: function() {
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
	},
	//Ograniczenie poruszania się gracza
	playerBorder: function(){
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
}
}
class Minion{
	constructor(){
		this.spawn();
	}
	printMinion(){
		this.move();
		ctx.drawImage(miniongraph,this.posX,this.posY,mw,mh);
	}
	spawn(){
	const krawedz = randomInt(1,4);
	if (krawedz == 1)
	{
		this.posX = 0 - mw;
		this.posY = randomInt(0, ch);
	}
	else if (krawedz == 2)
	{
		this.posX = cw;
		this.posY = randomInt(0, ch);
	}
	else if (krawedz == 3)
	{
		this.posY = 0 - mh;
		this.posX = randomInt(0, cw);
	}
	else if (krawedz == 4)
	{
		this.posY = 807;
		this.posX = randomInt(0, cw);
	}
	}
	move(){
		const move_x = (player.posX - this.posX);
		const move_y = (player.posY - this.posY);
		const dl = Math.sqrt((move_x)*(move_x)+(move_y)*(move_y));
		this.posX += move_x/dl;
		this.posY += move_y/dl;
	}
}

class Bullet{
	constructor(mousex, mousey){
		this.posX = player.posX + 60;
		this.posY = player.posY + 20;
		ctx.fillStyle = "black";
		this.move_x = mousex - this.posX;
		this.move_y = mousey - this.posY;
	}
	printBullet(){
		this.move();
		ctx.fillRect(this.posX,this.posY,bw,bh);
	}
	move(){
		const dl = Math.sqrt((this.move_x)*(this.move_x)+(this.move_y)*(this.move_y));
		this.posX += this.move_x/dl * 10;
		this.posY += this.move_y/dl * 10;
	}
	delete(){
		if(this.posX < 0 || this.posX + bw > cw || this.posY < 0 || this.posY + bh > ch){
			return true;
		}
	}
}

function printmap(){
	ctx.drawImage(map,0,0);
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

function mainLoop(){
	printmap();
	player.printPlayer();
	for(let i = 0; i < minionsArray.length; i++) {
		minionsArray[i].printMinion();
	}
	for(let i = 0; i < bulletsArray.length; i++) {
		bulletsArray[i].printBullet();
		//delete bullet when he crossed the border of map
		if(bulletsArray[i].delete()){
			 bulletsArray.splice(i, 1);
		}
	}
	for(let i = 0; i < minionsArray.length; i++){
		for(let j = 0; j < bulletsArray.length; j++){
			const bmidX = bulletsArray[j].posX + bw/2;
			const bmidY = bulletsArray[j].posY + bh/2;
			const mmidX = minionsArray[i].posX + mw/2;
			const mmidY = minionsArray[i].posY + mh/2;
			//colission bullet with minion
			if(Math.sqrt((bmidX - mmidX)*(bmidX - mmidX)+(bmidY - mmidY)*(bmidY - mmidY)) < 50){
				bulletsArray.splice(j, 1);
				minionsArray.splice(i, 1);
			}
		}
	}
}

document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);
document.addEventListener("click", shot);