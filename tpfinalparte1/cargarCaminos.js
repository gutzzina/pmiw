function tomaImagenActual() {
  return imagDelCamActual()[imagActual];
}

function imagDelCamActual() {
  if (camino === 'aang') {
    return imagAang;
  } else if (camino === 'sokka') {
    return imagSokka;
  } else if (camino === 'aangB') {
    return imagAangB;
  } else {
    return imagIntro;  // Camino intro por defecto
  }
}
