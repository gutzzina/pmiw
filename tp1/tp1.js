//URL YouTube: 
//Legajo: 119039/8

let obraRect;
let rectTamaño = 200; 
let coordenadaX = 500;
let coordenadaY = 100;
let invertirColor = 0;

function preload() {
  img = loadImage ("data/obraRect.jpg");
}

function setup() {
  createCanvas(800, 400);
  image(img, 0, 0, 400, 400); 
}

function draw() {
  for (let j = 0; j < 4; j++) {
    if (j === 1) {
      coordenadaX = 700;
    } else if (j === 2) {
      coordenadaY = 300;
    } else if (j === 3) {
      coordenadaX = 700;
      coordenadaY = 300;
    }
    for (let i = 0; i < 10; i++) {
      let tam = rectTamaño - (i * cambioGrosor(mouseX, mouseY));
      
      if (i % 2 === 0) {
        if (invertirColor === 1) {
          fill(255);  
        } else {
          fill(0);
        }
      } else {
        if (invertirColor === 1) {
          fill(0);   
        } else {
          fill(255);
        }
      }

      let moverX, moverY;
      if (j === 0 || j === 1) {
        moverX = map(mouseX, 0, width, 5, 5);
      } else {
        moverX = map(mouseX, 0, width, -5, -5);
      } 
      if (j === 0 || j === 2) {
        moverY = map(mouseY, 0, height, -5, 5);
      } else {
        moverY = map(mouseY, 0, height, 5, -5);
      }

      let posX = coordenadaX + i * moverX;
      let posY = coordenadaY + i * moverY;
      rectMode(CENTER);  
      rect(posX, posY, tam, tam);
    }    
    coordenadaX = 500;
    coordenadaY = 100;
  }
}

function mousePressed() {
  clickInvertir(true);  
}

function clickInvertir(invertir) { 
  if (invertir) {
    invertirColor = 1 - invertirColor;
  }
}

function cambioGrosor(mouseX, mouseY) {
  let movimientoX = mouseX - width / 2;
  let movimientoY = mouseY - height / 2; 
  let deslizar;
  
  if (movimientoX >= 0 && movimientoY >= 0) {
    if (movimientoX >= movimientoY) {
      deslizar = movimientoX;
    } else {
      deslizar = movimientoY;
    }
  } else if (movimientoX < 0 && movimientoY < 0) {
    if (movimientoX <= movimientoY) {
      deslizar = -movimientoX;
    } else {
      deslizar = -movimientoY;
    }
  } else {
    if (movimientoX >= 0) {
      deslizar = movimientoX;
    } else {
      deslizar = movimientoY;
    }
  }
  
  let distancia;
  if (width > height) {
    distancia = width / 2;
  } else {
    distancia = height / 2;
  }
  
  let numeroCambiado = 10 + (deslizar / distancia) * 20;
  return int(numeroCambiado);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciarColor();
  } else if (key === 'm' || key === 'M') {
    reiniciarMouse();
  }
}

function reiniciarColor() {
  invertirColor = 0;  
}

function reiniciarMouse() {
  mouseX = width / 4;
  mouseY = height / 4;
}
