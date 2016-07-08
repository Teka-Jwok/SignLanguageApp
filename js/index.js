
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
	ex: 'assets/SignLanguage/!.png',
	qu: 'assets/SignLanguage/?.png',
	sp: 'assets/SignLanguage/space.png'
}

function test(strArr) {
	document.getElementById('images').innerHTML= "";
	for (var i = 0; i < strArr.length; i++) {
		console.log(ImgLib[  strArr[i]  ])
		var div = document.createElement('div');
		var img = document.createElement('img');
		var ind = strArr[i].toLowerCase()
		if (ind === " ") {
			ind = "sp";
		}
		if (ind === "!") {
			ind = "ex";
		}
		if (ind === "?") {
			ind = "qu";
		}
		img.src = ImgLib[ind]
		div.appendChild(img);
		div.className = "ASLImages";
		document.getElementById("images").appendChild(div);
	}
}




