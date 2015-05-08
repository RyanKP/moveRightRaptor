function makeLevel(){
	if(level==2){

		// document.getElementById('sndTick').pause();
		// document.getElementById('music1').pause();
		// document.getElementById('music3').pause();
		// document.getElementById('music1').volume = 0.1;
		// document.getElementById('music1').currentTime = 0;
		// document.getElementById('music1').loop = true;
		// document.getElementById('music1').play();

		time = 60;

		document.getElementById('stat').innerHTML= "Time " + time;
		npc_prince.style.left = '3000px';
		npc_prince.style.top = '340px';

		addPlatform(100, 200, 420, 20);
		//addHMPlatform(100, -5, 20, 420, 50, 200);
		addPlatform(100, -5, 20, 420);
		addPlatform(100, 380, 115, 20);
		addPlatform(550, 200, 150, 20);
		addHMPlatform(550, 380, 100, 50, 215, 3000);
		addPlatform(480, 360, 20, 50);
		addPlatform(880, 360, 20, 50);
		addPlatform(1200, 340, 20, 80);
		addPlatform(1300, 200, 20, 220);
		addPlatform(1400, 340, 20, 80);
		addPlatform(1450, 0, 20, 300);
		addPlatform(1500, 300, 20, 200);
		addPlatform(1600, 200, 20, 500);
		addPlatform(1750, 300, 20, 300);
		addPlatform(1900, 340, 20, 80);
		addPlatform(2050, 0, 20, 300);
		addPlatform(2200, 300, 20, 200);
		addPlatform(2300, 200, 20, 500);
		addPlatform(2450, 300, 20, 300);
		addPlatform(550, 280, 150, 20);
		addPlatform(2900, 380, 150, 20);

		addSpike(625, 300);
		addSpike(625, 320);
		addSpike(625, 340);
		addSpike(880, 340);
		addSpike(1600, 180);
		addSpike(1750, 280);
		addSpike(2300, 180);
		addSpike(2450, 280);



	}

	else if(level==1){
		// document.getElementById('music1').pause();
		// document.getElementById('music2').pause();
		// document.getElementById('sndTick').pause();

		// document.getElementById('music2').currentTime = 0;
		// document.getElementById('music2').loop = true;
		// document.getElementById('music2').volume = 0.1;

		// if(paused){
		// 	document.getElementById('music2').pause();
		// }
		// else{
		// 	document.getElementById('music2').play();
		// }


		time = 75;
		document.getElementById('stat').innerHTML= "Time " + time;
		npc_prince.style.left = '2500px';
		npc_prince.style.top = '340px';

		addPlatform(100, 100, 50, 20); //lol.
		addVMPlatform(200, 100, 50, 20, 0, 200);
		addPlatform(100, 260, 300, 20);
		addPlatform(100, 380, 1100, 100);
		addPlatform(750, 300, 20, 40);
		addPlatform(850, 250, 20, 90);
		addPlatform(950, 200, 20, 140);
		addPlatform(1050, 150, 20, 190);
		addPlatform(1155, 90, 40, 20);
		addPlatform(1180, 90, 20, 305);
		addPlatform(1180, 265, 40, 20);
		addPlatform(1300, 225, 100, 20);
		addPlatform(1350, 75, 100, 20);
		addPlatform(1580, 230, 20, 50);
		addPlatform(1700, 95, 100, 20);
		addPlatform(2040, 115, 70, 20);
		addHMPlatform(1190, 380, 50, 40, 1180, 2200);
		addPlatform(2330, 80, 20, 230)
		addPlatform(2330, 290, 140, 30);
		addPlatform(2380, -500, 20, 750);
		addPlatform(2380, 200, 40, 20);
		addPlatform(2450, 100, 20, 250);
		addPlatform(2450, 380, 250, 100);

		addSpike(860, 230);
		addSpike(860, 210);
		addSpike(1040, 130);
		addSpike(1040, 110);
		addSpike(1380, 205);
		addSpike(1380, 185);
		addSpike(1380, 165);
		addSpike(1380, 145);
		addSpike(1380, 125);
		addSpike(1380, 105);

		addSpike(1450, 75);

		addSpike(1680, 95);


		addSpike(2680, 360);
		addSpike(2680, 340);
		addSpike(2680, 320);
		addSpike(2680, 300);
		addSpike(2680, 280);
		addSpike(2680, 260);
		addSpike(2680, 240);
		addSpike(2680, 220);
		addSpike(2680, 200);
		addSpike(2680, 180);
		addSpike(2680, 160);
		addSpike(2680, 140);
		addSpike(2680, 120);
		addSpike(2680, 100);
		addSpike(2680, 80);
		addSpike(2680, 60);
		addSpike(2680, 40);
		addSpike(2680, 20);
		addSpike(2680, 0);
	}

	else if (level==3){
		// document.getElementById('music2').pause();
		// document.getElementById('music3').pause();
		// document.getElementById('sndTick').pause();

		// document.getElementById('music1').play();
		// document.getElementById('music1').currentTime = 0;
		// document.getElementById('music1').loop = false;
		// document.getElementById('music1').onended = function sleep(){
		// 	document.getElementById('music1').pause(); 
		// 	document.getElementById('music3').currentTime = 0; 
		// 	document.getElementById('music3').play();
		// 	document.getElementById('music3').volume = 0.1;
		// 	document.getElementById('music3').loop = true;
		// 	document.getElementById('music3').volume = 0.1;
		// }

		time = 90;
		document.getElementById('stat').innerHTML= "Time " + time;
		npc_prince.style.left = '2000px';
		npc_prince.style.top = '340px';

		addPlatform(0, 380, 1000, 100);
		addPlatform(0, 0, 20, 400);
		addPlatform(900, 300, 100, 100);
		addPlatform(1100, 300, 50, 100);
		addPlatform(1300, 300, 100, 100);
		addHMPlatform(1600, 390, 50, 20, 1600, 2000);
		addPlatform(1950, 380, 100, 20);

		//puzzle
		addPlatform(1500, 0, 10, 280);
		addPlatform(1500, 240, 30, 20);
		addPlatform(1490, 320, 110, 20);
		addPlatform(1500, 120, 30, 20);
		addPlatform(1530, 180, 40, 20);
		addPlatform(1530, 60, 40, 20);
		addPlatform(1500, -10, 420, 20);
		addPlatform(1560, 60, 10, 80);
		addPlatform(1560, 180, 10, 150);
		addPlatform(1560, 120, 40, 20);
		addPlatform(1560, 180, 10, 150);
		addPlatform(1560, 210, 40, 20);
		addPlatform(1590, 0, 10, 80);
		addPlatform(1590, 60, 40, 20);
		addPlatform(1590, 120, 10, 50);
		addPlatform(1590, 150, 40, 20);
		addPlatform(1590, 270, 10, 60);
		addPlatform(1590, 270, 100, 20);
		addPlatform(1620, 60, 10, 100);
		addPlatform(1620, 90, 40, 20);
		addPlatform(1620, 210, 90, 20);
		addPlatform(1620, 330, 310, 20);
		addPlatform(1650, 150, 40, 20);
		addPlatform(1680, 60, 10, 220);
		addPlatform(1680, 60, 100, 20);
		addPlatform(1710, 120, 10, 40);
		addPlatform(1710, 270, 10, 70);
		addPlatform(1710, 150, 70, 20);
		addPlatform(1710, 270, 70, 20);
		addPlatform(1770, 60, 10, 50);
		addPlatform(1770, 150, 10, 130);
		addPlatform(1770, 90, 40, 20);
		addPlatform(1800, 0, 10, 50);
		addPlatform(1800, 40, 40, 10);
		addPlatform(1800, 90, 10, 50);
		addPlatform(1800, 120, 40, 20);
		addPlatform(1800, 240, 10, 100);
		addPlatform(1800, 240, 40, 20);
		addPlatform(1830, 40, 10, 40);
		addPlatform(1830, 60, 70, 20);
		addPlatform(1830, 120, 10, 50);
		addPlatform(1830, 150, 40, 20);
		addPlatform(1860, 150, 10, 70);
		addPlatform(1860, 180, 40, 20);
		addPlatform(1830, 240, 10, 50);
		addPlatform(1830, 270, 40, 20);
		addPlatform(1890, 120, 40, 20);
		addPlatform(1890, 240, 40, 20);
		addPlatform(1890, 240, 10, 40);
		addPlatform(1920, 0, 10, 340);

		addSpike(1570, 300);

		addSpike(1600, 130);

		addSpike(1640, 70);

		addSpike(1660, 170);
		addSpike(1660, 190);

		addSpike(1720, 290);
		addSpike(1720, 310);

		addSpike(1750, 170);
		addSpike(1750, 190);
		addSpike(1750, 210);
		addSpike(1750, 230);
		addSpike(1750, 250);

		addSpike(1810, 20);
		addSpike(1810, 260);

		addSpike(1900, 260);

		addSpike(2030, 360);
		addSpike(2030, 340);
		addSpike(2030, 320);
		addSpike(2030, 300);
		addSpike(2030, 280);
		addSpike(2030, 260);
		addSpike(2030, 240);
		addSpike(2030, 220);
		addSpike(2030, 200);
		addSpike(2030, 180);
		addSpike(2030, 160);
		addSpike(2030, 140);
		addSpike(2030, 120);
		addSpike(2030, 100);
		addSpike(2030, 80);
		addSpike(2030, 60);
		addSpike(2030, 40);
		addSpike(2030, 20);
		addSpike(2030, 0);

	}

	else if(level==4){
		// document.getElementById('music1').pause();
		// document.getElementById('music2').pause();
		// document.getElementById('sndTick').pause();

		// document.getElementById('music2').currentTime = 0;
		// document.getElementById('music2').loop = true;
		// document.getElementById('music2').volume = 0.1;

		// if(paused){
		// 	document.getElementById('music2').pause();
		// }
		// else{
		// 	document.getElementById('music2').play();
		// }


		time = 1000;
		document.getElementById('stat').innerHTML= "Time " + time;
		npc_prince.style.left = '2500px';
		npc_prince.style.top = '340px';

		platformDiv.style.left = '0px';
		platformDiv.style.top = '1150px';


		addPlatform(0, 100, 500, 1000);
		addPlatform(0, 1000, 50, 205);
		addPlatform(0, 1200, 500, 50);
		addPlatform(498, 1175, 502, 50);
		addPlatform(750, 1075, 100, 50);
		

	}}