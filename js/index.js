
var	Character;

var SubmittedCharacter = document.querySelector('#CharacterSubmit');
SubmittedCharacter.addEventListener('submit', function(event) {
  event.preventDefault();
  Character = this.querySelector('input').value;
  console.log("Character is "+Character)
  if (Character === "dtrump") {
	  var img2 = document.createElement('img');
		var src2 = 'assets/dtrump.jpeg';
  	console.log('donaldtrump')
	  img2.src = src2;
	  document.getElementById("images").appendChild(img2)
	  return;
  }
  if (Character === "cnuggets") {
	  var img3 = document.createElement('img');
		var src3 = 'assets/chickenNuggets.gif';
  	console.log('cnuggets')
	  img3.src = src3;
	  document.getElementById("images").appendChild(img3)
	  return;
  }
  if (Character === "pmb") {
	  var img4 = document.createElement('img');
		var src = 'assets/pmb.gif';
  	console.log('pmg')
	  img4.src = src;
	  document.getElementById("images").appendChild(img4)
	  return;
  }
  if (Character === "kainoa") {
	  var img5 = document.createElement('img');
		var src = 'assets/kainoa.jpg';
  	console.log('kainoa')
	  img5.src = src;
	  document.getElementById("images").appendChild(img5)
	  return;
  }
  if (Character === "brody") {
	  var img6 = document.createElement('img');
		var src = 'assets/brody.jpg';
  	console.log('brody')
	  img6.src = src;
	  document.getElementById("images").appendChild(img6)
	  return;
  }
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
	qu: 'assets/SignLanguage/qu.gif',
	sp: 'assets/SignLanguage/space.png',
	a0: 'assets/SignNumber/0.png',
	a1: 'assets/SignNumber/1.png', 
	a2: 'assets/SignNumber/2.png',
	a3: 'assets/SignNumber/3.png',
	a4: 'assets/SignNumber/4.png',
	a5: 'assets/SignNumber/5.png',
	a6: 'assets/SignNumber/6.png',
	a7: 'assets/SignNumber/7.png',
	a8: 'assets/SignNumber/8.png',
	a9: 'assets/SignNumber/9.png',
	pe: 'assets/SignLanguage/Dot.png',
	co: 'assets/SignLanguage/Comma.png'
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
			console.log(ind);
			ind = "qu";
		}
		if (ind === ".") {
			ind = "pe";
		}
		if (ind === ",") {
			ind = "co";
		}
		if (ind === "0") {
			ind = "a0"
		}
		if (ind === "1") {
			ind = "a1"
		}
		if (ind === "2") {
			ind = "a2"
		}
		if (ind === "3") {
			ind = "a3"
		}
		if (ind === "4") {
			ind = "a4"
		}
		if (ind === "5") {
			ind = "a5"
		}
		if (ind === "6") {
			ind = "a6"
		}
		if (ind === "7") {
			ind = "a7"
		}
		if (ind === "8") {
			ind = "a8"
		}
		if (ind === "9") {
			ind = "a9"
		}
		img.src = ImgLib[ind]
		div.appendChild(img);
		div.className = "ASLImages";
		document.getElementById("images").appendChild(div);
	}
}




