// Write a JAVASCRIPT Program to find rate based on year and calculate total interest using nested if. (I = PRN/100) Principal Amount (P)
// Interest Rate 
// No. of Years (N)
// (if 3>N<=5 then R is 3 | if 5>N<=8 then R is 5 | if 8>N<=12 then R is 12 | else R is 15)


let P=10000;
let N=6
let R;

if(N>3 && N<5)
{
    R=3;
}else if(N> 5&& N< 8){
    R=5;
}else if(N> 8&& N< 12){
    R=12;
}else{
    R=15;
}

let I=(P*R*N)/100;

document.write("The Principle "+P+ " Years " +N+  " Rate "+R+" Intrest Is => " + I);