let context = document.getElementById("pacman").getContext("2d");
context.canvas.addEventListener("keydown", keydown_handler); 
context.canvas.focus(); 

let pacman = new Pacman(150, 150, 20, 120);

let ghosts = [
  new Ghost(Math.random() * 300, Math.random() * 300, 20, 70, 'red'),
  new Ghost(Math.random() * 300, Math.random() * 300, 20, 60, 'pink'),
  new Ghost(Math.random() * 300, Math.random() * 300, 20, 50, 'cyan'),
  new Ghost(Math.random() * 300, Math.random() * 300, 20, 40, 'orange')
];
var previous, elapsed;
window.requestAnimationFrame(frame);
