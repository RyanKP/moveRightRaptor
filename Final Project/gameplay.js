function movement(){
	for (var i = 0; i<movingPlatforms.length; i++){
		movingPlatforms[i].style.left = parseInt(movingPlatforms[i].style.left) - movingPlatforms[i].speed + 'px';
		if(movingPlatforms[i].speed<0){
			mPRight=true;
			mPLeft=false;
		}
		else{
			mPRight=false;
			mPLeft=true;
		}

		if(parseInt(movingPlatforms[i].style.left) >= movingPlatforms[i].max){
			movingPlatforms[i].speed *= -1;
			movingPlatforms[i].style.left = movingPlatforms[i].max + 'px';
			mPRight = false;
			mPLeft = true;
		}
		if (parseInt(movingPlatforms[i].style.left) <= movingPlatforms[i].min){
			movingPlatforms[i].speed *= -1;
			movingPlatforms[i].style.left = movingPlatforms[i].min + 'px';
			mPRight = true;
			mPLeft = false;
		}
	}

	// HORIZONTAL MOVEMENT


	if(leftArrowDown){
		pc.style.left = parseInt(pc.style.left) - 10 + 'px';

		var sideHit = false;
		for(var i=0; i<platforms.length; i++){
			if( hittest(pc, platforms[i]) ) sideHit = true;
		}
		for (var i=0; i<movingPlatforms.length; i++){
			if( hittest(pc, movingPlatforms[i]) ) sideHit = true;
		}
		pc.style.left = parseInt(pc.style.left) + 10 + 'px';

		if( ! sideHit ){
			platformDiv.style.left = parseInt(platformDiv.style.left) + 10 + 'px';
		}
	}
	if(rightArrowDown){
		
		pc.style.left = parseInt(pc.style.left) + 10 + 'px';
		document.getElementById('level').style.left = parseInt(document.getElementById('level').style.left - 10 + 'px')	

		var sideHit = false;
		for(var i=0; i<platforms.length; i++){
			if( hittest(pc, platforms[i]) )sideHit = true;
		}
		for(var i=0; i<movingPlatforms.length; i++){
			if( hittest(pc, movingPlatforms[i]) )sideHit = true;
		}
		pc.style.left = parseInt(pc.style.left) - 10 + 'px';
		
		if( ! sideHit ) {
			platformDiv.style.left = parseInt(platformDiv.style.left) - 10 + 'px';
		}

	}

	// VERTICAL MOVEMENT
	if (fallSpeed>0){
		pc.src = "princessFall.gif";
	}


	if (fallSpeed <= 500){
		fallSpeed += GRAVITY;
	}
	else {
		fallSpeed = 500;
	}
	pc.style.top = parseInt(pc.style.top) + fallSpeed + 'px';

	for(var i=0; i<platforms.length; i++){
		if( hittest(pc, platforms[i]) ){
			if(fallSpeed<0){
				pc.style.top = parseInt(platforms[i].style.top) + parseInt(platforms[i].style.height) + 'px';
				fallSpeed*= -1;
			}
			else{
				pc.style.top = parseInt(platforms[i].style.top) - parseInt(pc.style.height) + 'px';
				if(upArrowDown){ 
					fallSpeed = -25;
					if(parseInt(pc.style.top) < pcTop){
						document.getElementById('sndLand').currentTime = 0;
						document.getElementById('sndLand').volume = 0.1;
						document.getElementById('sndLand').play();
					}
				
				} 
				else{
					fallSpeed = 0;
				}
			}
			// break;
		}
	}

	for(var i=0; i<movingPlatforms.length; i++){
		if( hittest(pc, movingPlatforms[i]) ){
			if(fallSpeed<0){
				pc.style.top = parseInt(movingPlatforms[i].style.top) + parseInt(movingPlatforms[i].style.height) + 'px';
				fallSpeed*= -1;
			}
			else{
				pc.style.top = parseInt(movingPlatforms[i].style.top) - parseInt(pc.style.height) + 'px';
				if(mPRight){
					var sideHit = false;

					pc.style.left = parseInt(pc.style.left) - 5 + 'px';
					
					for(var j=0; j<platforms.length; j++){
						if( hittest(pc, platforms[j]) ) sideHit = true;
					}
					for (var j=0; j<movingPlatforms.length; j++){
						if( hittest(pc, movingPlatforms[j]) ) sideHit = true;
					}
					pc.style.left = parseInt(pc.style.left) + 5 + 'px';

					pc.style.left = parseInt(pc.style.left) + 5 + 'px';

					
					for(var j=0; j<platforms.length; j++){
						if( hittest(pc, platforms[j]) ) sideHit = true;
					}
					for (var j=0; j<movingPlatforms.length; j++){
						if( hittest(pc, movingPlatforms[j]) ) sideHit = true;
					}
					pc.style.left = parseInt(pc.style.left) - 5 + 'px';

					if(! sideHit){
						platformDiv.style.left = parseInt(platformDiv.style.left) - 5 + 'px';
					}
					else{
						platformDiv.style.left = parseInt(platformDiv.style.left) + 0 + 'px';
					}
				}
				if(mPLeft){

					var sideHit = false;

					pc.style.left = parseInt(pc.style.left) + 5 + 'px';

					
					for(var j=0; j<platforms.length; j++){
						if( hittest(pc, platforms[j]) ) sideHit = true;
					}
					for (var j=0; j<movingPlatforms.length; j++){
						if( hittest(pc, movingPlatforms[j]) ) sideHit = true;
					}
					pc.style.left = parseInt(pc.style.left) - 5 + 'px';

					pc.style.left = parseInt(pc.style.left) - 5 + 'px';

					for(var j=0; j<platforms.length; j++){
						if( hittest(pc, platforms[j]) ) sideHit = true;
					}
					for (var j=0; j<movingPlatforms.length; j++){
						if( hittest(pc, movingPlatforms[j]) ) sideHit = true;
					}
					pc.style.left = parseInt(pc.style.left) + 5 + 'px';

					if(! sideHit){
						platformDiv.style.left = parseInt(platformDiv.style.left) + 5 + 'px';
					}
					else{
						platformDiv.style.left = parseInt(platformDiv.style.left) - 0 + 'px';
					}
				}

				if(upArrowDown) {
					fallSpeed = -25;
					document.getElementById('sndLand').currentTime = 0;
					document.getElementById('sndLand').volume = 0.1;
					document.getElementById('sndLand').play();
				} 
				else{
					fallSpeed = 0;
				}
			}
		}
		
		
	}

	if(hittest(pc, npc_prince) ){

		clearInterval(gameTimer);
		if(level==3){
			document.getElementById('get2').currentTime = 0;
			document.getElementById('get2').play();
			gameWindow.innerHTML = '<br><br>A Winner Is You!';
			gameWindow.className = 'msgGameOver';
		}
		else{
			document.getElementById('get1').currentTime = 0;
			document.getElementById('get1').play();
			document.getElementById('getNot').style.display = 'block';
			document.getElementById('btnContinue').style.display = 'block';
			clearInterval(gameTimer);
			
		}
	}
}

document.addEventListener('keydown', function(event){
	if(event.keyCode==37) leftArrowDown = true;
	if(event.keyCode==39) rightArrowDown = true;
	if(event.keyCode==38) upArrowDown = true;
	if(event.keyCode==32){ 
		spaceBarDown = true;
		if(paused){
			timeStart();
		}
		else{
			paused = true;
			clearInterval(gameTimer);
			document.getElementById('pause').style.display = 'block';
			//place all audio here, replace sndLand with audio ID.
			if(!document.getElementById('sndLand').paused){
				document.getElementById('sndLand').volume = 0;
			}
			
		}
	}
});

document.addEventListener('keyup', function(event){
	if(event.keyCode==37) leftArrowDown = false;
	if(event.keyCode==39) rightArrowDown = false;
	if(event.keyCode==38) upArrowDown = false;
	if(event.keyCode==32) spaceBarDown = false;
});