
var	Character;

var SubmittedCharacter = document.querySelector('#CharacterSubmit');
SubmittedCharacter.addEventListener('submit', function(event) {
  event.preventDefault();
  Character = this.querySelector('input').value;
  console.log("Character is "+Character)
  Character = Character.split("");
  console.log('Character',Character);
  test(Character)
});


var ImgLib = {
	a: 'assets/SignLanguage/A.png',
	b: 'assets/SignLanguage/B.png', 
	c: 'assets/SignLanguage/C.png',
	d: 'assets/SignLanguage/D.png',
	e: 'assets/SignLanguage/E.png',
	f: 'assets/SignLanguage/F.png',
	g: 'assets/SignLanguage/G.png',
	h: 'assets/SignLanguage/H.png',
	i: 'assets/SignLanguage/I.png',
	j: 'assets/SignLanguage/J.png',
	k: 'assets/SignLanguage/K.png',
	l: 'assets/SignLanguage/L.png',
	m: 'assets/SignLanguage/M.png',
	n: 'assets/SignLanguage/N.png',
	o: 'assets/SignLanguage/O.png',
	p: 'assets/SignLanguage/P.png',
	q: 'assets/SignLanguage/Q.png',
	r: 'assets/SignLanguage/R.png',
	s: 'assets/SignLanguage/S.png',
	t: 'assets/SignLanguage/T.png',
	u: 'assets/SignLanguage/U.png',
	v: 'assets/SignLanguage/V.png',
	w: 'assets/SignLanguage/W.png',
	x: 'assets/SignLanguage/X.png',
	y: 'assets/SignLanguage/Y.png',
	z: 'assets/SignLanguage/Z.png'
}

function test(strArr) {
	document.getElementById('images').innerHTML= "";
	for (var i = 0; i < strArr.length; i++) {
		console.log(ImgLib[  strArr[i]  ])
		var div = document.createElement('div');
		var img = document.createElement('img');
		var ind = strArr[i]
		img.src = ImgLib[ind]
		div.appendChild(img);
		div.className = "ASLImages";
		document.getElementById("images").appendChild(div);
	}
}




// function test(character){
// 	document.getElementById("images").innerHTML = Character
// 	if (Character == "A" || Character == "a") {
// 		document.getElementById("images").innerHTM = "<img src= assets/SignLanguage/A.png>"
// 	}
// 	if (Character == "B" || Charsacter == "b"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/B.png>"
// 	}
// 	if (Character == "C" || Character == "c"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/C.png>"
// 	}
// 	if (Character == "D" || Character == "d"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/D.png>"
// 	}
// 	if (Character == "E" || Character == "e"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/E.png>"
// 	}
// 	if (Character == "F" || Character == "f"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/F.png>"
// 	}
// 	if (Character == "G" || Character == "g"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/G.png>"
// 	}
// 	if (Character == "H" || Character == "h"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/H.png>"
// 	}
// 	if (Character == "I" || Character == "i"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/I.png>"
// 	}
// 	if (Character == "J" || Character == "j"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/J.png>"
// 	}
// 	if (Character == "K" || Character == "k"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/K.png>"
// 	}
// 	if (Character == "L" || Character == "l"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/L.png>"
// 	}
// 	if (Character == "M" || Character == "m"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/M.png>"
// 	}
// 	if (Character == "N" || Character == "n"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/N.png>"
// 	}
// 	if (Character == "O" || Character == "o"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/O.png>"
// 	}
// 	if (Character == "P" || Character == "p"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/P.png>"
// 	}
// 	if (Character == "Q" || Character == "q"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/Q.png>"
// 	}
// 	if (Character == "R" || Character == "r"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/R.png>"
// 	}
// 	if (Character == "S" || Character == "s"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/S.png>"
// 	}
// 	if (Character == "T" || Character == "t"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/T.png>"
// 	}
// 	if (Character == "U" || Character == "u"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/U.png>"
// 	}
// 	if (Character == "V" || Character == "v"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/V.png>"
// 	}
// 	if (Character == "W" || Character == "w"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/W.png>"
// 	}
// 	if (Character == "X" || Character == "x"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/X.png>"
// 	}
// 	if (Character == "Y" || Character == "y"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/Y.png>"
// 	}
// 	if (Character == "Z" || Character == "z"){
// 		document.getElementById("images").innerHTML = "<img src= assets/SignLanguage/Z.png>"
// 	}
// 	// if (Character.length -- 1 > 0) {
		
// 	// }
// }
