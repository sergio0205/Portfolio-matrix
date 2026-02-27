const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px Orbitron";

    for (let i = 0; i < drops.length; i++) {

        const text = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);
const blueBtn = document.getElementById("Btn1");
const redBtn = document.getElementById("Btn2");

function entrarPortfolio(colorClass){

    /* desvanecer pantalla matrix */
    document.querySelector(".center").style.transition = "opacity 1.5s";
    document.querySelector(".center").style.opacity = "0";

    canvas.style.transition = "opacity 1.5s";
    canvas.style.opacity = "0";

    setTimeout(() => {

        /* ocultar intro */
        document.querySelector(".center").style.display = "none";
        canvas.style.display = "none";

        /* aplicar tema */
        document.body.classList.add(colorClass);

        /* mostrar portfolio */
        const portfolio = document.getElementById("portfolio");

        portfolio.style.display = "block";

        setTimeout(()=>{
            portfolio.style.opacity = "1";
        },100);

    },1500);
}


blueBtn.onclick = () => entrarPortfolio("blue-theme");

redBtn.onclick = () => entrarPortfolio("red-theme");

const title = document.getElementById("text");

const titleFonts = [

    "Orbitron",
    "Share Tech Mono",
    "Audiowide",
    "Rajdhani",
    "Press Start 2P"

];

let titleFontIndex = 0;

setInterval(() => {

    titleFontIndex++;

    if(titleFontIndex >= titleFonts.length){
        titleFontIndex = 0;
    }

    title.style.fontFamily = titleFonts[titleFontIndex];

}, 300);

const backBtn = document.getElementById("backBtn");

backBtn.onclick = () => {

    const portfolio = document.getElementById("portfolio");

    /* desvanecer portfolio */
    portfolio.style.opacity = "0";

    setTimeout(() => {

        portfolio.style.display = "none";

        /* quitar tema */
        document.body.classList.remove("blue-theme");
        document.body.classList.remove("red-theme");

        /* mostrar intro */
        document.querySelector(".center").style.display = "block";
        canvas.style.display = "block";

        setTimeout(() => {

            document.querySelector(".center").style.opacity = "1";
            canvas.style.opacity = "1";

        }, 100);

    }, 1000);

};