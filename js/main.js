let instructions = document.getElementById("instructions");

function closeInstructions() {
	instructions.classList.add("close-instructions");
}

const transition = document.getElementById("instructions");

transition.addEventListener('transitionend', function(){
	document.getElementById("instructions").style.display = "none";
})
