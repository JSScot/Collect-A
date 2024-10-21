const apples = document.getElementsByClassName("apple");
console.log(apples);

let play = document.getElementById("play");
play.addEventListener("click",game)

//changed triangle
function white()
{

  document.getElementById("triangle").style.filter="invert(100%)"
}

function black()
{
  document.getElementById("triangle").style.filter="invert(0%)"
}

let scene = 0;



function game()
{
  
  scene++;
  switch(scene)
    {
        //title screen
        case 0:
        play.style.visibility="visible";
  document.getElementById("title").style.visibility="visible";
        break;
        //pico talking and giving backstory
      case 1:
      play.style.visibility="hidden";
  document.getElementById("title").style.visibility="hidden";
      let two = document.getElementsByClassName("second")
        for(let i = 0; i < two.length; i++)
        {
          two[i].style.visibility="visible";
        }
        document.body.style.backgroundImage="url(backdrops/hallway.jpeg)"
      break;
        //actual game to collect apples
      case 2:
        
        let dos = document.getElementsByClassName("second")
        for(let i = 0; i < dos.length; i++)
        {
          dos[i].style.visibility="hidden";
        }
        let app = document.getElementsByClassName("apple")
        for(let b = 0; b < app.length; b++)
        {
          app[b].style.visibility="visible";
        }
        let p = document.getElementById("pico")
        {
          p.style.visibility="visible";
        }
        document.getElementById("timer").style.visibility="visible";
        window.addEventListener("keydown", checkKeyPressed, false); 
        console.log(timedCount())
        
      break;

        //losing ending 
      case 4:
        window.removeEventListener("keydown", checkKeyPressed, false);
        ap = document.getElementsByClassName("apple")
        for(let b = 0; b < ap.length; b++)
        {
          ap[b].style.visibility="hidden";
        }
         pi = document.getElementById("pico")
        {
          pi.style.visibility="hidden";
        }
        document.getElementById("timer").style.visibility="hidden";
        document.body.style.backgroundImage="url(backdrops/explode.jpeg)";
        document.getElementById("title").style.visibility="visible";
        document.getElementById("title").style.color="white"
      document.getElementById("title").style.backgroundColor="black"
        document.getElementById("title").innerHTML="He blew up all the apples. Thanks a lot slowpoke!"
        play.style.visibility="visible";
        play.addEventListener("click",game)
        play.innerHTML="Retry?";
        
        
      break;
      case 5:
        //reloads page to start 
        window.location.reload();
        break;
      default:
      alert("hi");
      
    }
}

let next = document.getElementById("next")
next.addEventListener("click", dialoge);
let say = 0;

function dialoge()
{
  let text = document.getElementById("text");
  say++
  switch(say)
    {
      case 1:
      text.innerHTML="You see that kid over there shaking like crazy?"
      break;
      case 2:
      text.innerHTML="He took all my apples and threw them on the floor cause I called him annoying. ";
      break;
      case 3:
      text.innerHTML="Not only that. He has explosives and will blow up my apples."
      break;
      case 4:
      text.innerHTML="Does he not have morals? A soul??"
      break;
      case 5:
      text.innerHTML="Anyways he's gonna explode my apple in 15 seconds, so be quick"
      break;
        case 6:
        text.innerHTML="LETS GET THE APPLES"
        break;
      case 7:
      game()
      break;
        
    }
}





//randomly places apples on screen
for (let i = 0; i < apples.length; i++)
  {
    let x = Math.round((Math.random() * 1241)+50)
    let y = Math.round((Math.random() * 501)+50)
    apples[i].style.left = x+"px";
    apples[i].style.top = y+"px";
    console.log("apple" + i + " is at " + x + ", " + y)
  }




//gain access to the left property of charater
const pico = document.getElementById("pico");
const thing = window.getComputedStyle(pico, null);
let x = thing.getPropertyValue("left");
console.log(x)
let l = parseInt(x) 

//gain access to the top property of charater
const element2 = document.getElementById("pico");
const thing2 = window.getComputedStyle(element2, null);
let w = thing2.getPropertyValue("top");
console.log(w)
let t = parseInt(w) 

//allows character to move
function checkKeyPressed(evt) {

  if(evt.keyCode == "39" || evt.keyCode == "68")
  {//right
    l= l+15;
  document.getElementById("pico").style.left = l+"px";
    }
  else if(evt.keyCode == "37"||evt.keyCode == "65")//left
  {
    l= l-15;
    document.getElementById("pico").style.left = l+"px";
  }
  else if(evt.keyCode == "38"||evt.keyCode == "87")//up
    {
      t= t-15;
      document.getElementById("pico").style.top = t+"px";
    }
  else if(evt.keyCode == "40"||evt.keyCode == "83")//down
    {
      t= t+15;
      document.getElementById("pico").style.top = t+"px";
    }
  takeApple()
  win()
}


//allows character to take apples
function takeApple()
{
  for(let i = 0; i < apples.length; i++)
    {
      //get value of left
      let main = apples[i];
      let that = window.getComputedStyle(main, null);
      let X = that.getPropertyValue("left");
      let valueX = parseInt(X) 

      //get value of top
      let main2 = apples[i];
      let that2 = window.getComputedStyle(main2, null);
      let Y = that2.getPropertyValue("top");
      let valueY = parseInt(Y) 
      
  if( (l < valueX+45 && l > valueX-45) && (t < valueY+55 && t > valueY-55))
  {
    if(apples[i].style.visibility = "visible")
    {
      apples[i].style.visibility = "hidden";
    console.log("pico was at " + l + ", " + t+"\n" + "apple was at " + valueX + ", " + valueY)
    }
    
    
    
  }
    }
}


let timeout;
//counts how many apples were collected

let taken = [false,false,false,false,false,false]
function win()
{

  for(let i = 0; i < apples.length; i++)
    {
  let these = apples[i];
  let that = window.getComputedStyle(these, null);
  let appear = that.getPropertyValue("visibility");
      if(appear == "hidden")
      {
        taken[i]= true;
      }
    }
  let num = 0;
  for(let i = 0; i < taken.length; i++)
  if(taken[i]==true)
  {
    num++;
  }
  else
  {
    num=0;
  }
  if(num == 6 )
  {
    clearTimeout(timeout)
    winner();
  }
}

let counter = 15;





function timedCount() {
  if(counter==0 )
  {
    taken=[false,false,false,false,false,false,false]
    scene++;
    game();
  }
  else{
    if(counter==3)
    {
document.getElementById("timer").style.backgroundImage="linear-gradient(red, orange,brown,black)";
    }
document.getElementById("timer").innerHTML = counter;
  counter--;
  timeout = setTimeout(timedCount, 1000);
  }
}

function where()
{
  alert(l+","+t)
}

//function win. If all elements are hidden. win
function winner()
{
  window.removeEventListener("keydown", checkKeyPressed, false);
    let stop = document.getElementById("pico")
      stop.style.visibility="hidden";
  /*let go = document.getElementById("firstpico")
  go.style.visibility="visible";
  let badkid = document.getElementById("bully")
  badkid.style.visibility="visible";
  badkid.src="ppl/bad.jpeg";*/
    document.getElementById("timer").style.visibility="hidden";
    let title=document.getElementById("title");
  document.body.style.backgroundImage="url(backdrops/recess.jpeg)";
    title.style.visibility="visible";
    title.style.color="black";
    title.style.backgroundColor="white";
  title.style.zIndex="4";
    title.innerHTML="YOU SAVED THE APPLES!!\n Now you can keep your apples in peace.\n You had "+counter+" seconds left!"
  scene=4;
    play.style.visibility="visible";Againay.style.zIndex="4";
    play.addEventListener("click",game)
    play.innerHTML="Retry?";
}

//