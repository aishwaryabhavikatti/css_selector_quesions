console.log("a");

let num=10;
console.log(num);

let char='a';
console.log(char);

let str='i am sring';
console.log(str);

let bool=true;
console.log(bool);

for(let i=0;i<=5;i++){
    console.log(i);
}

let count=5;
while(count>0){
    console.log(count);
    count--;
}



let n=5;
let flag=1;
for(let i=2;i<=n-1;i++){
    if(n%i==0){
        flag=0;
        break;
    }
}
if(flag==1){
    console.log("prime");
}else{
    console.log("not prome");
}