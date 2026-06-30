window.onload = function() {
    const terminal = document.getElementById("terminalText");
    const lines =[
        "> birthday_protocol.exe",
        "",
        "Initializing...",
        "",
        "████████████████████ 100%",
        "",
        "access Granted ✔️",
        "",
        "Hello, Saim. 💚",
        "",
        "One encrypted birthday file has been found.",
        "",
        "Press BEGIN to continue...",
    ];

    let line = 0;
    let char = 0;
    function type() {
        if (line < lines.length) {
            if (char < lines[line].length) {
            terminal.innerHTML += lines[line].charAt(char);
            char++;
            setTimeout(type, 40);
            } else { 
                terminal.innerHTML += "<br>";
                line++;
                char = 0;
                setTimeout(type, 250);         
        }
    } 
}

    type(); 

};
 
const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", function(){

document.querySelector(".terminal").style.display = "none";

document.getElementById("screen2").style.display = "flex";
const screen2= document.getElementById("screen2Text");
const messages = [
    "Decrypting Birthday File..."
];
screen2.innerHTML = "Decrypting Birthday File...";
setTimeout(function(){

document.getElementById("screen2").style.display = "none";

document.getElementById("screen3").style.display = "flex";

},2000);
});
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click",function(){

document.getElementById("screen3").style.display="none";

document.getElementById("story1").style.display="flex";

});
const next1 = document.getElementById("next1");

next1.addEventListener("click",function(){

document.getElementById("story1").style.display="none";

document.getElementById("story2").style.display="flex";

});
const next2 = document.getElementById("next2");

next2.addEventListener("click",function(){

document.getElementById("story2").style.display="none";

document.getElementById("story3").style.display="flex";

});
const next3 = document.getElementById("next3");

next3.addEventListener("click",function(){

document.getElementById("story3").style.display="none";

document.getElementById("story4").style.display="flex";

});

const next4 = document.getElementById("next4");

next4.addEventListener("click",function(){

document.getElementById("story4").style.display="none";

document.getElementById("story5").style.display="flex";

});

const next5 = document.getElementById("next5");

next5.addEventListener("click",function(){

document.getElementById("story5").style.display="none";

document.getElementById("story6").style.display="flex";

});
const next6=document.getElementById("next6");

next6.onclick=function(){
document.getElementById("story6").style.display="none";
document.getElementById("story7").style.display="flex";
}

const next7=document.getElementById("next7");

next7.onclick=function(){
document.getElementById("story7").style.display="none";
document.getElementById("story8").style.display="flex";
}

const next8=document.getElementById("next8");

next8.onclick=function(){
document.getElementById("story8").style.display="none";
document.getElementById("story9").style.display="flex";
}

const next9=document.getElementById("next9");

next9.onclick=function(){
document.getElementById("story9").style.display="none";
document.getElementById("story10").style.display="flex";
}

const next10=document.getElementById("next10");

next10.onclick=function(){
document.getElementById("story10").style.display="none";
document.getElementById("story11").style.display="flex";
}
const next11=document.getElementById("next11");

next11.onclick=function(){

document.getElementById("story11").style.display="none";

document.getElementById("birthdayPage").style.display="flex";

}
const finalMessageBtn = document.getElementById("finalMessageBtn");

finalMessageBtn.onclick = function(){

document.getElementById("birthdayPage").style.display="none";

document.getElementById("finalPage").style.display="flex";

startFinalMessage();

}
function startFinalMessage() {

    const finalLines = [

"If you're reading this...",

"",

"it means you've reached the end. 😊",

"",

"Thank you...💗",

"",

"for walking into my life so unexpectedly.",

"",

"You never asked me to become better...",

"",

"Yet somehow...",

"",

"you inspired me to. 💘",

"",

"I truly hope life gives you",

"every reason to smile,",

"dream bigger,",

"and become everything you wish to be.",

"",

"Just remember...",

"",

"somewhere in the world...",

"",

"there's a bestie",

"who will always be cheering for you. 💙",

"",

"Happy 18th Birthday once again, Saim.",

"",

"✨ End of Transmission ✨"

];
    const area = document.getElementById("finalText");
    area.innerHTML = "";

    let index = 0;

    function typeNextLine() {

        if (index >= finalLines.length) {
            return;
        }

        const p = document.createElement("p");
        p.textContent = finalLines[index];
        area.appendChild(p);

        area.scrollTop = area.scrollHeight;

        index++;

        setTimeout(typeNextLine, 700);
    }

    typeNextLine();

}
