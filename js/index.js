
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
	z: 'assets/SignLanguage/Z.png',
	A: 'assets/SignLanguage/A.png',
	B: 'assets/SignLanguage/B.png', 
	C: 'assets/SignLanguage/C.png',
	D: 'assets/SignLanguage/D.png',
	E: 'assets/SignLanguage/E.png',
	F: 'assets/SignLanguage/F.png',
	G: 'assets/SignLanguage/G.png',
	H: 'assets/SignLanguage/H.png',
	I: 'assets/SignLanguage/I.png',
	J: 'assets/SignLanguage/J.png',
	K: 'assets/SignLanguage/K.png',
	L: 'assets/SignLanguage/L.png',
	M: 'assets/SignLanguage/M.png',
	N: 'assets/SignLanguage/N.png',
	O: 'assets/SignLanguage/O.png',
	P: 'assets/SignLanguage/P.png',
	Q: 'assets/SignLanguage/Q.png',
	R: 'assets/SignLanguage/R.png',
	S: 'assets/SignLanguage/S.png',
	T: 'assets/SignLanguage/T.png',
	U: 'assets/SignLanguage/U.png',
	V: 'assets/SignLanguage/V.png',
	W: 'assets/SignLanguage/W.png',
	X: 'assets/SignLanguage/X.png',
	Y: 'assets/SignLanguage/Y.png',
	Z: 'assets/SignLanguage/Z.png'
	// n1:
}

function test(strArr) {
	document.getElementById('images').innerHTML= "";
	for (var i = 0; i < strArr.length; i++) {
		console.log(ImgLib[  strArr[i]  ])
		var div = document.createElement('div');
		var img = document.createElement('img');
		var ind = strArr[i]
		img.src = ImgLib[ind]// "n" + number
		div.appendChild(img);
		div.className = "ASLImages";
		document.getElementById("images").appendChild(div);
	}
}




