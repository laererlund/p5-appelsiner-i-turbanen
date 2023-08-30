/* Frugtklasse, som kan bruges til at lave mange appelsiner eller andre frugter fra
 */

class Frugt {
    constructor(x, y, bredde, dybde, xspeed, yspeed, tid) {
  
      this.x = x;
      this.y = y;
      this.bred = bredde;
      this.dyb = dybde;
      this.xspeed = xspeed;
      this.yspeed = yspeed;
      this.col = [250, random(100,230), 15];
      this.tid = tid;                           // tiden fra objektet skabes til det starter bevægelse
  
        /*
         * flyt() sørger for at flytte objektet. Her kan bruges enten pile eller WASD
         */
        this.flyt = function() {
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.yspeed += grav;
        };
        /*
         * tegn() sørger for, at objektet bliver tegnet på canvas. 
         * Her kan evt. indsættes et billede
         */
        this.tegn = function() {
            fill(this.col);
            ellipse(this.x, this.y, this.bred, this.dyb);
        };
        /*
         * udenfor() tjekker om objektet er på canvas eller ej, og sender svaret retur
         */
        this.udenfor = function() {
            if (this.y > height + this.dyb || this.x > width + this.bred || this.x < -this.bred) {
                return true;
            } 
            return false;
        };
        /*
         * udenfor() tjekker om objektet er i fart eller ej, og sender svaret retur
         */
        this.erIgang = function() {
            if(this.tid < 0) {
                return true;
            }
            return false
        }
        /*
         * kanSes() tjekker om objektet skal vises på canvas eller ej, og sender svaret retur
         */
        this.kanSes = function() {
            if(this.tid < 60) {
                return true;
            }
            return false
        }      
    }
}