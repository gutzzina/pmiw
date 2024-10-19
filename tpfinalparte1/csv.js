
function TextosTXT(numLinea) {
  push();
  fill(0);
  let textoCompleto = diaDelCamActual[numLinea];

  for (let i=0; i < textoCompleto.length; i++) {
    text(textoCompleto[i], 30, 30 );
  }
  pop();
}


function tomaDiaDelCamActual() {
  if (camino === 'sokka') {
    return dialogosCS;
  } else if (camino === 'aang') {
    return dialogosCA;
  } else if (camino === 'aangB') {
    return dialogosCAB;
  } else {
    return dialogos;  // Camino intro por defecto
  }
}
function tomaDialogo() {
  return tomaDiaDelCamActual()[dialogoActual];
}
