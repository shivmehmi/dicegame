	
function shiv(){
var n = Math.random();
var numOne=Math.floor((n*6)+1);

if(numOne==1){
	document.querySelector(".img1").setAttribute("src","images/dice1.png");
	
}
else if(numOne==2){
	document.querySelector(".img1").setAttribute("src","images/dice2.png");
	
}
else if(numOne==3){
	document.querySelector(".img1").setAttribute("src","images/dice3.png");
	
}
else if(numOne==4){
	document.querySelector(".img1").setAttribute("src","images/dice4.png");
	
}
else if(numOne==5){
	document.querySelector(".img1").setAttribute("src","images/dice5.png");
	
}
else{
	document.querySelector(".img1").setAttribute("src","images/dice6.png");
	
}return numOne;}
function you(){
var n = Math.random();
var numOne=Math.floor((n*6)+1);

if(numOne==1){
	document.querySelector(".img2").setAttribute("src","images/dice1.png");
	
}
else if(numOne==2){
	document.querySelector(".img2").setAttribute("src","images/dice2.png");
	
}
else if(numOne==3){
	document.querySelector(".img2").setAttribute("src","images/dice3.png");
	
}
else if(numOne==4){
	document.querySelector(".img2").setAttribute("src","images/dice4.png");
	
}
else if(numOne==5){
	document.querySelector(".img2").setAttribute("src","images/dice5.png");
	
}
else{
	document.querySelector(".img2").setAttribute("src","images/dice6.png");
	
}return numOne;}
var name = prompt("Enter Your Name Please : ");
document.querySelector("#name").textContent=name;
function randm(){
	
var num1=shiv();
var num2=you();	
if(num1<num2){
	document.querySelector("#result").textContent="Shiv Won ✌🚩, try again";
}	
	else if(num1==num2){
	document.querySelector("#result").textContent="Draw 💔, try again";	
	}
	else{
	document.querySelector("#result").textContent= name+" Won ✌🚩, try again";	
	}
}