const pads= document.querySelectorAll(".drum-pad");

const sli=document.getElementById("sli");

const display= document.getElementById("display");

let power=true;
const powerTxt= document.getElementById("power");

const sonidos={
  Q:"Heater 1",
  W:"Heater 2",
  E:"Heater 3",
  A:"Heater 4",
  S:"Clap",
  D:"Open-HH",
  Z:"Kick-n'-Hat",
  X:"Kick",
  C:"Closed-HH"
};

function escuchar(letra){
  if(!power) return;

  const audio= document.getElementById(letra);

  if(audio){
    audio.currentTime=0;
    audio.play();
    display.innerText=sonidos[letra];
  }
}

pads.forEach((pad)=>{
  pad.addEventListener("click",()=>{
    const l=pad.querySelector("audio").id;

    escuchar(l);
  });
});

document.addEventListener("keydown",(event)=>{
  const letra=event.key.toUpperCase();

  if(sonidos[letra]){
    escuchar(letra);
  }
});



sli.addEventListener("change",()=>{
  power = sli.checked;

   powerTxt.textContent = power ? "Power: On":"Power: Off";
   if(!power)
    display.textContent="";
   
});
