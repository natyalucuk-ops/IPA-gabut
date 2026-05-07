/* loader */
window.onload=()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },2000);
};

/* cursor glow */
const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
  glow.style.left=e.clientX-10+"px";
  glow.style.top=e.clientY-10+"px";
});

/* meteor */
function jatuhkanMeteor(){

  let meteor=document.createElement("div");

  meteor.style.position="fixed";
  meteor.style.top="-100px";
  meteor.style.left=Math.random()*window.innerWidth+"px";
  meteor.style.width="8px";
  meteor.style.height="120px";
  meteor.style.background="linear-gradient(white,orange,red)";
  meteor.style.borderRadius="20px";
  meteor.style.transform="rotate(45deg)";
  meteor.style.boxShadow="0 0 30px orange";
  meteor.style.zIndex="999";

  document.body.appendChild(meteor);

  let pos=0;

  let anim=setInterval(()=>{

    pos+=20;

    meteor.style.top=pos+"px";

    if(pos>window.innerHeight){

      clearInterval(anim);

      meteor.remove();

      ledakan();

      navigator.vibrate?.(300);
    }

  },20);
}

/* ledakan */
function ledakan(){

  let boom=document.createElement("div");

  boom.style.position="fixed";
  boom.style.left="50%";
  boom.style.top="50%";
  boom.style.width="150px";
  boom.style.height="150px";
  boom.style.borderRadius="50%";
  boom.style.background="radial-gradient(yellow,orange,red,transparent)";
  boom.style.transform="translate(-50%,-50%)";
  boom.style.animation="explode 0.5s ease-out forwards";
  boom.style.zIndex="999";

  document.body.appendChild(boom);

  setTimeout(()=>{
    boom.remove();
  },500);
}

/* popup */
function infoBumi(){
  document.getElementById("popup").style.display="block";
}

function tutup(){
  document.getElementById("popup").style.display="none";
}

/* sound */
function playSound(){
  document.getElementById("sound").play();
}

/* click stars */
document.addEventListener("click",(e)=>{

  let star=document.createElement("div");

  star.style.position="fixed";
  star.style.left=e.clientX+"px";
  star.style.top=e.clientY+"px";
  star.style.width="6px";
  star.style.height="6px";
  star.style.borderRadius="50%";
  star.style.background="white";
  star.style.boxShadow="0 0 15px white";
  star.style.zIndex="999";

  document.body.appendChild(star);

  setTimeout(()=>{
    star.remove();
  },500);
});
