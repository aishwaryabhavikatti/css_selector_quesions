// let obj={};
// console.log(obj);

// let objAishu={
//     firstname: "Aishu",
//     age: 23,
//     phoneNo:8792583054,
//     lastname:"bhavikatti"
// }
// console.log(objAishu);


let capAmerica={
    Name:'Steves',
    age:43,
    friends:['natasha', 'thor', 'tony'],
    address:{ 
        city:'queens',
        state:'haryana'
    },
    sayHi:function(){
        console.log("cap america says hi..")
    }
}
console.log(capAmerica);

//name 
console.log(capAmerica.Name);
//age
console.log(capAmerica.age);
//friends
console.log(capAmerica.friends);
console.log(capAmerica.friends[1]);
//address
console.log(capAmerica.address);
console.log(capAmerica.address.city);

//sayHi
capAmerica.sayHi();