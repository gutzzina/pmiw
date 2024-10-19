function dibujarBoton(x, y, ancho, alto, tex) {
  fill(0, 0, 0, 128);  // Fondo semi-transparente
  stroke(255);         // Borde blanco
  strokeWeight(1);     // Grosor del borde
  rect(x, y, ancho, alto, 10);  // Dibuja el rectángulo del botón con esquinas redondeadas

  noStroke();
  fill(255);           // Texto en blanco
  textAlign(CENTER, CENTER);
  text(tex, x + ancho / 2, y + alto / 2);  // Centra el texto en el botón
}

function dibujaCreditos() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Créditos", width / 2, height / 2 - 20);
  textSize(12);
  text("Desarrollado por Gavilan Fiorella y Erbes Yamile Nazarena", width / 2, height / 2 + 20);

  dibujarBoton(width / 2 - 75, height / 2 + 50, 150, 35, "Volver a inicio");
}
