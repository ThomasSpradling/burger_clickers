<!DOCTYPE html>
<html>
<head>
	<title>Burger Game | Thomas Spradling</title>
	<style type="text/css">
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			user-select: none;
		}
		body {
			padding: 20px;
			font-family: arial, sans-serif;
			overflow: hidden;
			background: blue url(Images/flag.gif) no-repeat;
			background-size: 130%;
		}
		::-webkit-scrollbar {
			background: linear-gradient(
				to right,
				#d19e7b 0%,
				rgb(255, 227, 178) 10%,
				#d19e7b 10%,
				rgb(255, 227, 178)
			);
		}
		::-webkit-scrollbar-thumb {
			background: linear-gradient(
				to right,
				transparent 10%,
				#d19e7b 10%,
				#a5845c	
			);
			box-shadow: 3.5px 2px 5px rgba(0,0,0,0.5);
		}
		::-webkit-scrollbar-thumb:active {
			background: linear-gradient(
				to right,
				transparent 10%,
				#a5845c 10%,
				#896d4b	
			);
			box-shadow: 3.5px 2px 5px rgba(0,0,0,0.7);
		}
		#score-box {
			width: 100%;
			height: 50px;
			background: linear-gradient(
				white 0%,
				rgb(255, 227, 178) 50%,
				#d19e7b 50%,
				rgb(255, 227, 178)
			);
			display: flex;
			margin: auto;
			border: 2px solid #853;
			border-radius: 20%;
			position: relative;
			justify-content: center;
			align-items: center;
		}
		#score-box:before {
			content: "";
			position: absolute;
			left: 0;
			top: 7.5px;
			border: 15px solid transparent;
			border-left-color: #853;
		}
		#score-box:after {
			content: "";
			position: absolute;
			right: 0;
			top: 7.5px;
			border: 15px solid transparent;
			border-right-color: #853;
		}
		#score {
			color: white;
			font-size: 2em;
			text-shadow: 1px 1px 0 #853, -1px -1px 0 #853;
		}
		#score:after {
			content: " Burgers";
		}
		#store-box {
			position: relative;
			max-width: 450px;
			width: 500px;
			height: 75vh;
			display: block;
			margin-top: 25px;
			background: linear-gradient(
				white 0px,
				rgb(255, 227, 178) 481px,
				#853 481px,
				#853 483px,
				#d19e7b 483px,
				rgb(255, 227, 178)
			);
			border: 2px solid #853;
			border-bottom-left-radius: 20px;
			padding: 0px 0px 15px 10px;
			transition: 0.3s;
		}

		#burger {
			width: 400px;
			height: 400px;
			background: url(Images/burger.png);
			background-size: 100%;
			background-repeat: no-repeat;
			position: absolute;
			left: 55%;
			top: 150px;
			transition: all 0.3s, transform 0s;
			cursor: pointer;
		}

		#burger:active {
			transform: scale(0.9);
		}
		@media screen and (max-width: 900px){
			#store-box {
				width: 100%;
				min-width: 500px;
				height: 150px;
				max-width: none;
				background: linear-gradient(
					white 0px,
					rgb(255, 227, 178) 131px,
					#853 131px,
					#853 133px,
					#d19e7b 133px,
					rgb(255, 227, 178)
				);
			}

			#burger {
				left: calc(50% - 200px);
				top: 250px;
			}
		}
		.build {
			background-color: #d19e7b;
			width: calc(100% - 10px);
			height: 80px;
			margin: 10px 0;
			border-bottom-left-radius: 10px;
			overflow: hidden;
		}
		#store-box-wrapper {
			overflow-y: scroll;
			height: 100%;
		}
		.build-icon{
			position: relative;
			left: 10px;
			top: 4px;
			width: 64px;
			height: 64px;
			display: block;
		}
		.namme {
			position: relative;
			left: 90px;
			color: white;
			width: 90%;
			top: -80%;
			font-size: 1.5em;
			display: block;
			text-shadow: 1px 1px 0 #853, -1px -1px 0 #853;
		}
		.buy {
			position: relative;
			outline: none;
			left: 90px;
			color: white;
			width: 200px;
			height: 30px;
			border: 1px solid #853;
			background: linear-gradient(
				white,
				green 50%,
				darkgreen 60%,
				lime
			);
			top: -100%;
			font-size: 1.5em;
			display: block;
			cursor: pointer;
		}
		.buy:active {
			background: linear-gradient(
				rgba(0,0,0,0.7),
				darkgreen 10%,
				lime,
				rgba(0,0,0,0.6)
			);*
			font-size: 1.4em;
		}
		.buy:disabled {
			color: red;
			background: linear-gradient(
				rgba(0,0,0,0.7),
				rgb(76,76,76) 10%,
				rgb(182,182,182),
				rgba(0,0,0,0.6)
			);
		}
		.bought {
			position: relative;
			left: 300px;
			color: #853;
			width: 90%;
			top: -60%;
			font-size: 1em;
			display: block;
			text-shadow: -1px 1px 0 white;
		}

	</style>
</head>
<body>
	<audio autoplay loop>
	  <source src="krustykrab.m4a" type="audio/mpeg">
	  	<div class="audio-alt">
	    	That sucks, that webpage is a lot cooler when you can listen to the noice x-files music along with all else.
		</div>
	</audio>
	<div id="score-box"><div id="score">100</div></div>
	<div id="store-box">
		<div id="store-box-wrapper"></div>
	</div>
	<div id="burger">
	</div>
	<div id="click"></div>
	<span id="auto"></span>
	<script type="text/javascript">

		function bigNum(number, maxPlaces, small) {
		  	number = Math.floor(Number(number));
		  	var abbr;
		  	var rounded = 0;
		  	if(number >= 1e1008) {
		    	if(small) {
		  			abbr = 'Q<sub>3</sub>';
		  		} else {
		  			abbr = ' Quinquatrigintillion';
		  		}
		    	rounded = number / 1e108;
		  	}
		  	else if(number >= 1e105) {
		    	if(small) {
		  			abbr = 'q<sub>3</sub>';
		  		} else {
		  			abbr = ' Quattuortrigintillion';
		  		}
		    	rounded = number / 1e105;
		  	}
		  	else if(number >= 1e102) {
		    	if(small) {
		  			abbr = 'Q<sub>3</sub>';
		  		} else {
		  			abbr = ' Trestrigintillion';
		  		}
		    	rounded = number / 1e102;
		  	}
		  	else if(number >= 1e100) {
		    	if(small) {
		  			abbr = 'G';
		  		} else {
		  			abbr = ' Googol';
		  		}
		    	rounded = number / 1e42;
		  	}
		  	else if(number >= 1e99) {
		    	if(small) {
		  			abbr = 'D<sub>3</sub>';
		  		} else {
		  			abbr = ' Duotrigintillion';
		  		}
		    	rounded = number / 1e99;
		  	}
		  	else if(number >= 1e96) {
		    	if(small) {
		  			abbr = 'U<sub>3</sub>';
		  		} else {
		  			abbr = ' Untrigintillion';
		  		}
		    	rounded = number / 1e96;
		  	}
		  	else if(number >= 1e93) {
		    	if(small) {
		  			abbr = 'Trig';
		  		} else {
		  			abbr = ' Trigintillion';
		  		}
		    	rounded = number / 1e93;
		  	}
		  	else if(number >= 1e90) {
		    	if(small) {
		  			abbr = 'N<sub>2</sub>';
		  		} else {
		  			abbr = ' Novemvigintillion';
		  		}
		    	rounded = number / 1e90;
		  	}
		  	else if(number >= 1e87) {
		    	if(small) {
		  			abbr = 'O<sub>2</sub>';
		  		} else {
		  			abbr = ' Octovigintillion';
		  		}
		    	rounded = number / 1e87;
		  	}
		  	else if(number >= 1e84) {
		    	if(small) {
		  			abbr = 'S<sub>2</sub>';
		  		} else {
		  			abbr = ' Septemvigintillion';
		  		}
		    	rounded = number / 1e84;
		  	}
		  	else if(number >= 1e81) {
		    	if(small) {
		  			abbr = 's<sub>2</sub>';
		  		} else {
		  			abbr = ' Sesvigintillion';
		  		}
		    	rounded = number / 1e81;
		  	}
		  	else if(number >= 1e78) {
		    	if(small) {
		  			abbr = 'Q<sub>2</sub>';
		  		} else {
		  			abbr = ' Quinquavigintillion';
		  		}
		    	rounded = number / 1e78;
		  	}
		  	else if(number >= 1e75) {
		    	if(small) {
		  			abbr = 'q<sub>2</sub>';
		  		} else {
		  			abbr = ' Quattuorvigintillion';
		  		}
		    	rounded = number / 1e75;
		  	}
		  	else if(number >= 1e72) {
		    	if(small) {
		  			abbr = 'T<sub>2</sub>';
		  		} else {
		  			abbr = ' Tresvigintillion';
		  		}
		    	rounded = number / 1e72;
		  	}
		  	else if(number >= 1e69) {
		    	if(small) {
		  			abbr = 'D<sub>2</sub>';
		  		} else {
		  			abbr = ' Duovigintillion';
		  		}
		    	rounded = number / 1e69;
		  	}
		  	else if(number >= 1e66) {
		    	if(small) {
		  			abbr = 'U<sub>2</sub>';
		  		} else {
		  			abbr = ' Unvigintillion';
		  		}
		    	rounded = number / 1e66;
		  	}
		  	else if(number >= 1e63) {
		    	if(small) {
		  			abbr = 'V';
		  		} else {
		  			abbr = ' Vigintillion';
		  		}
		    	rounded = number / 1e63;
		  	}
		  	else if(number >= 1e60) {
		    	if(small) {
		  			abbr = 'N<sub>1</sub>';
		  		} else {
		  			abbr = ' Novendecillion';
		  		}
		    	rounded = number / 1e60;
		  	}
		  	else if(number >= 1e57) {
		    	if(small) {
		  			abbr = 'O<sub>1</sub>';
		  		} else {
		  			abbr = ' Octodecillion';
		  		}
		    	rounded = number / 1e57;
		  	}
		  	else if(number >= 1e54) {
		    	if(small) {
		  			abbr = 'S<sub>1</sub>';
		  		} else {
		  			abbr = ' Septendecillion';
		  		}
		    	rounded = number / 1e54;
		  	}
		  	else if(number >= 1e51) {
		    	if(small) {
		  			abbr = 's<sub>1</sub>';
		  		} else {
		  			abbr = ' Sedecillion';
		  		}
		    	rounded = number / 1e51;
		  	}
		  	else if(number >= 1e48) {
		    	if(small) {
		  			abbr = 'Q<sub>1</sub>';
		  		} else {
		  			abbr = ' Quinquadecillion';
		  		}
		    	rounded = number / 1e48;
		  	}
		  	else if(number >= 1e45) {
		    	if(small) {
		  			abbr = 'q<sub>1</sub>';
		  		} else {
		  			abbr = ' Quattuordecillion';
		  		}
		    	rounded = number / 1e45;
		  	}
		  	else if(number >= 1e42) {
		    	if(small) {
		  			abbr = 'T<sub>1</sub>';
		  		} else {
		  			abbr = ' Tredecillion';
		  		}
		    	rounded = number / 1e42;
		  	}
		  	else if(number >= 1e39) {
		    	if(small) {
		  			abbr = 'D<sub>1</sub>';
		  		} else {
		  			abbr = ' Duodecillion';
		  		}
		    	rounded = number / 1e39;
		  	}
		  	else if(number >= 1e36) {
		    	if(small) {
		  			abbr = 'U<sub>1</sub>';
		  		} else {
		  			abbr = ' Undecillion';
		  		}
		    	rounded = number / 1e36;
		  	}
		  	else if(number >= 1e33) {
		    	if(small) {
		  			abbr = 'D';
		  		} else {
		  			abbr = ' Decillion';
		  		}
		    	rounded = number / 1e33;
		  	}
		  	else if(number >= 1e30) {
		    	if(small) {
		  			abbr = 'N';
		  		} else {
		  			abbr = ' Nonillion';
		  		}
		    	rounded = number / 1e30;
		  	}
		  	else if(number >= 1e27) {
		    	if(small) {
		  			abbr = 'O';
		  		} else {
		  			abbr = ' Octillion';
		  		}
		    	rounded = number / 1e27;
		  	}
		  	else if(number >= 1e24) {
		    	if(small) {
		  			abbr = 'S';
		  		} else {
		  			abbr = ' Septillion';
		  		}
		    	rounded = number / 1e24;
		  	}
		  	else if(number >= 1e21) {
		    	if(small) {
		  			abbr = 's';
		  		} else {
		  			abbr = ' Sextillion';
		  		}
		    	rounded = number / 1e21;
		  	}
		  	else if(number >= 1e18) {
		    	if(small) {
		  			abbr = 'Q';
		  		} else {
		  			abbr = ' Quintillion';
		  		}
		    	rounded = number / 1e18;
		  	}
		  	else if(number >= 1e15) {
		    	if(small) {
		  			abbr = ' q';
		  		} else {
		  			abbr = ' Quadrillion';
		  		}
		    	rounded = number / 1e15;
		  	}
		  	else if(number >= 1e12) {
		    	if(small) {
		  			abbr = 'T';
		  		} else {
		  			abbr = ' Trillion';
		  		}
		    	rounded = number / 1e12;
		  	}
		  	else if(number >= 1e9) {
		    	if(small) {
		  			abbr = 'B';
		  		} else {
		  			abbr = ' Billion';
		  		}
		    	rounded = number / 1e9;
		  	}
		  	else if(number >= 1e6) {
		    	if(small) {
		  			abbr = 'M';
		  		} else {
		  			abbr = ' Million';
		  		}
		    	rounded = number / 1e6;
		  	}
		  	else if(number >= 1e3) {
		    	if(small) {
		  			abbr = 'K';
		  		} else {
		  			abbr = ' Thousand';
		  		}
		    	rounded = number / 1e3;
		  	}
		  	else {
		    	if(small) {
		  			abbr = '';
		  		} else {
		  			abbr = '';
		  		}
		    	rounded = number;
		  	}
		  	if(maxPlaces !== false) {
		    	var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$')
		    	if(test.test(('' + rounded))) {
		      		rounded = rounded.toFixed(maxPlaces);
		    	}
		  	}
		  	return rounded + abbr;
		}

		if (!localStorage.score) {
			localStorage.score = 0;
		}
		if (!localStorage.clickValue) {
			localStorage.clickValue = 1;
		}
		if (!localStorage.auto) {
			localStorage.auto = 0;
		}
		function spriteSheet() {
			let image = "Images/spriteSheet.gif";
			return image;
		}
		function addBuild(x, y, name, type, value, cost, storage) {
			setInterval(() => {
				bought.innerHTML = "Owned: " + localStorage[storage]; 
				buy.innerHTML = "Cost: " + bigNum(Math.floor(cost * Math.pow(1.15, Number(localStorage[storage]))), 2, true);

				if (localStorage["score"] >= Math.floor(cost * Math.pow(1.15, Number(localStorage[storage])))) {
					buy.disabled = false;
					if (type === "click") {
						buy.onclick = () => {
							localStorage[storage] = Number(localStorage[storage]) + 1;
							localStorage.clickValue = Number(localStorage.clickValue) + value * Math.pow(1.15, Number(localStorage[storage] - 1));
							localStorage.score = Number(localStorage.score) - Math.floor(cost * Math.pow(1.15, Number(localStorage[storage]) - 1));
						};
					} else if (type === "auto") {
						buy.onclick = () => {
							localStorage[storage] = Number(localStorage[storage]) + 1;
							localStorage.auto = Number(localStorage.auto) + (value * Math.pow(1.15, Number(localStorage[storage] - 1)))/10;
							localStorage.score = Number(localStorage.score) - Math.floor(cost * Math.pow(1.15, Number(localStorage[storage]) - 1));
						};
					}
				} else {
					buy.disabled = true;
				}
			});
			if (!localStorage[storage]) {
				localStorage[storage] = 0;
			}
			var div = document.createElement("div");
			div.className = 'build';

			var imag = document.createElement("div");
			imag.style.backgroundImage = "url(Images/spritesheet.png)";
			imag.className = 'build-icon';
			imag.style.backgroundPosition = -x * 64 + "px " + -y * 64 + "px";
			div.appendChild(imag);

			var _name = document.createElement("div");
			_name.innerHTML = name;
			_name.className = 'namme';
			div.appendChild(_name);

			var bought = document.createElement("span");
			bought.className = 'bought';
			div.appendChild(bought);

			var buy = document.createElement("button");
			buy.className = 'buy';
			div.appendChild(buy);

			var tool = document.createElement("div");
			tool.innerHTML = name;
			tool.className = 'tooltip';
			div.appendChild(tool);

			var store = document.getElementById('store-box-wrapper');
			store.appendChild(div);	
		}

		let score = document.getElementById('score');
		let burger = document.getElementById('burger');


		
		setInterval(() => {
			localStorage.click = localStorage.clickValue;
			score.innerHTML = bigNum(localStorage.score, 2, false);
			burger.onclick = () => {
				localStorage.score = Number(localStorage.score) + Number(localStorage.click);
			}
			document.getElementById('click').innerHTML = "Burgers Per Click: " + bigNum(localStorage.click, 2, false);
			document.getElementById('auto').innerHTML = "Burgers Per Second: " + bigNum(localStorage.auto * 10, 2, false);
		}, 10);

		

		setInterval(() => {
			localStorage.score = Number(localStorage.score) + Number(localStorage.auto);
		}, 100)
		addBuild(0, 0, "Burger Grill", "click" , 1, 50, "homemade");
		addBuild(1, 0, "Uncle Joe", "click", 18, 500, "uncle");
		addBuild(2, 0, "Burger Printer", "auto", 22, 2500, "printer");
		addBuild(3, 0, "Burger Farm", "auto", 245, 40000, "farm");
		addBuild(0, 1, "Burger Plantation", "click", 10000, 1e6, "plantation");
		addBuild(1, 1, "Burger Mine", "auto", 4.72e6, 2.5e7, "mine");
		addBuild(2, 1, "Burger Factory", "click", 2.82e6, 1e9, "factory");
		addBuild(3, 1, "Burger Bank", "auto", 4e9, 6.5e11, "bank");
		addBuild(0, 2, "Burger Castle", "auto", 2e10, 3.6e13, "castle");
		addBuild(1, 2, "Burger Space Station", "auto", 1.3e12, 1.8e14, "space_station");
		addBuild(1, 2, "Burger Altar", "click", 8.1e14, 9.3e17, "altar");
		addBuild(1, 2, "Burger Alchemy", "click", 8.1e23, 9.3e29, "alchemy");
		addBuild(1, 2, "Burger Universe", "click", 8.1e50, 9.3e55, "universe");
	</script>
</body>
</html>