/*
 * Dette script definerer klassen Kurv
 */

/* 
 * Den første del af funktionen er en "konstruktør".
 * Den tager parametrene og konstruerer et nyt objekt 
 * ud fra dem. Værdierne huskes som hørende til netop 
 * dette objekt ved hjælp af nøgleordet this
 */
function Kurv(x, y, bredde, dybde, speed) {
    
    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250,230,150];

    /*
     * Derpå defineres tre funktioner, som kan kaldes på de enkelte instanser 
     * (objekter) af klassen. Bemærk at syntaksen er anderledes end i sketch-scriptet
     * 
     * Hvad mon disse tre funktioner gør, hver især? 
     * Tilføj kommentarer, der fortæller det.
     * Kommenter også selve koden, især mht. de parametre, som funktionerne modtager
     */
    this.tegn = function() {
        fill(this.col);
        rect(this.x, this.y, this.bred, this.dyb);
    }

    this.move = function(tast) {
        if (tast == 'w' || tast== 'W') {
            this.y -= this.speed;
            if (this.y < 0) {this.y = 0};
        }
        if (tast == 's' || tast == 'S') {
            this.y += this.speed;
            if (this.y > height-this.dyb) {this.y = height - this.dyb};
        }
    }

    this.grebet = function(xa, ya, ra) {
        if ((ya < this.y+3 && ya > this.y-3) && xa > this.x+ra && xa < this.x+this.bred-ra) {
            return true;
        }
        else {
            return false;
        }
    }

} 