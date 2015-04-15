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
							//pc.style.top = pcDiv.style.top;
							fallSpeed*= -1;
						}
						else{
							pc.style.top = parseInt(platforms[i].style.top) - parseInt(pc.style.height) + 'px';
							//pc.style.top = pcDiv.style.top;
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
							//pc.style.top = pcDiv.style.top;
							fallSpeed*= -1;
						}
						else{
							pc.style.top = parseInt(movingPlatforms[i].style.top) - parseInt(pc.style.height) + 'px';
							//pc.style.top = pcDiv.style.top;
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