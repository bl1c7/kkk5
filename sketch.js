function setup() {
  createCanvas(700, 700);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;

let xJogador = [0, 0 ,0];
let yJogador = [100, 200, 300];
let jogador = ["😼", "🙊", "🤖",];

function draw(){
    ativaJogo();
  desenhaJogadores();
    desenhaLinhaDeChegada();
}
function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("violet")
  }
}

function desenhaJogadores(){
    textSize(60);
    for (let i = 0; i < 3; i++){
    text(jogador [i], xJogador[i], yJogador[i]);
 }
}
 function desenhaLinhaDeChegada() {
   rect(600, 0, 30, 700);
 }
function verificaVencedor() {
for (let i = 0; i < 3; i++){
  if (xJogador[i] > 350) {
     text(Jogador[1] + "venceu!", 50, 200);
    noLoop()
  }
}
function keyReleased() {
  if (key == "a") {
    xJogador[1] += random(40);
  }
  if (key == "s") {
    xJogador[2] += random(40);
  }
  if (key == "d") {
    xJogador[3] += random(40);
  }
}
