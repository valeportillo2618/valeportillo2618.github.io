let app = document.getElementById('typewriter');
 let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString(' "La Verdadera grandeza consiste en hacer que todos se sientan grandes". <br> -Charles Dickens')
  .pauseFor(200)
  .deleteChars(10)
  .start();
