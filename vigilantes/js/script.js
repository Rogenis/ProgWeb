(function () {

  const FPS = 1; 
  let gameDimensions = [1243, 960]; // Tamanho da floresta
  let focoDimensions = [100, 130]; // Tamanho do fogo
  let caveiraDimensions = [120, 136]; // Tamanho da caveira
  let probFoco = 25;
  let probCaveira = 3
  let reserva;
  let focos = [];
  let caveiras = []
  let gameLoop;
  let paused = false;

  function init() {
    reserva = new Reserva();
    gameLoop = setInterval(run, 1000/FPS);
  }


  class Reserva {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "reserva";
      this.element.style.width = `${gameDimensions[0]}px`;
      this.element.style.height = `${gameDimensions[1]}px`;
      document.body.appendChild(this.element);
    }
  }

  class FocoIncendio {
    constructor () {
      this.element = document.createElement("div");
      this.element.className = "foco-incendio";
      this.element.style.width = `${focoDimensions[0]}px`;
      this.element.style.height = `${focoDimensions[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-focoDimensions[0])))}px`;
      this.element.style.top = `${Math.floor((Math.random() * (gameDimensions[1]-focoDimensions[1])))}px`;
      reserva.element.appendChild(this.element);
      this.element.onclick = function (){
        document.getElementsByClassName("foco-incendio").src = "./css/assets/devastacao.png"
      }
    }
  }

  class Caveira{
    constructor(){
      this.element = document.createElement("div")
      this.element.className = "caveira"
      this.element.style.width = `${caveiraDimensions[0]}px`;
      this.element.style.height = `${caveiraDimensions[1]}px`;
      this.element.style.left = `${Math.floor((Math.random() * (gameDimensions[0]-caveiraDimensions[0])))}px`;
      reserva.element.appendChild(this.element);
    }
  }

  function togglePause() {
    if (!paused) paused = true;
    else if (paused) paused = false;
  }


  function run () {
    if (!paused){
      if (Math.random() * 100 < probFoco) {
        let foco = new FocoIncendio();
        focos.push(foco);
      }
      if (Math.random() * 100 < probCaveira) {
        let caveira = new Caveira();
        caveiras.push(caveira);
      }
    }
  }

  window.addEventListener("keydown", function (e) {
    var key = e.keyCode;
    if (e.key === 'o') {
      clearInterval(gameLoop);
    }
    if (key === 80){
      togglePause();
    }
  }) 

  init();
})();
 