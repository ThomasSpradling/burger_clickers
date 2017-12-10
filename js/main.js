let names = [
	"Burger Grill",
	"Uncle Burg",
	"Burger Printer",
	"Burger Farm",
	"Burger Plantation",
	"Burger Mine",
	"Burger Factory",
	"Burger Bank",
	"Burger Castle",
	"Burger Wizardry",
	"Burger Alchemy",
	"Burger Space Station",
	"Burger Altar",
	"Order of the Burger",
	"Burger Planet",
	"Burger Universe"
];
let descs = [
	"Every business starts small; why not start with a fresh new grill?",
	"He's inherited the secret family Burger recipe, but he'll give it to you for a couple of Burgers.",
	"Silicon Valley has just arrived; Burger grills are a thing of the past, it's all about printing them out now!",
	"The first step to corporate domination is attaining vertical monopolies. Get a head start by purchasing the agricultural industry.",
	"Farms are outdated, and it's time to revamp the agricultural industry with some high quality plantations. Don't worry, Burgers don't have rights.",
	"A recent mining rig has just discovered pockets of pure Burgers, created by the earth's intense pressure crushing dinosaur fossils into delicious fast food.",
	"The assembly line has just been introduced in the fast food business, and it's up to you to get them patties on a conveyor belt, stat!",
	"Occupy Wall Street with your delicious Burgers, and replace the USD with your incredible fast food. Don't worry, it's perfectly kosher...",
	"All this corporate monopolization sure does bore a person. Why not use some of that money to create a castle for yourself?",
	"Noticing your growing Burger empire, a group of wizards have visited to bestow upon you the secrets of Burger summoning. Use this wisely.",
	"Burger Scholars have recently discovered a Medieval tome of alchemy dedicated to turning elements into Burgers.",
	"The Taco Industry has threatened you with a thermonuclear food fight. It's up to you to reach space before they do.",
	"The ancient Americans have prayed to the God of Burgers for bountiful harvests during the winter time. You could learn a thing or two from such wisdom.",
	"A secret society of Burger people seek to exploit the incredible potential of Burger making. They've been kind enough to let you join their clubs, for a price.",
	"Within the Soda Way Galaxy, there exists a planet of Burgers. Just think, ANOTHER planet filled with your Burgers!",
	"Scientists have recently discovered that 100% of the Universe is made by the same atoms that are  found in burgers. Use this to your advantage."
	
];
let clickValue = [
	new Building(0,0,names[0],"click",5,1,"one",descs[0]),
	new Building(1,0,names[1],"click",250,22,"two",descs[1]),
	new Building(2,0,names[2],"auto",4000,225,"three",descs[2]),
	new Building(3,0,names[3],"auto",1e5,3725,"four",descs[3]),
	new Building(0,1,names[4],"click",2.5e6,47143,"five",descs[4]),
	new Building(1,1,names[5],"auto",1e8,7.82e5,"six",descs[5]),
	new Building(2,1,names[6],"click",6.5e9,1.701e7,"seven",descs[6]),
	new Building(3,1,names[7],"auto",4.5e11,4.607e8,"eight",descs[7]),
	new Building(0,2,names[8],"click",3.6e13,2e10,"nine",descs[8]),
	new Building(1,3,names[9],"auto",2.7e15,8.147e11,"ten",descs[9]),
	new Building(3,2,names[10],"click",3e17,4.914e13,"eleven",descs[10]),
	new Building(1,2,names[11],"auto",3.5e20,3.112e16,"twelve",descs[11]),
	new Building(2,2,names[12],"click",4.2e24,2.027e20,"thirteen",descs[12]),
	new Building(2,3,names[13],"auto",2.1e33,7.46e22,"fourteen",descs[13]),
	new Building(3,3,names[14],"click",1e50,1.3e32,"fifteen",descs[14]),
	new Building(0,3,names[15],"auto",1e68,9.655e44,"sixteen",descs[15]),
];
let clk = [
	clickValue[0].click,
	clickValue[1].click,
	clickValue[2].click,
	clickValue[3].click,
	clickValue[4].click,
	clickValue[5].click
];
let aut = [
	clickValue[0].auto,
	clickValue[1].auto,
	clickValue[2].auto,
	clickValue[3].auto,
	clickValue[4].auto,
	clickValue[5].auto
];
setInterval(() => {
	clk = [
		clickValue[0].click,
		clickValue[1].click,
		clickValue[2].click,
		clickValue[3].click,
		clickValue[4].click,
		clickValue[5].click
	];
	aut = [
		clickValue[0].auto,
		clickValue[1].auto,
		clickValue[2].auto,
		clickValue[3].auto,
		clickValue[4].auto,
		clickValue[5].auto
	];
},10);
function start() {
	startedAt = Date.now();
	requestAnimationFrame(update);
}

function update() {
	let elapsedTime = Date.now() - startedAt;
	localStorage.score = Number(localStorage.score) + Math.ceil(aut.reduce((a, b) => a + b, 0)) * elapsedTime/1000;
	start();
}
start();

setInterval(() => {
	document.querySelector("#score").innerHTML = bigNum(localStorage.score, 2, false);
	document.querySelector("#bpc").innerHTML = "Burgers/Click: " + bigNum(clk.reduce((a, b) => a + b, 0) + 1, 2, false);
	document.querySelector("#bps").innerHTML = "Burgers/Second: " + bigNum(aut.reduce((a, b) => a + b, 0), 2, false);
	document.querySelector("#burger").onclick = () => {
		localStorage.score = Number(localStorage.score) + Math.ceil(clk.reduce((a, b) => a + b, 0) + 1);
	}
}, 10);