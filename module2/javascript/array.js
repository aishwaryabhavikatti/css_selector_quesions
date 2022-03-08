//empty array
let arr=[];
console.log(arr);

//array with elements
let eleArr=[1,2,3,"string",false,'c',4.5];
console.log(eleArr);
console.log("element at 4th index:"+eleArr[3]);

eleArr[2]="nothing";
console.log(eleArr);

console.log("====================================================")

console.log("array before push"+eleArr);
eleArr.push("new num");
console.log("array after push"+eleArr);


//2.pop
console.log("================================================")
console.log("arra before pop"+eleArr);
eleArr.pop();
console.log("arra after pop"+eleArr)

//3.shift
console.log("array before shift"+eleArr);
eleArr.shift();
console.log("arra after shift"+eleArr);

//4.unshift
console.log("array before unshift"+eleArr);
eleArr.unshift("newly added item");
console.log("array after unshift",eleArr)

//length
let len=eleArr.length
console.log(len)