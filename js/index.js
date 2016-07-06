
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
		document.getElementById("testC").innerHTML = "<img src= assets/SignLanguage/A.png>"
	}
}
