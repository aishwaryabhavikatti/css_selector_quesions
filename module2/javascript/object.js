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
    isavenger:false,
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
//add key
console.log("object before update",capAmerica);
capAmerica.movies=['avengers','civil war'];
console.log("object afer update",capAmerica);

//delete
delete capAmerica.movies;
 
capAmerica.isavenger=true;

capAmerica.address.state='new york'
console.log(capAmerica);

//second method to access a key
console.log(capAmerica.name);