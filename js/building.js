class Building {
	constructor (x, y, name, type, cost, value, storage, description) {
		this.x = x;
		this.y = y;
		this.name = name;
		this.type = type;
		this.cost = cost;
		this.value = value;
		this.storage = storage;
		this.burger = document.querySelector("burger");
		this.description = description;
		this.supVal = localStorage[storage] > 1000 ? 200:
						localStorage[storage] > 400 ? 100:
				      	localStorage[storage] > 350 ? 50:
			          	localStorage[storage] > 300 ? 10:
				      	localStorage[storage] > 200 ? 5:
				      	localStorage[storage] > 100 ? 3:
				        localStorage[storage] > 50 ? 2:1.15;
		this.multiplyer = localStorage[storage] > 1000 ? 1.00001:
						localStorage[storage] > 400 ? 1.0001:
				        localStorage[storage] > 350 ? 1.001:
			            localStorage[storage] > 300 ? 1.005:
				        localStorage[storage] > 200 ? 1.01:
				        localStorage[storage] > 100 ? 1.04:
				        localStorage[storage] > 50 ? 1.06:1.07;
		localStorage[this.storage] = localStorage[this.storage] || 0;
		localStorage.score = localStorage.score || 0;
		this.draw();
		this.click = 0;
		this.auto = 0;
		this.price;
		setInterval(() => {
			if (this.type === "click") {
				this.auto = 0; 
				this.click = localStorage[this.storage] * (this.value * (Math.pow(1.07, localStorage[this.storage]))/2);
				this.nextClick = (Number(localStorage[this.storage]) + 1) * (this.value * (Math.pow(1.07, Number(localStorage[this.storage]) + 1))/2);
			} else if (this.type === "auto") {
				this.click = 0; 
				this.auto = localStorage[this.storage] * (this.value * (Math.pow(1.07, localStorage[this.storage]))/2);
				this.nextAuto = (Number(localStorage[this.storage]) + 1) * (this.value * (Math.pow(1.07, Number(localStorage[this.storage]) + 1))/2);
			}
			this.price = (Number(localStorage[this.storage]) + 1) * (this.cost * (Math.pow(1.07, Number(localStorage[this.storage]) + 1))/2);
		});	
	}

	draw () {
		this.div = document.createElement("div");
		this.div.className = 'build';
		this.div.style.display = "none";

		this.imag = document.createElement("div");
		this.imag.style.backgroundImage = "url(Images/spritesheet.png)";
		this.imag.className = 'build-icon';
		this.imag.style.backgroundPosition = -this.x * 64 + "px " + -this.y * 64 + "px";
		this.imag.style.filter = "brightness(0)"
		this.div.appendChild(this.imag);

		this._name = document.createElement("div");
		this._name.innerHTML = "?????";
		this._name.className = 'namme';
		this.div.appendChild(this._name);

		this.bought = document.createElement("span");
		this.bought.className = 'bought';
		this.div.appendChild(this.bought);

		this.buy = document.createElement("button");
		this.buy.className = 'buy';	

		this.div.appendChild(this.buy);
		
		this.extras = document.createElement("button");
		this.extras.className = "extras";
		this.extras.style.display = "none";

		this.extrasList = document.createElement("div");
		this.extrasList.className = "extras-menu";

		this.extrasList.onclick = () => {
			this.extrasList.style.top = "-100%";
			this.extrasList.style.opacity = 0;
		};
		
		this.extras.onclick = () => {
			this.extrasList.style.top = 0;
			this.extrasList.style.opacity = 0.8;
		};

		this.div.appendChild(this.extras);
		this.div.appendChild(this.extrasList);

		this.store = document.getElementById('store-box-wrapper');
		this.store.appendChild(this.div);
		

		setInterval(() => {
			if(localStorage.score >= this.cost/4) {
				localStorage[this.storage+"_1"] = "true";
			} else if(localStorage.score >= this.cost/200) {
				localStorage[this.storage+"_2"] = "true";
			}
			if(localStorage[this.storage+"_1"] === "true") {
				this._name.innerHTML = this.name;
				this.imag.style.filter = "brightness(1)";
				this.div.style.display = "block";
				this.extras.style.display = "block";
			}
			if(localStorage[this.storage+"_2"] === "true") {
				this.div.style.display = "block";
			}

			this.buy.innerHTML = "Cost: " + bigNum(this.price,2,true);
			if (this.type === "click") {
				this.extrasList.innerHTML = "<span class='titillo'>"+this.name+"</span> "+
				"<span class='dmg'>bpc: "+bigNum(this.click,2,true)+" Next: "+bigNum(this.nextClick,2,true)+"</span>"+
				"<p>"+this.description+"</p>";

				if(localStorage.score >= this.price) {
					this.buy.onclick = () => {
						localStorage[this.storage] = Number(localStorage[this.storage]) + 1;
						localStorage.score = localStorage.score - this.price;
					};
					this.buy.disabled = false;
				} else {
					this.buy.disabled = true;
				}
			} else if (this.type === "auto") {
				this.extrasList.innerHTML = "<span class='titillo'>"+this.name+"</span> "+
				"<span class='dmg'>bps: "+bigNum(this.auto,2,true)+" Next: "+bigNum(this.nextAuto,2,true)+"</span>"+
				"<p>"+this.description+"</p>";

				if(localStorage.score >= this.price) {
					this.buy.onclick = () => {
						localStorage[this.storage] = Number(localStorage[this.storage]) + 1;
						localStorage.score = localStorage.score - this.price;
					};
					this.buy.disabled = false;
				} else {
					this.buy.disabled = true;
				}
			}
			
			this.bought.innerHTML = 'Owned: '+ bigNum(localStorage[this.storage],2,true);
		});
	}
}