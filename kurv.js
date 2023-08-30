/*
 * Dette script definerer klassen Kurv
 */

/* 
 * Den første del af funktionen er en "konstruktør".
 * Den tager parametrene og konstruerer et nyt objekt 
 * ud fra dem. Værdierne huskes som hørende til netop 
 * dette objekt ved hjælp af nøgleordet this
 */
class Kurv {
  constructor(x, y, bredde, dybde, speed) {

    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250, 230, 150];

    /*
     * Derpå defineres nogle funktioner, som kan kaldes på de enkelte instanser
     * (objekter) af klassen. Bemærk at syntaksen er anderledes end i sketch-scriptet
     */

    /*
     * tegn() sørger for, at objektet bliver tegnet på canvas. 
     * Her kan evt. indsættes et billede
     */
    this.tegn = function () {
      fill(this.col);
      rect(this.x, this.y, this.bred, this.dyb);
    };
    /*
     * flyt() sørger for at flytte objektet. Her kan bruges enten pile eller WASD
     */
    this.flyt = function () {
      if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
      }

      if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
      }

      if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
      }

      if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
      }
    };

    /*
     * grebet() tjekker om objektet, der sendes som parameter, har position inden for hitboksen
     */
    this.grebet = function (frugt) {
      if ((frugt.y < this.y + 9 && frugt.y > this.y - 2) && frugt.x > this.x + frugt.bred/3 && frugt.x < this.x + this.bred - frugt.bred/3) {
        return true;
      }
      else {
        return false;
      }
    };

  }
} 