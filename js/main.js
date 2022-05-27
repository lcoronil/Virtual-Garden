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
const begoniaStages = ["Beginiaseed2.png", "Begoniasprout.png", "Begoniastage2.png", "Begoniastage3.png", "Begoniastage4.png", "Begoniaflower.png"]
const songbirdStages = ["Songbird_Seed2.png", "Songbird_Stage_One.png", "Songbird_Stage_Two.png", "Songbird_Stage_Three.png", "Songbird_Stage_Four.png", "Songbird.png"]
const sunflowerStages = ["Sunflower_Seed2.png", "Sunflower_Stage_One.png", "Sunflower_Stage_Two.png", "Sunflower_Stage_3.png", "Sunflower_Stage_Four_.png", "Sunflower.png"]
const sunflowerText = [
	"- Plant seed 2 to 4 inches deep in soil, 12 to 24 inches apart from one another.- There are many different looking sunflower seeds because there are over 70 varieties.<br>- You typically want to wait to plant the seeds after the last frost of the year so the cold does not kill the seed.<br>- Water it each day and see its progress!",
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
	"Plant seed info text",
	"Stage 1 text insert here",
	"Stage 2 text insert here",
	"Stage 3 text insert here",
	"Stage 4 text insert here",
	"Final stage text insert here"
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
		console.log(imgsrc);
	}
	else if (flowerType == "sunflower" && growthStage >= 0 && growthStage <= 5) {
		imgsrc += sunflowerStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		text.textContent = sunflowerText[growthStage];
		console.log(imgsrc);
	}
	else if (flowerType == "begonia" && growthStage >= 0 && growthStage <= 5) {
		imgsrc += begoniaStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		text.textContent = begoniaText[growthStage];
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
	}
	else if (droppedData == "scissorsimg") {
		console.log("dropped img is scissorsimg");
		flowerType = "";
		growthStage = 0;
		potIsEmpty = true;
		potIsReady = false;
		document.getElementById("potimg").src = "img/empty.gif";
		text.textContent = "Nice! Now let's try growing other plants!";
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
		console.log("dropped img is pHimg");
		if (potIsReady) {
			console.log("measuring pH scale");

		}
	}
	else if (droppedData == "songbirdseed") {
		console.log("dropped img is songbirdseed");
		if (potIsReady) {
			flowerType = "songbird"
			potIsEmpty = false;
		}
	}
	else if (droppedData == "sunflowerseed") {
		console.log("dropped img is sunflowerseed");
		if (potIsReady) {
			flowerType = "sunflower"
			potIsEmpty = false;
		}
	}
	else if (droppedData == "begoniaseed") {
		console.log("dropped img is begoniaseed");
		if (potIsReady) {
			flowerType = "begonia"
			potIsEmpty = false;
		}
	}
	updatePot();
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
