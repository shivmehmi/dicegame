var name = prompt("Enter Your Name Please : ");
document.querySelector("#name").textContent=name;


function shiv(){
var numOne=Math.floor(Math.random()*6)+1;
var iMG="images/dice"+numOne+".png"	
document.querySelector(".img2").setAttribute("src",iMG);
return numOne;
}

function you(){
var numTwo=Math.floor(Math.random()*6)+1;
var iMG="images/dice"+numTwo+".png"	
document.querySelector(".img1").setAttribute("src",iMG);
return numTwo;
}


function randm(){
var num1=shiv();
var num2=you();	
if(num1>num2){
	document.querySelector("#result").textContent="Shiv Won ✌🚩, try again";
}	
	else if(num1==num2){
	document.querySelector("#result").textContent="Draw 💔, try again";	
	}
	else{
	document.querySelector("#result").textContent= name+" Won ✌🚩";	
	}
}
