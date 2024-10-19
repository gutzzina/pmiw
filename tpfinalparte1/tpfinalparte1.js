let song, songPlaying = false;
let imagIntro = [], imagActual = 0, imagSokka=[], imagAang=[], imagAangB=[];
let camino = 'intro';
let flecha;
let dialogos;
let dialogosCS;
let dialogosCA;
let dialogosCAB
let diaDelCamActual= 'intro';
let dialogoActual = 0;
let creditos = false;


function preload() {
  
  song = loadSound('/data/sound.mp3');
  dialogos = loadStrings('data/dialogos/intro.txt');
  dialogosCS = loadStrings('data/dialogos/sokka.txt');
  dialogosCA = loadStrings('data/dialogos/aang.txt');
  dialogosCAB = loadStrings('data/dialogos/aang(1).txt');
  flecha = loadImage ('data/flechaBlanca.png');
  imagIntro = [
    loadImage('data/intro/avatarIntro.jpeg'),
    loadImage('data/intro/foto1.jpeg'),
    loadImage('data/intro/foto2.jpeg'),
    loadImage('data/intro/foto3.jpg'),
    loadImage('data/separados1.jpeg')
  ];
  imagSokka = [
   loadImage('data/Sokka/cs1.png'),
    loadImage('data/Sokka/cs2.jpg'),
    loadImage('data/Sokka/cs3.jpeg'),
    loadImage('data/Sokka/cs4.jpeg'),
    loadImage('data/Sokka/cs5.jpg'),
    loadImage('data/Sokka/cs6.jpg'),
    loadImage('data/Sokka/cs7.jpg'),
    loadImage('data/Sokka/cs8.jpg'),
    loadImage('data/Sokka/cs9.jpg'),
    loadImage('data/Sokka/cs10.jpg'),
    loadImage('data/Sokka/cs11.jpg'),
    loadImage('data/Sokka/cs12.jpg'),
    loadImage('data/Sokka/cs13.jpg')
  ];
  imagAang = [
  loadImage('data/aang(1)/aang1.png'),
    loadImage('data/aang(1)/aang2.jpg'),
    loadImage('data/aang(1)/aang3.jpg'),
    loadImage('data/aang(1)/aang4.jpg'),
    loadImage('data/aang(1)/aang5.jpg'),
    loadImage('data/aang(1)/aang6.jpg'),
    loadImage('data/aang(1)/aang7.jpg'),
    loadImage('data/aang(1)/aang8.jpg'),
    loadImage('data/aang(1)/separadoss.jpeg')
  ];
  imagAangB = [
    loadImage('data/aang(2)/aangBifu2.jpeg'),
    loadImage('data/aang(2)/aangBifu3.jpeg'),
    loadImage('data/aang(2)/aangBifu4.jpeg'),
    loadImage('data/aang(2)/aangBifu5.jpeg'),
    loadImage('data/aang(2)/aangBifu6.jpeg'),
    loadImage('data/aang(2)/aangBifu7.jpeg'),
    loadImage('data/aang(2)/aang(2)8.jpg'),
    loadImage('data/aang(2)/aangBifu8.jpeg'),
    loadImage('data/aang(2)/aangBifu9.jpeg'),
    loadImage('data/aang(2)/9copia.jpeg')
  ];
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(0);
  let imagen = tomaImagenActual();
  let texto = tomaDialogo();

  if (imagen) {
    image(imagen, 0, 0, 640, 480);
  }
  
   if (texto && !(camino === 'intro' && imagActual === 0) ) {
    
    let margenIzquierdo = 50;
    let margenDerecho = 640 - 90;
    let margenSuperior = 360;
    let margenInferior = 460;
    
    fill(255); 
    textAlign(LEFT, TOP); 
    textSize(16); 
    textWrap(WORD); 
    let anchoTexto = margenDerecho - margenIzquierdo; 
    push();
    fill(0,0,0,100);
    rect(40, 350, 500,100,10);
    pop();
    text(texto, margenIzquierdo, margenSuperior, anchoTexto, margenInferior - margenSuperior);
  }
  if(camino === 'intro' && imagActual === 0){
  dibujarBoton(100, 400, 400, 50, "Iniciar Aventura");
  }
  
 if (!(camino === 'intro' && imagActual === 0) && !creditos && !(camino === 'intro' && imagActual === imagIntro.length - 1) && 
 !(camino === 'aang' && imagActual === imagAang.length - 3) )  {
    image(flecha, 480, 350+70, 50, 20);
  }
  if (camino === 'intro' && imagActual === imagIntro.length - 1) {
    text("¡Ups! Al entrar a la cueva, un derrumbe separó los grupos.", 300, 170);
    dibujarBoton(100, 400, 150, 40, "Seguir a Aang");
    dibujarBoton(350, 400, 150, 40, "Seguir a Sokka");
  }
  if (camino === 'sokka' && imagActual === imagSokka.length - 1 || 
        camino === 'aang' && imagActual === imagAang.length - 1 || 
        camino === 'aangB' && imagActual === imagAangB.length - 1) {
      creditos = true;
    } if (creditos){
    return dibujaCreditos();
    }
    if (camino === 'aang' && imagActual === imagAang.length - 3){
    dibujarBoton (100, 400, 150, 40, "No");
    dibujarBoton(350, 400, 150, 40, "Beso");
    }
   
    
}
