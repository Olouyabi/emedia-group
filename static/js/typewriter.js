
var slogan = document.getElementById('slogan');
new Typewriter(slogan, {
  loop:true,
  deleteSpeed :5
})
.changeDelay(60)
.typeString('Graphiste <span class="manuscript" style=" color : #FF5500">créatif !</span>')
.pauseFor(3000)
.deleteChars(29)
.typeString('Éditeur <span class="manuscript" style=" color : #FF5500">professionnel !</span>')
.pauseFor(3000)
.deleteChars(44)
.typeString('Formateur <span class="manuscript" style=" color : #FF5500">aguerri !</span>')
.pauseFor(3000)
.deleteChars(44)
.typeString('<span class="manuscript" style=" color : #FF5500">Bienvenue dans mon univers fabuleux !</span>')
.pauseFor(5000)
.start();