/*
 * Javascript, men en lidt gammeldags form. Nøgleordet "var"
 * erstattes i nyere udgaver af javascript med de to ord 
 * let og const, der betegner hhv. en variabel, som vi starter
 * med at "lade have" en bestemt værdi, og en konstant, som
 * ikke kan ændres under programmets kørsel
 * 
 * Der er opgaver nederst i denne fil!
 * 
 */ 

/* 
 * Først laver vi et nogle variable til at lave en appelsin
 * - en cirkel som vi vil skyde afsted, nede fra venstre hjørne, 
 * og fange i en turban
*/

// Appelsinen
var x = 0;                  // Appelsinens x-koordinat
var y = 550;                // Appelsinens y-koordinat
var rad = 20;               // Appelsin-cirklens radius
var xspeed = 4;             // Appelsinens fart langs x-aksen
var yspeed = -10;           // Appelsinens fart langs y-aksen. 
                            // Negativ, fordi positiv er nedad på skærmen
var startSpeed;             // Appelsinens start-y-hastighed
var col = [200, 100, 0];    // Appelsinens farve

// Turbanen
var turban;                 

// Øvrige
var tid = 150;              // ???? Se opgave 1
var grav = 0.1;             // ????
var score = 0;              // Antallet af appelsiner der er grebet

/* 
 * setup()-funktionen køres een gang, når scriptet starter (eller genstartes)
 */
function setup() {
    createCanvas(750, 600); // Størrelsen af spillet i browservinduet
    newspeed = yspeed;
    x = rad;

    // Nu tildeles variablen turban et indhold: Et nyt objekt af klassen Kurv 
    turban = new Kurv(670, 100, 70, 50, 10); 
}

/*
 * draw()-funktionen kører hele tiden, 60 gange i sekundet (hvis muligt)
 */
function draw() {
    background(0);           // Baggrunden tegnes sort. Indbygget i p5
    move();                  // Funktionen move() er defineret herunder
    checkScore();            // - ligesom de to næste
    display();
}

/*
 * Her skal vi sørge for at appelsinen bevæger sig, men kun hvis den er startet
 */
function move() {
    if (tid <= 0) {          // ???? Se opgave 1
        x += xspeed;
        y += yspeed;
        yspeed += grav;
    }
    // Hvis appelsinen er røget ud over højre kant eller ned under banen:
    if (x > width || y > height) {
        shootNew();
    }
}

/*
 * Her checkes om turbanen har fanget appelsinen. 
 * Hvis ja, tælles scoren og der skydes en ny appelsin afsted
 * 
 * ??? Men hvad gør den første betingelse?
 */
function checkScore() {
    if (yspeed > 0) {
        if (turban.grebet(x, y, rad)) {
            score += 1;
            shootNew();
        }
    }
}

/*
 * Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises
 */
function display() {
    fill(255);               // Sætter tegnefarven til hvid
    text("Score: " + score, width - 80, 30);

    if (tid > 0) {           // ???? Se opgave 1
        tid -= 1;
    }
    if (tid < 100) {         // ???? Se opgave 1
        fill(col);           // Sætter tegnefarven til appelsinens farve
        ellipse(x, y, rad * 2, rad * 2); // og tegner den
    }

    // Til sidst tegnes turbanen - tegn() er defineret i Kurv-klassen. Foreløbig en firkant
    turban.tegn();
}

/*
 * Her skal vi sørge for, at en ny appelsin skydes afsted 
 */
function shootNew() {
    x = rad;                  // nulstil position og y-hastighed
    y = 550;
    yspeed = newspeed;
    xspeed = 6 * random(2);   // lav en ny, tilfældig x-hastighed
    tid = (int)(Math.random() * 400);   //???? Se opgave 1
    console.log(tid);         // skriv den nye værdi i konsollen
}

/*
 * Her lytter vi efter input fra tastaturet og sender 
 * det indtastede bogstav videre som parameter til 
 * turbanens move()-funktion 
 */
function keyPressed() {
    turban.move(key);
}

/*
 * Foreløbig gør denne funktion ikke noget. Kan du bruge den?
 */
function mousePressed() {
    // Kunne fx bruges til at ændre xspeed og yspeed
}

/*
OPGAVER
 Opgave 1 - undersøg hvad variablerne  grav  og  tid  bruges til.
            Skriv det i kommentarer, prøv at se hvad der sker, når
            I laver dem om. 

 Opgave 2 - Prøv at køre spillet. Det er ret dårligt...
            Lav programmet om så man også kan bevæge turbanen mod
            højre og venstre med A- og D-tasterne. Prøv jer frem med
            forskellige løsninger for hvor hurtigt turbanen skal rykke

 Opgave 3 - lav programmet om så det er tilfældigt hvor højt oppe 
            på venstre kant appelsinerne starter. Overvej om man kan 
            sikre, at appelsinen ikke ryger ud af skærmens top men 
            stadig har en "pæn" bane

 Opgave 4 - ret programmet til, så det også angives hvor mange 
            appelsiner man IKKE greb med turbanen

 Opgave 5 - Undersøg hvad scriptet  kurv.js  er og gør, samt hvad de 
            funktioner, scriptet indeholder, skal bruges til. Skriv 
            det som kommentarer oven over hver funktion. Forklar tillige,
            hvad sammenhængen mellem dette script og turbanen i hoved-
            programmet er, og forklar det med kommentarer i toppen af 
            kurv.js

 Opgave 6 - find et billede af en turban og sæt det ind i stedet 
            for firkanten. Find eventuelt også en lyd, der kan afspilles, 
            når appelsinen gribes. Se gerne i "p5 Reference" hvordan, 
            hvis ikke I kan huske det:   https://p5js.org/reference/
            Lav programmet om, så man kan flytte turbanen med musen

 Opgave 7 - lav en Appelsin-klasse, lige som der er en Kurv-klasse. 
            Flyt koden til appelsinen ud i et selvstændigt script.
            Overvej hvad det skal hedde, oghvilke variabler og funktioner, 
            der skal lægges over i det nye script, herunder hvordan det 
            kommer til at berøre turbanen. Skriv jeres overvejelser i 
            kommentarerne

 Opgave 8 - ret programmet til, så der kan være flere appelsiner i 
            luften på en gang, dvs. at der kan skydes en ny appelsin
            afsted før den foregående er forsvundet. Overvej hvordan 
            og hvor hurtigt de skal skydes af, og forklar jeres tanker
            i kommentarerne

 Opgave 9 - ret programmet til, så det kan vindes og/eller tabes ved
            at man griber eller misser et antal appelsiner. Sørg for 
            at der vises en "Game Over"-skærm, som fortæller om man 
            vandt eller tabte, og som giver mulighed for at starte et
            nyt spil.

*/