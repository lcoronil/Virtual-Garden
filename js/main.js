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
var growthStage = -1;
var potIsEmpty = true;
var potIsReady = false;
const begoniaStages = ["Beginaiseed2.png", "Begoniasprout.png", "Begoniastage2.png", "Begoniastage3.png", "Begoniastage4.png", "Begoniaflower.png"]
const songbirdStages = ["Songbird_Seed2.png", "Songbird_Stage_One.png", "Songbird_Stage_Two.png", "Songbird_Stage_Three.png", "Songbird_Stage_Four.png", "Songbird.png"]
const sunflowerStages = ["Sunflower_Seed2.png", "Sunflower_Stage_One.png", "Sunflower_Stage_Two.png", "Sunflower_Stage_3.png", "Sunflower_Stage_Four_.png", "Sunflower.png"]

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
		console.log(imgsrc);
	}
	else if (flowerType == "sunflower" && growthStage >= 0 && growthStage <= 5) {
		imgsrc += sunflowerStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		console.log(imgsrc);
	}
	else if (flowerType == "begonia" && growthStage >= 0 && growthStage <= 3) {
		imgsrc += begoniaStages[growthStage]
		document.getElementById("potimg").src = imgsrc;
		console.log(imgsrc);
	}
}

// Dragging functions below
const draggables = document.querySelectorAll(".draggable");
const potdiv = document.getElementById("pot");

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', ev => {
		console.log('drag start');
		var dragged = ev.target.id;
		ev.dataTransfer.setData("text", ev.target.id);
		if (dragged == "watercanimg") {
			console.log("drag start id: " + ev.target.id);
		}
	})
})


potdiv.addEventListener('dragover', ev => {
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
		growthStage = -1;
		potIsEmpty = true;
		potIsReady = false;
		document.getElementById("potimg").src = "";
	}
	else if (droppedData == "fertilizerimg") {
		console.log("dropped img is fertilizerimg");
		if (potIsEmpty) {
			potIsReady = true;
			potIsEmpty = false;
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
	else if (droppedData == "beginiaseed") {
		console.log("dropped img is beginiaseed");
		if (potIsReady) {
			flowerType = "begonia"
			potIsEmpty = false;
		}
	}
	updatePot();
})
