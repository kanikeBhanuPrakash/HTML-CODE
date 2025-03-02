let obj={
    name:"raj",
    age:30,
    email:"a@a.com",
}
let obj2=obj;
let obj3={
    name:"raj",
    age:30,
    email:"a@a.com",
}
console.log(obj3===obj);
console.log(obj2===obj);
console.log(obj2.email);
console.log(obj['Email']);
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(obj);
let obj4=Object.create(obj);
console.log(obj4);
console.log(obj4.age);

//prototype inheritance
//extending prototype
let arr=[5,4,3];
Array.prototype.Bhanu=function(){
    console.log("Bhanu");
}
arr.Bhanu()
let arr2=[5,7,8];
arr2.Bhanu();
console.log(arr2);