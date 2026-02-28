// // console.log("Hello World!");
// // // Reinitialize 
// // var a;//global scope
// // a=10;
// // var a;
// // a=20;
// // let b=10;//block scope
// // b=20;
// // // cant redeclare
// // const c=30;//block scope
// // console.log(a);
// // console.log(b);
// // console.log(c);

// //var num=10;
// // var str="vasavi";
// // var bool=true;
// // var un;
// // var nu=null;
// // var big=123456789980n;
// // var symbol=Symbol('li');

// // console.log(typeof num);
// // console.log(typeof str);
// // console.log(typeof bool);
// // console.log(typeof un);
// // console.log(typeof nu);
// // console.log(typeof big);
// // console.log(typeof symbol);
// // var arr=[1,2,3,4];
// // console.log(typeof arr);
// // var Obj={
// //     name:"vasavi",
// //     dept:"DS"
// // }
// // console.log(Obj);
// // console.log(typeof Obj);

// // Arithmetic operators
// var a=10;
// var b="20";
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a**b)
// console.log(a%b)
// // Relational operator
// var a=10;
// var b="20";
// console.log(a==b)
// console.log(a===b)
// console.log(a!=b)
// console.log(a>=b)
// console.log(a<=b)

// // logical operator
// var a=true;
// var b=false;
// console.log(a&&b)
// console.log(a||b)
// console.log(!a)
// // control statement
// // looping(for,while,dowhile) and conditional(if,else,switch)
// var a=10;
// if(a%2==0){
//     console.log("Even");
// }
// if(a%2===0){
//     console.log("Even");
// }
// if(a%2==0){
//     console.log(`${a} is Even`);//template literal
// }
// else{
// console.log(`${a} is odd`);
// }
// //else..if
// var mark=99;
// if(mark>90){
//     console.log("A grade");
// }else if(mark>70){
//     console.log("B grade");
// }
// else if(mark>35){
//     console.log("C grade");
// }
// else{
//     console.log("fail");
// }
// //ternary operator
// var a=5;
// var result=(a%2==0)?`${a} is Even`:`${a} is Odd`;
// console.log(result);
// var b=80;
// let c=b>=90?"A"
//         :b>=80?"B"
//         :b>=70?"C"
//         :"Fail";
// console.log(c);
// //switch
// var a=6;
// switch(a){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("Tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid");
//     }
// }
// // let name=prompt("enter name");
// // console.log(name)

// //for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// //while loop
// var n=1234;
// var co=0;
// while(n!=0){
//     co++;
//     n=Math.floor(n/10);q
// }
// console.log(co);
// var a=0;
// do{
//     console.log("do while");
// }while(a!==0);
//normal function
// function add(){
// var a=10;
// var b=20;
// console.log(a+b);
// }
// add();
// with parameter
// function add(a,b){
// return a+b;}
// var r=add(10,20);
// console.log(r);
//with return 
// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,20));
//callback function
// var add=(a,b,demo)=>{
//     demo(a+b);
// }
// var r=(r)=>{
//     console.log(r);
// }
// add(10,20,r);
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// var r=(r)=>{
//     console.log(r);
// }
// var a=10;
// var b=20;
// add(a,b,r);
//spread  operator
// var a=[1,2,3,4];
// var a1=[...a,4,5,6];
// console.log(a);
// console.log(a1);
// //destructing opeartor
// var [m1,m2,m3,m4,m5]=[99,98,97,98,96];//array
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var{name,age,dept,contact}={ //object
//     name:"vasavi",
//     age:20,
//     dept:["csd",'cse'],
//     contact:{
//         mobile:54789054,
//         mail:"vasavi@gmail.com"
//     }
    
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

//for...in
// var a=[10,20,3,8]; //array
// for (let i in a){
//     console.log(i,a[i]);
// }
// var obj={
//     name:"vasavi",
//     age:24,
//     isactive:true
// }
// for(let key in obj){
//     console.log(key,obj[key]);5

// }
//for..of
// var a=[1,2,3,4];
// for(let i in a){
//     console.log(i);
// }
// a.forEach((i,index)=>{
//     console.log(i,index);
// })
// var a=[1,2,3,4];
// //map
// // var d=a.map((i)=>(i*2));
// // console.log(d);
// //filter
// var even=a.filter((i)=>(i%2==0));
// console.log(even);
// //reduce
// var total=a.reduce((sum,i)=>(sum+i),0);
// console.log(total);
// var r=a.map((i)=>i**2).filter((i)=>i%2==0).reduce((sum,val)=>(sum+i),0);
// console.log(r);
//hosting
// console.log(a);
// var a=10;
// //for let & const hosting not possible
// add();//function hoisting
// function add(){
//     console.log(10+20);
// }
// //scope
// //global scope
var a=20;//global scope
if(true){
    var b=10;//block scope
}
console.log(a);
console.log(b);
let a=10;//global
if(true){
    let b=20;
}
console.log(a);
console.log(b);