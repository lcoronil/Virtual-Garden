let instructions = document.getElementById("instructions");

function closeInstructions() {
	instructions.classList.add("close-instructions");
}

const transition = document.getElementById("instructions");

transition.addEventListener('transitionend', function(){
	document.getElementById("instructions").style.display = "none";
})

// State of the pot
var flowerType = "";
var growthStage = 0;
var potIsEmpty = true;
var potIsReady = false;
const begoniaStages = ["Beginiaseed.png", "Begoniasprout.png", "Begoniastage2.png", "Begoniastage3.png", "Begoniastage4.png", "Begoniaflower.png"]
const songbirdStages = ["Songbird_Seed.png", "Songbird_Stage_One.png", "Songbird_Stage_Two.png", "Songbird_Stage_Three.png", "Songbird_Stage_Four.png", "Songbird.png"]
const sunflowerStages = ["Sunflower_Seed.png", "Sunflower_Stage_One.png", "Sunflower_Stage_Two.png", "Sunflower_Stage_3.png", "Sunflower_Stage_Four_.png", "Sunflower.png"]
const zinniaStages = ["Zinnia_seed.png", "Zinnia_Stage_One.png", "Zinnia_Stage_Two.png"]
const sunflowerText = [
	"- Plant seed 2 to 4 inches deep in soil, 12 to 24 inches apart from one another.\r\n\r\n- There are many different looking sunflower seeds because there are over 70 varieties.\r\n\r\n- You typically want to wait to plant the seeds after the last frost of the year so the cold does not kill the seed.\r\n\r\n- Water it each day and see its progress!",
	"Stage 1 text insert here",
	"Stage 2 text insert here",
	"Stage 3 text insert here",
	"Stage 4 text insert here",
	"Final stage text insert here"
]
const begoniaText = [
	"Plant seed info text",
	"Stage 1 text insert here",
	"Stage 2 text insert here",
	"Stage 3 text insert here",
	"Stage 4 text insert here",
	"Final stage text insert here"
]
const songbirdText = [
	"Plant seed info text",
	"Stage 1 text insert here",
	"Stage 2 text insert here",
	"Stage 3 text insert here",
	"Stage 4 text insert here",
	"Final stage text insert here"
]
const zinniaText = [
	"- Zinnias are able to adapt to most soil conditions, but the ideal soil is rich in organic matter and well-draining.\r\n\r\n- It is recommended to grow zinnia seeds right in the garden bed, they do not like to be transplanted.\r\n\r\n- From the seed, they'll grow quickly.\r\n\r\n- Sow zinnia seeds quarter-inch deep. After planting it will take several weeks to months before blooms appear.\r\n\r\n- When seedlings reach 3 inches tall, you must maximize their air circulation so they're 6-18 inches apart. It reduces the development of powdery mildew.",
	"- Zinnias are one of the easiest wildflowers to grow\r\n\r\n- Zinnias need full sun (6-8 hours of sunlight) to get plentiful blooms",
	"- There are 3 main kinds of zinnia flowers, single, semidouble, double. The difference between them is by the number of rows of petals and whether the center of the flowers are visible. \r\n\r\n- Single - single row of petals and visible center\r\n\r\n- Double - numerous rows of petals and centers not visible\r\n\r\n- Semidouble - in between single and double, numerous rows of petals but visible centers",
	"- Zinnias are sensitive to frost.\r\n\r\n- They'll grow in minimum temperatures of 60 degrees F but a range of 74-84 degrees F is preferred for growing.",
	"After zinnias flower, cut off old flowers (a process called 'deadheading') to allow more flowers to form.",
	"- Zinnias generally take 60-70 days to bloom. \r\n\r\n- Zinnias are annuals and will die in the frost of fall. To reseed them let the last flowers mature fully and scatter their seeds. \r\n\r\n"
]
// update Pot function
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


potdiv.addEventListener('dragover', ev => {
	//text.textContent = "Now drop!";
	ev.preventDefault();
	console.log('drag over');
})


potdiv.addEventListener('drop', ev => {
	ev.preventDefault();
	console.log("dropped");
	var droppedData = ev.dataTransfer.getData("text");

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

// still testing below
/*
// ensures this works for some older browsers
MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

// the element you want to observe. change the selector to fit your use case
const pimg = document.getElementById("potimg");

new MutationObserver(function onSrcChange(){
  // src attribute just changed!!! put code here
	if (growthStage == 0) {
		console.log("seed image just loaded!")
		var val = 3;
		$('#potimg').css({transition: 'transform 1s'});
		$('#potimg').css({transform: 'scale(0.1) translateY(200%)'});
		$('#potimg').css({transform: 'scale(0.1) translateY(200%)'});
	}
})
  .observe(pimg,{attributes:true,attributeFilter:["src"]})
*/
