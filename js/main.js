/**
 * Project:    Virtual Garden
 * Authors:    Group 13 (Maxton lenox, Lee Coronilia, Alice Aiba, Claira Lind)
 * Created:    March - June 2022
 * Release:    https://lcoronil.github.io/Virtual-Garden/
 *
 **/

// Intruction pop functions
let instructions = document.getElementById("instructions");

function closeInstructions() {
	instructions.classList.add("close-instructions");
}

const transition = document.getElementById("instructions");

transition.addEventListener('transitionend', function(){
	document.getElementById("instructions").style.display = "none";
})

// State of the pot variables
var flowerType = "";
var growthStage = 0;
var potIsEmpty = true;
var potIsReady = false;

// Image srcs for each plant stage
const begoniaStages = ["Beginiaseed.png", "Begoniasprout.png", "Begoniastage2.png", "Begoniastage3.png", "Begoniastage4.png", "Begoniaflower.png"]
const songbirdStages = ["Songbird_Seed.png", "Songbird_Stage_One.png", "Songbird_Stage_Two.png", "Songbird_Stage_Three.png", "Songbird_Stage_Four.png", "Songbird.png"]
const sunflowerStages = ["Sunflower_Seed.png", "Sunflower_Stage_One.png", "Sunflower_Stage_Two.png", "Sunflower_Stage_3.png", "Sunflower_Stage_Four_.png", "Sunflower.png"]
const zinniaStages = ["Zinnia_seed.png", "Zinnia_Stage_One.png", "Zinnia_Stage_Two.png", "zinniastage_3.png", "Zinnia_stage_4.png", "zinnia.png"]

// Text displays for each plant
const sunflowerText = [
	"- Plant seed 2 to 4 inches deep in soil, 12 to 24 inches apart from one another.\r\n\r\n- There are many different looking sunflower seeds because there are over 70 varieties.\r\n\r\n- You typically want to wait to plant the seeds after the last frost of the year so the cold does not kill the seed.\r\n\r\n- Water it each day and see its progress!",
	"- Ideally, sunflowers would grow best under six to eight hours of sunlight exposure a day.\r\n\r\n- Sunflower also grow the best under nutrient-rich soil, so make sure the soil is mixed with compost or other organic matter. ",
	"- If you planted a sunflower breed that averages the height of 10feet or taller, it is recommended that the sunflower is planted in a sheltered area.\r\n\r\n- The reason for this is that strong winds can tip them over and destroy the flower.\r\n\r\n- In contrast, if your breed is “short stuff” or “teddy bear” sunflower, it's possible to plant in a pot, as long as it is deep enough to allow extension of tap root.",
	"- Some common mistakes that can occur while gardening are planting too early, the pot being too small, fungal diseases, and not enough sunlight.\r\n\r\n- Sunflowers should be planted around March to May, depending on which month that averages at least 60 degrees Fahrenheit.\r\n\r\n- The pots for sunflowers should be at least 12-18inches deep for the roots to be able to grow down.\r\n\r\n- When you spot diseases like rust and powdery mildew, spray the infected leaves with garden fungicide which you can find at home improvement stores.\r\n\r\n- Lastly, make sure to water deeply but not too much so that sunflowers can grow deep roots.\r\n\r\n- Also adjust the amount of water according to how hot or dry the environment is. ",
	"- Once a flower buds you will notice that the head follows the sun each day to get the maximum amount of sunlight, hence its name sunflower.\r\n\r\n- Some of the recommended flower types are “Russian Mammoth” that grows over 12 feet tall and blooms with edible seeds,\r\n\r\n- “Autumn Beauty” which comes in color variation of yellow, orange, bronze and red petals,\r\n\r\n- and “Schweinitz's Sunflower” which is known as the rarest species uh America.\r\n\r\n- The one you are growing right now is American Giant!",
	"- When fully grown, depending on the variety of sunflower, they will range to be 4 to 16 feet tall.\r\n\r\n- Their lifespan is 4-6 months, and they only bloom once a year in which the head dies within two weeks of blooming.\r\n\r\n- Once the flower petals start falling, you can harvest the seeds from the brown middle parts of the sunflower! "
]
const begoniaText = [
	"- Begonia seeds are as small as 4-15×2-9mm so unlike other plants, you can not place each seed individually. \r\n\r\n- Just sprinkle on top of a light, well-drained soil and wait till it germinates. The germination ends faster under warm conditions for about 70-80 degrees fahrenheit and sunlight isn't required.",
	"- Make sure to space each pot of begonia by 6-12inches. \r\n\r\n- Wax begonias need full sunlight for growth but only partial sunlight is enough if the heat is intense. Too much sun heat can be stressful for begonia so make sure to provide a shade in that case. ",
	"- Keep the temperature above 60 degrees Fahrenheit. \r\n\r\n- The wax begonia loves humidity for it being native to Central and South America. \r\n\r\n- Wax begonia can also be houseplants during winter if you can provide humidity. This can be done by placing the planting pot on top of a tray filled with water and pebbles so that the water the tray holds will eventually evaporate around the begonia. ",
	"- Wax begonia is a summer flower that grows well in continually damp soil. \r\n\r\n- Some tips are to mix the soil with organic matter so that the flower is fed with nutrients. \r\n\r\n- Another tip is to provide fertilizer every month, during the growing season. But since the fertilizer is being used constantly, 10-10-10 would be enough range for a fertilizer. ",
	"- Some problems seen in wax begonia are the flower rotting and spoiling. The plant will start rotting if you over hydrate the plant. Decrease the amount of water, though it should still be enough to keep the soil damp. The plant is spoiled if you leave deadhead flowers. ",
	"- The grown wax begonia ranges from .5 to 1 feet tall and .5-1.5feet wide. \r\n\r\n- The entire lifespan of the plant is two to three years and a flower can last six months the longest. \r\n\r\n- Most will bloom a bright red or reddish pink flowers."
]
const songbirdText = [
	"- Gently press in the columbine seeds on well-drained soil with light soil coverings to provide enough sunlight in order to germinate.\r\n\r\n- The best season to plant is in spring to early fall.",
	"- Songbird Columbine is a herbaceous perennial. They grow best under perfect sunlight and slightly acidic soil. To adjust the best sunlight and temperature, the plant should be placed under shade if the sun is too hot and placed under full sun if the weather is often cool.",
	"- A well drained soil must keep moist and never dry, though you should also not flood with water, making it swampy. \r\n\r\n- Rather than  a heavy clay like substance, the soil should be sandy and loamy, allowing hydration control of Columbine.",
	"- Make sure to mulch your Columbine's soil! \r\n\r\n- Mulching is to cover the plant with an extra layer of soil on top of the old so that we can keep the moist environment and prevent  soil erosion.",
	"- If the leaves turn yellow, it's a sign of not enough water! \r\n\r\n- Make sure to give enough water that the soil is always moist and also check if the soil is a good water holder or not. \r\n\r\n- Another bad symptom is leaves whitening, and that is the appearance of mildew. Treatment for this problem will be fungicide and if you can apply before the spread increase, your Columbine should go back healthy. ",
	"- Songbird columbine at flower stage is about 6-9 inches tall and it blooms for about 4 weeks. \r\n\r\n- After blooming seasons, cut the plants down to the ground leaving some planting space. They are self-seeding wildflowers so a new Columbine will be planted naturally if you didn't collect the seeds."
]
const zinniaText = [
	"- Zinnias are able to adapt to most soil conditions, but the ideal soil is rich in organic matter and well-draining.\r\n\r\n- It is recommended to grow zinnia seeds right in the garden bed, they do not like to be transplanted.\r\n\r\n- From the seed, they'll grow quickly.\r\n\r\n- Sow zinnia seeds quarter-inch deep. After planting it will take several weeks to months before blooms appear.\r\n\r\n- When seedlings reach 3 inches tall, you must maximize their air circulation so they're 6-18 inches apart. It reduces the development of powdery mildew.",
	"- Zinnias are one of the easiest wildflowers to grow\r\n\r\n- Zinnias need full sun (6-8 hours of sunlight) to get plentiful blooms",
	"- There are 3 main kinds of zinnia flowers, single, semidouble, double. The difference between them is by the number of rows of petals and whether the center of the flowers are visible. \r\n\r\n- Single - single row of petals and visible center\r\n\r\n- Double - numerous rows of petals and centers not visible\r\n\r\n- Semidouble - in between single and double, numerous rows of petals but visible centers",
	"- Zinnias are sensitive to frost.\r\n\r\n- They'll grow in minimum temperatures of 60 degrees F but a range of 74-84 degrees F is preferred for growing.",
	"After zinnias flower, cut off old flowers (a process called 'deadheading') to allow more flowers to form.",
	"- Zinnias generally take 60-70 days to bloom. \r\n\r\n- Zinnias are annuals and will die in the frost of fall. To reseed them let the last flowers mature fully and scatter their seeds. \r\n\r\n"
]

// update Pot function depending on current pot variables
function updatePot() {
	console.log("The status of the pot is as follows:")
	console.log("  flowerType: " + flowerType)
	console.log("  growthStage: ", growthStage)
	console.log("  potIsEmpty: ", potIsEmpty)
	console.log("  potIsReady: ", potIsReady)
	var imgsrc = "img/";

	if (flowerType == "songbird" && growthStage >= 0 && growthStage <= 5 ) {
		imgsrc += songbirdStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		text.textContent = songbirdText[growthStage];
		if (growthStage == 5) {
			const link = document.createElement("a");
			link.setAttribute('href', "https://www.gardenia.net/plant/aquilegia-songbird-bluebird-columbine");
			link.setAttribute('target', "_blank");
			link.textContent = 'More info on Songbird';
			text.appendChild(link);
		}
		console.log(imgsrc);
	}

	else if (flowerType == "sunflower" && growthStage >= 0 && growthStage <= 5) {
		imgsrc += sunflowerStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		text.textContent = sunflowerText[growthStage];
		if (growthStage == 5) {
			const link = document.createElement("a");
			link.setAttribute('href', "https://en.wikipedia.org/wiki/Common_sunflower");
			link.setAttribute('target', "_blank");
			link.textContent = 'More info on Sunflower';
			text.appendChild(link);
		}
		console.log(imgsrc);
	}

	else if (flowerType == "begonia" && growthStage >= 0 && growthStage <= 5) {
		imgsrc += begoniaStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		text.textContent = begoniaText[growthStage];
		if (growthStage == 5) {
			const link = document.createElement("a");
			link.setAttribute('href', "https://en.wikipedia.org/wiki/Begonia");
			link.setAttribute('target', "_blank");
			link.textContent = 'More info on Begonia';
			text.appendChild(link);
		}
		console.log(imgsrc);
	}

	else if (flowerType == "zinnia" && growthStage >= 0 && growthStage <=5) {
		imgsrc += zinniaStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		text.textContent = zinniaText[growthStage];
		if (growthStage == 5) {
			const link = document.createElement("a");
			link.setAttribute('href', "https://en.wikipedia.org/wiki/Zinnia");
			link.setAttribute('target', "_blank");
			link.textContent = 'More info on Zinnia';
			text.appendChild(link);
		}
		console.log(imgsrc);
	}
}

// Dragging functions below

const draggables = document.querySelectorAll(".draggable");
const potdiv = document.getElementById("pot");
const text = document.getElementById("text-display");

// Drag start event listener for every tool/seed
draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', ev => {
		//text.textContent = "Drop to pot";
		console.log('drag start');
		var dragged = ev.target.id;
		ev.dataTransfer.setData("text", ev.target.id);
		if (dragged == "watercanimg") {
			console.log("drag start id: " + ev.target.id);
		}
	})
})

// Pot div dragover event listener
potdiv.addEventListener('dragover', ev => {
	//text.textContent = "Now drop!";
	ev.preventDefault();
	console.log('drag over');
})

// Pot div drop event listener
potdiv.addEventListener('drop', ev => {
	ev.preventDefault();
	console.log("dropped");
	var droppedData = ev.dataTransfer.getData("text");

	// Check dropped object id
	if (droppedData == "watercanimg") {
		console.log("dropped img is watercan");
		if (!potIsEmpty && potIsReady) {
			growthStage++;
		}
		updatePot();
	}
	else if (droppedData == "scissorsimg") {
		console.log("dropped img is scissorsimg");
		flowerType = "";
		growthStage = 0;
		potIsEmpty = true;
		potIsReady = false;
		document.getElementById("potimg").src = "img/empty.gif";
		text.textContent = "Nice! Now let's try growing other plants!";
		updatePot();
	}
	else if (droppedData == "fertilizerimg") {
		console.log("dropped img is fertilizerimg");
		if (potIsEmpty) {
			potIsReady = true;
			potIsEmpty = false;
			text.textContent = "Good job! Now choose a seed to plant!";
		}
	}
	else if (droppedData == "pHimg") {
		if (flowerType == "") {
			text.textContent = "- The ideal pH level to grow plants differs depending on the specific plant.\r\n\r\n- Some plants thrive in more acidic soil than others.\r\n\r\n- On average though, most plants are able to grow in pH levels of 5.5 - 7.0."
		}
		else if (flowerType == "songbird") {
			text.textContent = "- pH level of 6.1 - 7.5 is ideal for the soil for a Songbird plant."
		}
		else if (flowerType == "zinnia") {
			text.textContent = "- pH level of 6.5 - 7.0 is ideal for the soil for a Zinnia plant."
		}
		else if (flowerType == "sunflower") {
			text.textContent = "- pH level of 6.0 - 7.5 is ideal for the soil for a Sunflower plant."
		}
		else if (flowerType == "begonia") {
			text.textContent = "- pH level of 5.2 - 6.0 is ideal for the soil for a Begonia plant."
		}
	}
	else if (droppedData == "songbirdseed") {
		console.log("dropped img is songbirdseed");
		if (potIsReady) {
			flowerType = "songbird"
			potIsEmpty = false;
		}
		else {
			text.textContent = "Put in fertilizer before planting the seed!"
		}
		updatePot();
	}
	else if (droppedData == "sunflowerseed") {
		console.log("dropped img is sunflowerseed");
		if (potIsReady) {
			flowerType = "sunflower"
			potIsEmpty = false;
		}
		else {
			text.textContent = "Put in fertilizer before planting the seed!"
		}
		updatePot();
	}
	else if (droppedData == "begoniaseed") {
		console.log("dropped img is begoniaseed");
		if (potIsReady) {
			flowerType = "begonia"
			potIsEmpty = false;
		}
		else {
			text.textContent = "Put in fertilizer before planting the seed!"
		}
		updatePot();
	}
	else if (droppedData == "zinniaseed") {
		console.log("dropped img is zinniaseed");
		if (potIsReady) {
			flowerType = "zinnia"
			potIsEmpty = false;
		}
		else {
			text.textContent = "Put in fertilizer before planting the seed!"
		}
		updatePot();
	}

})
