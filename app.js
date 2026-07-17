const system = document.querySelector(".container");
window.addEventListener("load", ()=>{
let progress = document.getElementById("progress");

let button = document.getElementById("start");

let boot = document.getElementById("boot");


let steps = [

"[█---------] 10%",

"[███-------] 30%",

"[█████-----] 50%",

"[████████--] 80%",

"[██████████] 100%"

];


let i = 0;


let loading = setInterval(()=>{


progress.innerHTML = steps[i];


i++;


if(i >= steps.length){


clearInterval(loading);


setTimeout(()=>{


boot.innerHTML += `

<br><br>

> SYSTEM READY

<br>

> ACCESS GRANTED

`;


button.style.display = "block";


},1000);

}

},800);

});

const connect = document.getElementById("connect");

let connected = false;

const startButton = document.getElementById("start");


if(startButton){

    startButton.addEventListener("click", startSystem);

}


document.getElementById("connect")
.addEventListener("click", startSystem);

function playSystemSound(){

    const audio = document.getElementById("ambience");

    if(audio){

        audio.volume = 0.3;

        audio.play();

    }

}


function startSystem() {

    if (connected) return;

    connected = true;

    playSystemSound();


    const connectText = document.getElementById("connect");


    if(connectText){

        connectText.innerHTML = "> CONNECTING...";

    }


    setTimeout(showLoading, 1000);

}

function showLoading(){

    const container = document.querySelector(".container");


    container.innerHTML = `

        <h1>blood.rec</h1>

        <p>CONNECTING...</p>

        <div class="loading">

            <div class="loading-bar">

                <div class="loading-fill"></div>

            </div>

            <span id="percent">0%</span>

        </div>

    `;


    animateLoading();

}

function animateLoading() {

    const fill = document.querySelector(".loading-fill");
    const percent = document.getElementById("percent");

    let progress = 0;

    const timer = setInterval(() => {

        progress++;

        fill.style.width = progress + "%";

        percent.textContent = progress + "%";

       if (progress >= 100) {

    clearInterval(timer);

    setTimeout(showBoot,600);

}

    }, 40);

}
function showBoot(){

    document.querySelector(".container").innerHTML=`

        <h1>blood.rec</h1>

        <div id="boot"></div>

    `;

    const boot=document.getElementById("boot");

    const lines=[

        "[ OK ] Loading kernel...",

        "[ OK ] Initializing memory...",

        "[ OK ] Connecting network...",

        "[ OK ] Decrypting archive...",

        "[ OK ] Mounting filesystem...",

        "[ OK ] Starting blood.rec OS..."

    ];

    let index=0;

    function nextLine(){

        if(index>=lines.length){

            setTimeout(showLogin,1000);

            return;

        }

        const p=document.createElement("p");

        p.textContent=lines[index];

        boot.appendChild(p);

        index++;

        setTimeout(nextLine,500);

    }

    nextLine();

}
function showLogin() {

    document.querySelector(".container").innerHTML = `

        <h1>[BLD.REC_0x07]</h1>

        <div id="boot"></div>

    `;

    const boot = document.getElementById("boot");

    const messages = [

        "SYSTEM READY",

        "Redirecting to terminal...",

        "Loading interface...",

        "Done."

    ];

    let index = 0;

    function nextMessage() {

if(index >= messages.length){

    setTimeout(showTerminal,1000);

    return;
}
        const p = document.createElement("p");

        p.textContent = messages[index];

        boot.appendChild(p);

        index++;

        setTimeout(nextMessage,800);

    }

    nextMessage();

}
function showTerminal(){

    document.querySelector(".container").innerHTML = `

        <h1>[BLD.REC_0x07]</h1>

        <p class="subtitle">ACCESS TERMINAL</p>

        <div id="terminal">

            <div id="output">

                Type HELP to begin.

            </div>

            <div id="inputLine">

                <span>&gt;</span>

                <input
                    id="terminalInput"
                    type="text"
                    autocomplete="off"
                    autofocus
                >

            </div>

        </div>

    `;

    const input = document.getElementById("terminalInput");

    input.focus();

    input.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            runCommand(input.value);

            input.value="";

        }

    });
    createQuickCommands();

}
function runCommand(command){

    command = command.trim().toLowerCase();

    const output = document.getElementById("output");

    output.innerHTML = "";

    switch(command){

        case "release":

output.innerHTML += `

<br><br>

> SEARCHING DATABASE...

<br>

> ACCESSING ARCHIVE...

<br>

> DECRYPTING FILE: Blood.rec_RELEASE.log

<br><br>

==============================

<br><br>

[Blood.rec]

<br><br>

PROJECT:

<br>

Blood.rec

<br><br>

RELEASE DATE:

<br>

20.07.2026

<br><br>

VERSION:

<br>

1.0.0

<br><br>

STATUS:

<br>

PRE-RELEASE

<br><br>

CREATOR:

<br>

CLASSIFIED

<br><br>

==============================

<br><br>

> FILE UNLOCKED

`;

break;
case "glitch":


document.body.classList.add("glitch-active");


output.innerHTML += `

<br><br>

> WARNING !!!

<br><br>

> VISUAL CORRUPTION DETECTED

<br><br>

> Blood.rec SYSTEM UNSTABLE

<br><br>

> RECOVERING...

`;


setTimeout(()=>{

document.body.classList.remove("glitch-active");


output.innerHTML += `

<br><br>

> SYSTEM RESTORED

`;

},1000);


break;


 case "help":

    output.innerHTML += "<br><br>> help";

    setTimeout(() => {

        output.innerHTML += "<br><br>Searching...";

    },400);

    setTimeout(() => {

        output.innerHTML += "<br>Decrypting files...";

    },1200);

    setTimeout(() => {

        output.innerHTML += "<br>Access granted.";

    },2200);

    setTimeout(() => {

        output.innerHTML += `

        <br><br>

        ==========================

        <br><br>

        HIDDEN REWARD FOUND

        <br><br>

        DISCOUNT CODE

        <br><br>

        <span class="discount-code">

        bloodrec10

        </span>

        <br><br>

        10% OFF

        <br>

        Valid on all catalog beats.

        <br><br>

        ==========================

        `;

    },3200);
default:

output.innerHTML = `

<br><br>

> COMMAND NOT FOUND

<br>

Type HELP to list available commands.

`;

break;
    }

}

/* ===========================
   PARTICLES
=========================== */

const particleContainer = document.getElementById("particles");

function createParticle(){

    const p = document.createElement("div");

    p.className = "particle";

    const size = Math.random()*5+2;

    p.style.width = size+"px";

    p.style.height = size+"px";

    p.style.left = Math.random()*100+"vw";

    p.style.animationDuration = (Math.random()*5+6)+"s";

    p.style.opacity = Math.random();

    particleContainer.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

}

setInterval(createParticle,120);

/* ===========================
   RANDOM GLITCH
=========================== */

setInterval(()=>{

    document.body.classList.add("glitch");

    setTimeout(()=>{

        document.body.classList.remove("glitch");

    },120);

},12000+Math.random()*1000);

function randomGlitch(){

    const chance = Math.random();

    // 20% de chance de acontecer
    if(chance < 0.2){

        const glitch = document.getElementById("glitch-overlay");

        glitch.style.opacity = "1";

        glitch.classList.add("glitch-active");


        setTimeout(()=>{

            glitch.classList.remove("glitch-active");
            glitch.style.opacity = "0";

        }, Math.random() * 500 + 200);

    }

}


// roda a cada alguns segundos
setInterval(randomGlitch, 3000);

function glitchScreen(){

    const glitch = document.getElementById("glitch-overlay");

    glitch.style.opacity = "1";

    glitch.classList.add("glitch-active");


    setTimeout(()=>{

        glitch.classList.remove("glitch-active");

        glitch.style.opacity = "0";

    },100);

}
window.addEventListener("load", ()=>{

    const button = document.getElementById("start");
    const audio = document.getElementById("ambience");


    if(button && audio){

        button.addEventListener("click", ()=>{

            audio.volume = 0.3;

            audio.play();

        });

    }

});
function createQuickCommands() {

    // Evita criar duas vezes
    if (document.querySelector(".quick-commands")) return;

    const quick = document.createElement("div");
    quick.className = "quick-commands";

    quick.innerHTML = `
        <button class="quick-btn" data-command="help">HELP</button>
        <button class="quick-btn" data-command="release">RELEASE</button>
        <button class="quick-btn" data-command="glitch">GLITCH</button>
    `;

    // Procura o terminal
    const output = document.getElementById("output");

    if(output){

        output.parentNode.appendChild(quick);

    }

    // Eventos dos botões
    quick.querySelectorAll(".quick-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            const input = document.getElementById("terminalInput");

            if(input){
                input.value = btn.dataset.command;
                input.focus();
            }

            setTimeout(() => {

                runCommand(btn.dataset.command);

                if(input){
                    input.value = "";
                    input.focus();
                }

            }, 150);

        });

    });

}