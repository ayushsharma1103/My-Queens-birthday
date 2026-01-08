const text="Some people enter your life and slowly become everything… You did that to me, Eshani. On your birthday I don’t just celebrate you — I thank destiny for choosing me to love you. 🖤🌹";

let i=0;
function typeEffect(){
 if(i<text.length){
  document.getElementById("specialLine").innerHTML+=text.charAt(i);
  i++;
  setTimeout(typeEffect,40);
 }
}
window.onload=typeEffect;

let musicStarted=false;
function startMusic(){
 if(!musicStarted){
  const song=document.getElementById("bgm");
  song.play().catch(()=>{});
  musicStarted=true;
 }
}

function playMusic(){ startMusic(); }

const notes=[
"You are my favorite thought every day.",
"Your smile is my safest place.",
"I fall for you a little more each time you laugh.",
"My heart chose you, and it never changed its mind.",
"You are my always."
];

let n=0;
function showNote(){
 startMusic();
 const box=document.getElementById("noteBox");
 box.innerHTML=notes[n];
 box.classList.add("show");
 setTimeout(()=>box.classList.remove("show"),2500);
 n=(n+1)%notes.length;
}

document.addEventListener("click",startMusic);
document.addEventListener("touchstart",startMusic);
document.addEventListener("scroll",startMusic);
