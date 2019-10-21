var rand_int1 = Math.floor(Math.random()*6)+1;
var ran_src1= "images/Dice"+rand_int1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",ran_src1);


var rand_int2 = Math.floor(Math.random()*6)+1;
var ran_src2= "images/Dice"+rand_int2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",ran_src2);

if(rand_int1 > rand_int2){
  document.querySelector("h1").innerHTML=  "Player 1 wins";

}
else if(rand_int2 > rand_int1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML="Refresh Me";

}
