let secondhand=document.querySelector(".s-hand");
let minutehand=document.querySelector(".m-hand");
let hourhand=document.querySelector(".h-hand");
let pic=document.querySelector(".pic");
let time,sec,min,hr,secdegree,mindegree,hrdegree;
function GetTime()
{
  time= new Date();
   sec=time.getSeconds();
   min=time.getMinutes();
   hr=time.getHours();
  
   secdegree=(sec*6)-90;
   mindegree=(min*6)-90;
   hrdegree;
  if(hr>12){
    hrdegree=((hr-12)*30)-90;
  }
  else{
    hrdegree=(hr*30)-90;
  }
  
  secondhand.style.cssText=`transform:rotate(${secdegree}deg);`;
  minutehand.style.cssText=`transform:rotate(${mindegree}deg);`;
  hourhand.style.cssText=`transform:rotate(${hrdegree}deg);`;
  console.log(sec);
}
setInterval(GetTime,1000);
// GetTime();

// console.log(min);
// console.log(hr);
// if(hr>12){
//   hr-=12;
// }