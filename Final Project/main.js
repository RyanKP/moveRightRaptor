var pc;
var npc_prince;
var pcDiv;

var output;
var run = 0;

var gameTimer;
var mX;
var count = 0;
var enemy;
var time;

var paused;

var platforms = new Array();
var hMPlatforms = new Array();
var vMPlatforms = new Array();
var vMPUp = new Array();
var hMPRight = new Array();
var enemyRight = new Array();
var spikes = new Array();
var enemies = new Array();


var platformDiv;

const GRAVITY = 2;
var pcSpeed;
var fallSpeed;

var level = 0;

var lifebar;
var numLives = 0;
var leftArrowDown = false;
var rightArrowDown = false;
var upArrowDown = false;
var spaceBarDown = false;

function addLife(){
	numLives++;
	var life = document.createElement('IMG');
	life.src='heart.png';
	lifebar.appendChild(life);
}

function retry(){
	clearInterval(gameTimer);
	fallSpeed = 0;
	document.getElementById('die').style.display="none";
	level=0;
	lifebar = document.getElementById('lifebar');
	for (var i = 0; i<3; i++) addLife();

	pc = document.getElementById('pc');
	pc.style.width = '20px';
	pc.style.height = '40px';

	npc_prince = document.getElementById('npc_prince');
	npc_prince.style.width = '10px';
	npc_prince.style.height = '40px';

	nextLevel();

}

function init(){
	fallSpeed = 0;
	document.getElementById('intro').style.display="none";

	lifebar = document.getElementById('lifebar');
	for (var i = 0; i<3; i++) addLife();

	pc = document.createElement('img');
	pc.src = "Raptor.png";
	pc.id = "pc";
	pc.style.width = '74px';
	pc.style.height = '50px';
	pc.style.display = 'block';
	gameWindow.appendChild(pc);

	pcDiv = document.getElementById('pcDiv');
	pcDiv.style.width = '20px';
	pcDiv.style.height = '40px';

	npc_prince = document.getElementById('npc_prince');
	npc_prince.style.width = '10px';
	npc_prince.style.height = '40px';
	npc_prince.style.display = 'block';

	// document.getElementById('get3').currentTime = 0;
	// document.getElementById('get3').play();
	// document.getElementById('get3').volume = 0.1;

	nextLevel();
}

function addPlatform(x, y, w, h){
	var p = document.createElement('DIV');
	p.className = 'platform';
	p.style.left = x + 'px';
	p.style.top = y + 'px';
	p.style.width = w + 'px';
	p.style.height = h + 'px';

	platforms.push(p);
	platformDiv.appendChild(p);
}

function addHMPlatform(x, y, w, h, min, max){

	var hMP = document.createElement('DIV');
	hMP.className = 'platform';
	hMP.style.left = x + 'px';
	hMP.style.top = y + 'px';
	hMP.style.width = w + 'px';
	hMP.style.height = h + 'px';
	hMP.speed = 5;
	hMP.min = min;
	hMP.max = max;

	hMPRight.push(false);

	hMPlatforms.push(hMP);
	platformDiv.appendChild(hMP);			
}

function addVMPlatform(x, y, w, h, min, max){
	var vMP = document.createElement('DIV');
	vMP.className = 'platform';
	vMP.style.left = x + 'px';
	vMP.style.top = y + 'px';
	vMP.style.width = w + 'px';
	vMP.style.height = h + 'px';
	vMP.speed = 5;
	vMP.min = min;
	vMP.max = max;

	vMPUp.push(false);

	vMPlatforms.push(vMP);
	platformDiv.appendChild(vMP);

}

function addSpike(x, y){
	var spike = document.createElement('img');
	spike.className = 'spike';
	spike.src = 'spike.gif';
	
	spike.style.left = x + 'px';
	spike.style.top = y + 'px';
	spike.style.width= '50px';
	spike.style.height= '50px';

	spikes.push(spike);
	platformDiv.appendChild(spike);
}

function addMovingEnemy(x, y, min, max){
	enemy = document.createElement('img');
	enemy.className = 'spike';
	enemy.src = 'spike.gif';
	enemy.style.left = x + 'px';
	enemy.style.top = y + 'px';
	enemy.style.width= '20px';
	enemy.style.height= '20px';

	enemyRight = false;

	enemies.push(enemy);
	platformDiv.appendChild(enemy);
}

function nextLevel(){
	

	document.getElementById('btnContinue').style.display = 'none';
	document.getElementById('getNot').style.display = 'none';
	
	level++;
	document.getElementById('level').innerHTML="Level " + level;

	count = 0;

	fallSpeed = 0;
	leftArrowDown = false;
	rightArrowDown = false;
	upArrowDown = false;

	pc.style.left = '190px';
	pc.style.top = '250px';
	pcDiv.style.left = '190px';
	pcDiv.style.top = '250px';

	platformDiv = document.getElementById('platforms');

	for(var i=0; i<platforms.length; i++){
		platformDiv.removeChild(platforms[i]);
	}
	for(var i=0; i<hMPlatforms.length; i++){
		platformDiv.removeChild(hMPlatforms[i]);
	}
	for(var i=0; i<vMPlatforms.length; i++){
		platformDiv.removeChild(vMPlatforms[i]);
	}

	for(var i=0; i<spikes.length; i++){
		platformDiv.removeChild(spikes[i]);
	}

	platforms = new Array();
	vMPlatforms = new Array();
	hMPlatforms = new Array();

	spikes = new Array();
	

	makeLevel();

	platformDiv.style.left = '0px';
	platformDiv.style.top = '0px';

	gameTimer = setInterval(gameloop, 42);
}

function gameloop(){
	if (leftArrowDown || rightArrowDown) run++;
	count++;

	if (count%25==0){
		document.getElementById('stat').innerHTML= "Time " + (time - (count / 25));
	}

	// if (time - (count / 25)<10){
	// 	document.getElementById('sndTick').currentTime = 0;
	// 	document.getElementById('sndTick').play();
	// }

	if (time - (count/25)==0){
		clearInterval(gameTimer);
		removeLife();
		level--;
		nextLevel();
		
	}
	

	for (var i = 0; i<hMPlatforms.length; i++){
		hMPlatforms[i].style.left = parseInt(hMPlatforms[i].style.left) - hMPlatforms[i].speed + 'px';
		if(hMPlatforms[i].speed<0){
			hMPRight[i] = true;
		}
		else{
			hMPRight[i] = false;
		}

		if(parseInt(hMPlatforms[i].style.left) >= hMPlatforms[i].max){
			hMPlatforms[i].speed *= -1;
			hMPlatforms[i].style.left = hMPlatforms[i].max + 'px';
			hMPRight[i] = false;
		}
		if (parseInt(hMPlatforms[i].style.left) <= hMPlatforms[i].min){
			hMPlatforms[i].speed *= -1;
			hMPlatforms[i].style.left = hMPlatforms[i].min + 'px';
			hMPRight[i] = true;
		}
	}
	for (var i = 0; i<vMPlatforms.length; i++){
		// vMPlatforms[i].style.top = parseInt(vMPlatforms[i].style.top) - vMPlatforms[i].speed + 'px';
		// if(vMPlatforms[i].speed<0){
		// 	vMPUp[i] = true;
		// }
		// else{
		// 	vMPUp[i] = false;
		// }

		// if(parseInt(vMPlatforms[i].style.top) >= vMPlatforms[i].max){
		// 	vMPlatforms[i].speed *= -1;
		// 	vMPlatforms[i].style.top = vMPlatforms[i].max + 'px';
		// 	vMPUp[i] = false;
		// }
		// if (parseInt(vMPlatforms[i].style.top) <= vMPlatforms[i].min){
		// 	vMPlatforms[i].speed *= -1;
		// 	vMPlatforms[i].style.top = vMPlatforms[i].min + 'px';
		// 	vMPUp[i] = true;
		// }
	}
	for (var i = 0; i<enemies.length; i++){
		enemies[i].style.left = parseInt(enemies[i].style.left) - enemies[i].speed + 'px';
		if(enemies[i].speed<0){
			enemyRight[i] = true;
		}
		else{
			enemyRight[i] = false;
		}

		if(parseInt(enemies[i].style.left) >= enemies[i].max){
			enemies[i].speed *= -1;
			enemies[i].style.left = enemies[i].max + 'px';
			enemyRight[i] = false;
		}
		if (parseInt(enemies[i].style.left) <= enemies[i].min){
			enemies[i].speed *= -1;
			enemies[i].style.left = enemies[i].min + 'px';
			enemyRight[i] = true;
		}
	}

	movement();

	if(hittest(pc, npc_prince) ){
	
		clearInterval(gameTimer);
		if(level==3){
			// document.getElementById('get2').currentTime = 0;
			// document.getElementById('get2').play();
			gameWindow.innerHTML = '<br><br>A Winner Is You!';
			gameWindow.className = 'msgGameOver';
		}
		else{
			// document.getElementById('get1').currentTime = 0;
			// document.getElementById('get1').play();
			document.getElementById('getNot').style.display = 'block';
			document.getElementById('btnContinue').style.display = 'block';
			clearInterval(gameTimer);
			
		}
	}
	else if(parseInt(pc.style.top) > 400){
		clearInterval(gameTimer);
	
		removeLife();
		level--;
		nextLevel();
	}
	for (var i = 0; i < spikes.length; i++) {
		if(hittest(pc, spikes[i]) ){
			clearInterval(gameTimer);
			removeLife();
			level--;
			nextLevel();
		}
	}
	var pc_src = pc.src.split('/').pop();
	
	if(fallSpeed==0){
		if(leftArrowDown || rightArrowDown){
		if(pc_src != 'RaptorRun.gif'){ pc.src = 'RaptorRun.gif';}
		}
		else{
			if(fallSpeed<=0) pc.src = 'Standing.gif';
		}
		if(leftArrowDown){
			pc.className='flipHorizontal';
		}
		else{
			pc.className='';
		}
	}
	else if(fallSpeed<0){
		pc.src = 'Jumping.gif';
	}

}

function removeLife(){

	if(numLives>0){
		// document.getElementById('sndDie').currentTime = 0;
		// document.getElementById('sndDie').play();
		numLives--;
		lifebar.removeChild(lifebar.lastChild);
	}
	else{
		document.getElementById('die').style.display = "block";
		clearInterval(gameTimer);
		level = 0;
		fallSpeed = 0;
	}
}

function win(){
	clearInterval(gameTimer);
	nextLevel();
}

function timeStart(){
	paused = false;
	gameTimer = setInterval(gameloop, 42);
	document.getElementById('pause').style.display='none';
	
// 	if(document.getElementById('music1').volume==0){
// 		document.getElementById('music1').play();
// 	}
// 	if(document.getElementById('music2').volume==0){
// 		document.getElementById('music2').play();
// 	}
// 	if(document.getElementById('music3').volume==0){
// 		document.getElementById('music3').play();
// 	}
// 	if(document.getElementById('sndLand').volume==0){
// 		document.getElementById('sndLand').play();
// 	}
// 	if(document.getElementById('sndDie').volume==0){
// 		document.getElementById('sndDie').play();
// 	}
// 	if(document.getElementById('get1').volume==0){
// 		document.getElementById('get1').play();
// 	}
// 	if(document.getElementById('get2').volume==0){
// 		document.getElementById('get2').play();
// 	}
// 	if(document.getElementById('get3').volume==0){
// 		document.getElementById('get3').play();
// 	}
// 	document.getElementById('music1').volume = 0.1;
// 	document.getElementById('music2').volume = 0.1;
// 	document.getElementById('music3').volume = 0.1;
// 	document.getElementById('sndLand').volume = 0.1;
// 	document.getElementById('sndDie').volume = 0.1;
// 	document.getElementById('get1').volume = 0.1;
// 	document.getElementById('get2').volume = 0.1;
// 	document.getElementById('get3').volume = 0.1;
}

