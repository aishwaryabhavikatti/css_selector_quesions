function sayHello(){
    console.log("hello");
}

sayHello();

function sum(num1,num2){
    let addition=num1+num2;
    console.log(addition);
}
sum(3,4);


function mul(num1,num2){
    return num1*num2;
}
let ans=mul(2,3);
console.log(ans)

let a=function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5))