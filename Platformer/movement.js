function movement(){
	var pcTop = parseInt(pc.style.top);
	// HORIZONTAL MOVEMENT

	if(leftArrowDown){
		pc.style.left = parseInt(pc.style.left) - 10 + 'px';

		var sideHit = false;
		for(var i=0; i<platforms.length; i++){
			if( hittest(pc, platforms[i]) ) sideHit = true;
		}
		for (var i=0; i<hMPlatforms.length; i++){
			if( hittest(pc, hMPlatforms[i]) ) sideHit = true;
		}
		for (var i=0; i<vMPlatforms.length; i++){
			if( hittest(pc, vMPlatforms[i]) ) sideHit = true;
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
		for(var i=0; i<hMPlatforms.length; i++){
			if( hittest(pc, hMPlatforms[i]) )sideHit = true;
		}
		for(var i=0; i<vMPlatforms.length; i++){
			if( hittest(pc, vMPlatforms[i]) )sideHit = true;
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
				//pc.style.top = pcDiv.style.top;
				fallSpeed = -1;
			}
			else{
				pc.style.top = parseInt(platforms[i].style.top) - parseInt(pc.style.height) + 'px';
				//pc.style.top = pcDiv.style.top;
				if(upArrowDown){ 
					fallSpeed = -25;
					if(parseInt(pc.style.top) < pcTop){
						// document.getElementById('sndLand').currentTime = 0;
						// document.getElementById('sndLand').volume = 0.1;
						// document.getElementById('sndLand').play();
					}
				
				} 
				else{
					fallSpeed = 0;
				}
			}
			// break;
		}
	}

	for(var i=0; i<hMPlatforms.length; i++){
		if( hittest(pc, hMPlatforms[i]) ){
			if(fallSpeed<0){
				pc.style.top = parseInt(hMPlatforms[i].style.top) + parseInt(hMPlatforms[i].style.height) + 'px';
				//pc.style.top = pcDiv.style.top;
				fallSpeed = -1;
			}
			else{
				pc.style.top = parseInt(hMPlatforms[i].style.top) - parseInt(pc.style.height) + 'px';
				//pc.style.top = pcDiv.style.top;
					if(hMPRight[i]){
						var sideHit = false;

						pc.style.left = parseInt(pc.style.left) - 5 + 'px';
						
						for(var j=0; j<platforms.length; j++){
							if( hittest(pc, platforms[j]) ) sideHit = true;
						}
						for (var j=0; j<hMPlatforms.length; j++){
							if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
						}
						pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						
						for(var j=0; j<platforms.length; j++){
							if( hittest(pc, platforms[j]) ) sideHit = true;
						}
						for (var j=0; j<hMPlatforms.length; j++){
							if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
						}
						pc.style.left = parseInt(pc.style.left) - 5 + 'px';

						if(! sideHit){
							platformDiv.style.left = parseInt(platformDiv.style.left) - 5 + 'px';
						}
						else{
							platformDiv.style.left = parseInt(platformDiv.style.left) + 0 + 'px';
						}
					}
					else{

						var sideHit = false;

						pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						
						for(var j=0; j<platforms.length; j++){
							if( hittest(pc, platforms[j]) ) sideHit = true;
						}
						for (var j=0; j<hMPlatforms.length; j++){
							if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
						}
						pc.style.left = parseInt(pc.style.left) - 5 + 'px';

						pc.style.left = parseInt(pc.style.left) - 5 + 'px';

						for(var j=0; j<platforms.length; j++){
							if( hittest(pc, platforms[j]) ) sideHit = true;
						}
						for (var j=0; j<hMPlatforms.length; j++){
							if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
						}
						pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						if(! sideHit){
							platformDiv.style.left = parseInt(platformDiv.style.left) + 5 + 'px';
						}
						else{
							platformDiv.style.left = parseInt(platformDiv.style.left) - 0 + 'px';
						}
					}
				}
				

				if(upArrowDown) {
					fallSpeed = -25;
					// document.getElementById('sndLand').currentTime = 0;
					// document.getElementById('sndLand').volume = 0.1;
					// document.getElementById('sndLand').play();
				} 
				else{
					fallSpeed = 0;
				}
			
		}
	}
	for(var i=0; i<vMPlatforms.length; i++){
		if( hittest(pc, vMPlatforms[i]) ){
			if(fallSpeed<0){
				fallSpeed = -1;
				if(vMPUp[i]){
					pc.style.top = parseInt(vMPlatforms[i].style.top) + parseInt(vMPlatforms[i].style.height) - parseInt(vMPlatforms[i].speed) + 'px';
				}
				else{
					pc.style.top = parseInt(vMPlatforms[i].style.top) + parseInt(vMPlatforms[i].style.height) + parseInt(vMPlatforms[i].speed) + 'px';
				}
			}
			else{
				vMPlatforms[i].style.top = parseInt(vMPlatforms[i].style.top) - vMPlatforms[i].speed + 'px';
				if(vMPlatforms[i].speed<0){
					vMPUp[i] = true;
				}
				else{
					vMPUp[i] = false;
				}

				if(parseInt(vMPlatforms[i].style.top) >= vMPlatforms[i].max){
					vMPlatforms[i].speed *= -1;
					vMPlatforms[i].style.top = vMPlatforms[i].max + 'px';
					vMPUp[i] = false;
				}
				if (parseInt(vMPlatforms[i].style.top) <= vMPlatforms[i].min){
					vMPlatforms[i].speed *= -1;
					vMPlatforms[i].style.top = vMPlatforms[i].min + 'px';
					vMPUp[i] = true;
				}
				pc.style.top = parseInt(vMPlatforms[i].style.top) - parseInt(pc.style.height) + 'px';
				//pc.style.top = pcDiv.style.top;
					if(vMPUp[i]){
						// platformDiv.style.top = parseInt(platformDiv.style.top) - 5 +'px';
						// var sideHit = false;

						// pc.style.left = parseInt(pc.style.left) - 5 + 'px';
						
						// for(var j=0; j<platforms.length; j++){
						// 	if( hittest(pc, platforms[j]) ) sideHit = true;
						// }
						// for (var j=0; j<hMPlatforms.length; j++){
						// 	if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
						// }
						// for (var j=0; j<vMPlatforms.length; j++){
						// 	if( hittest(pc, vMPlatforms[j]) ) sideHit = true;
						// }
						// pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						// pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						
						// for(var j=0; j<platforms.length; j++){
						// 	if( hittest(pc, platforms[j]) ) sideHit = true;
						// }
						// for (var j=0; j<hMPlatforms.length; j++){
						// 	if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
						// }
						// for (var j=0; j<vMPlatforms.length; j++){
						// 	if( hittest(pc, vMPlatforms[j]) ) sideHit = true;
						// }
						// pc.style.left = parseInt(pc.style.left) - 5 + 'px';
					}
					else{
						//platformDiv.style.top = parseInt(platformDiv.style.top) + 5 + 'px';
					// 	var sideHit = false;

					// 	pc.style.left = parseInt(pc.style.left) + 5 + 'px';

						
					// 	for(var j=0; j<platforms.length; j++){
					// 		if( hittest(pc, platforms[j]) ) sideHit = true;
					// 	}
					// 	for (var j=0; j<hMPlatforms.length; j++){
					// 		if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
					// 	}
					// 	pc.style.left = parseInt(pc.style.left) - 5 + 'px';

					// 	pc.style.left = parseInt(pc.style.left) - 5 + 'px';

					// 	for(var j=0; j<platforms.length; j++){
					// 		if( hittest(pc, platforms[j]) ) sideHit = true;
					// 	}
					// 	for (var j=0; j<hMPlatforms.length; j++){
					// 		if( hittest(pc, hMPlatforms[j]) ) sideHit = true;
					// 	}
					// 	pc.style.left = parseInt(pc.style.left) + 5 + 'px';

					// 	if(! sideHit){
					// 		platformDiv.style.left = parseInt(platformDiv.style.left) + 5 + 'px';
					// 	}
					// 	else{
					// 		platformDiv.style.left = parseInt(platformDiv.style.left) - 0 + 'px';
					// 	}
					// }
				}
				

				if(upArrowDown) {
					fallSpeed = -25;
					// document.getElementById('sndLand').currentTime = 0;
					// document.getElementById('sndLand').volume = 0.1;
					// document.getElementById('sndLand').play();
				} 
				else{
					fallSpeed = 0;
				}
			}
		}
		else{
			vMPlatforms[i].style.top = parseInt(vMPlatforms[i].style.top) - vMPlatforms[i].speed + 'px';
			if(vMPlatforms[i].speed<0){
				vMPUp[i] = true;
			}
			else{
				vMPUp[i] = false;
			}

			if(parseInt(vMPlatforms[i].style.top) >= vMPlatforms[i].max){
				vMPlatforms[i].speed *= -1;
				vMPlatforms[i].style.top = vMPlatforms[i].max + 'px';
				vMPUp[i] = false;
			}
			if (parseInt(vMPlatforms[i].style.top) <= vMPlatforms[i].min){
				vMPlatforms[i].speed *= -1;
				vMPlatforms[i].style.top = vMPlatforms[i].min + 'px';
				vMPUp[i] = true;
			}
		}
	}
	if(parseInt(pc.style.top)<200){
		platformDiv.style.top = parseInt(pc.style.top) + 200 + 'px'; 
	}
	else{
		platform.style.top = 0 + 'px';
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

						// if(!document.getElementById('music1').paused){
						// 	document.getElementById('music1').volume = 0;
						// }
						// if(!document.getElementById('music2').paused){
						// 	document.getElementById('music2').volume = 0;
						// }
						// if(!document.getElementById('music3').paused){
						// 	document.getElementById('music3').volume = 0;
						// }
						// if(!document.getElementById('sndLand').paused){
						// 	document.getElementById('sndLand').volume = 0;
						// }
						// if(!document.getElementById('sndDie').paused){
						// 	document.getElementById('sndDie').volume = 0;
						// }
						// if(!document.getElementById('get1').paused){
						// 	document.getElementById('get1').volume = 0;
						// }
						// if(!document.getElementById('get2').paused){
						// 	document.getElementById('get2').volume = 0;
						// }
						// if(!document.getElementById('get3').paused){
						// 	document.getElementById('get3').volume = 0;
						// }
						// if(document.getElementById('music1').volume==0){
						// 	document.getElementById('music1').pause();
						// }
						// if(document.getElementById('music2').volume==0){
						// 	document.getElementById('music2').pause();
						// }
						// if(document.getElementById('music3').volume==0){
						// 	document.getElementById('music3').pause();
						// }
						// if(document.getElementById('sndLand').volume==0){
						// 	document.getElementById('sndLand').pause();
						// }
						// if(document.getElementById('sndDie').volume==0){
						// 	document.getElementById('sndDie').pause();
						// }
						// if(document.getElementById('get1').volume==0){
						// 	document.getElementById('get1').pause();
						// }
						// if(document.getElementById('get2').volume==0){
						// 	document.getElementById('get2').pause();
						// }
						// if(document.getElementById('get3').volume==0){
						// 	document.getElementById('get3').pause();
						// }
					}
				}
			});

			document.addEventListener('keyup', function(event){
				if(event.keyCode==37) leftArrowDown = false;
				if(event.keyCode==39) rightArrowDown = false;
				if(event.keyCode==38) upArrowDown = false;
				if(event.keyCode==32) spaceBarDown = false;
			});



