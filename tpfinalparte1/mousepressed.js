
function mousePressed () {
  if (camino ==='intro' && imagActual === imagIntro.length - 1) {
    if (mouseX > 100 && mouseX < 250 && mouseY > 400 && mouseY < 440) {
      camino = 'aang';
      imagActual = 0;
      dialogoActual = 0;
      if (!songPlaying) {
        song.loop(); 
        songPlaying = true;
      }
    } else if (mouseX > 350 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      camino = 'sokka';
      imagActual = 0;
      dialogoActual = 0;
      if (!songPlaying) {
        song.loop(); 
        songPlaying = true;
      }
    }
  }
  if (camino === 'aang' && imagActual === imagAang.length - 3) {
    if (mouseX > 100 && mouseX < 250 && mouseY > 400 && mouseY < 440) {
      camino = 'aangB';
      imagActual = 0;
      dialogoActual = 0;
    } 
    
    else if (mouseX > 350 && mouseX < 500 && mouseY > 400 && mouseY < 440) {
      camino = 'aang'
      imagActual++;
      dialogoActual++;
    }
  }

  // Flecha para avanzar en la intro y caminos
  if (!creditos && !(camino === 'aang' && imagActual === imagAang.length - 3)) {
    if (mouseX < 480+50 && mouseX > 480 && mouseY > 420 && mouseY < 440) {
      // Avanzar en la intro
      if (camino === 'intro') {
        if (imagActual < imagIntro.length - 1) {
          imagActual++;
          dialogoActual++;
        }
      } else { // Avanzar en los caminos (Aang, Sokka, AangB)
        if (imagActual < imagDelCamActual().length - 1) {
          imagActual++;
          dialogoActual = (dialogoActual + 1) % tomaDiaDelCamActual().length;
        } else {
          // Si llegamos al final del camino, mostramos créditos
          creditos = true;
        }
      }
    }
  }


  // Botón para volver al inicio desde los créditos
  if (creditos && mouseX > width / 2 - 75 && mouseX < width / 2 - 75 + 150 && mouseY > height / 2 + 50 && mouseY < height / 2 + 50 + 35) {
    camino = 'intro';
    imagActual = 0;
    dialogoActual = 0;
    creditos = false;
  }
  if (camino === 'intro' && imagActual === 0) {
    if (mouseX >100 && mouseY > 400 && mouseX < 100 + 400 && mouseY < 400 + 50) {
      imagActual = 1;
      dialogoActual = 0;
    }
  }
}
