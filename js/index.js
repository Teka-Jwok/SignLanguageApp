
var	Character;

var SubmittedCharacter = document.querySelector('#CharacterSubmit');
SubmittedCharacter.addEventListener('submit', function(event) {
  event.preventDefault();
  Character = this.querySelector('input').value;
  console.log("Character is "+Character)
  test()
});

function test(){
	document.getElementById("images").innerHTML = Character
	if (Character == "A" || Character == "a") {
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/A.png>"
	}
	if (Character == "B" || Character == "b"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/B.png>"
	}
	if (Character == "C" || Character == "c"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/C.png>"
	}
	if (Character == "D" || Character == "d"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/D.png>"
	}
	if (Character == "E" || Character == "e"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/E.png>"
	}
	if (Character == "F" || Character == "f"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/F.png>"
	}
	if (Character == "G" || Character == "g"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/G.png>"
	}
	if (Character == "H" || Character == "h"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/H.png>"
	}
	if (Character == "I" || Character == "i"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/I.png>"
	}
	if (Character == "J" || Character == "j"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/J.png>"
	}
	if (Character == "K" || Character == "k"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/K.png>"
	}
	if (Character == "L" || Character == "l"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/L.png>"
	}
	if (Character == "M" || Character == "m"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/M.png>"
	}
	if (Character == "N" || Character == "n"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/N.png>"
	}
	if (Character == "O" || Character == "o"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/O.png>"
	}
	if (Character == "P" || Character == "p"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/P.png>"
	}
	if (Character == "Q" || Character == "q"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/Q.png>"
	}
	if (Character == "R" || Character == "r"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/R.png>"
	}
	if (Character == "S" || Character == "s"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/S.png>"
	}
	if (Character == "T" || Character == "t"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/T.png>"
	}
	if (Character == "U" || Character == "u"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/U.png>"
	}
	if (Character == "V" || Character == "v"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/V.png>"
	}
	if (Character == "W" || Character == "w"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/W.png>"
	}
	if (Character == "X" || Character == "x"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/X.png>"
	}
	if (Character == "Y" || Character == "y"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/Y.png>"
	}
	if (Character == "Z" || Character == "z"){
		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/Z.png>"
	}
	if (Character.length -- 1 > 1) {}
}
