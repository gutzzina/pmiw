function dibujarBoton(x, y, ancho, alto, tex) {
  fill(0, 0, 0, 128);  
  stroke(255);         
  strokeWeight(1);     
  rect(x, y, ancho, alto, 10);  

  noStroke();
  fill(255);          
  textAlign(CENTER, CENTER);
  text(tex, x + ancho / 2, y + alto / 2);  
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
