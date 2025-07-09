// name = undefined;
// console.log(name);

// var I = "Utkarsh Singh", you = "AV"
// console.log(I, "still loves", you)

// alert("Saying hi from a different file!"); 

// var ful = "Ut";
// var age = 20;
// if(ful.toUpperCase()=="ut"){
//     console.log("test 1 pass")
//     if(age==20){
//         console.log("test 2 pass")
//     }else{
//         console.log("test 3 pass")
//     }
// }else{
//     console.log("test 4 pass")
// }
// x = ful.charAt(0).toLowerCase() + ful.slice(1);
// console.log(x)

// alert("Hi")
// console.log("Hello")
// prompt("Hey")

// x=Math.random()
// console.log(x*100)

// let first = "mary"
// first = "saini"
// console.log(first)

// let str = "Hello, what's your name? Is it \"Mike\"?"; 
// console.log(str); 
// let str2 = 'Hello, what\'s your name? Is it "Mike"?'; 
// console.log(str2); 

// let first = undefined;
// let last = null;
// console.log("same things", last == first);

// testVariable = 1; 
// variableTypeTest1 = typeof testVariable; 
// variableTypeTest2 = typeof(testVariable); 
// console.log(variableTypeTest1); 
// console.log(variableTypeTest2);

// x = "Hello"
// y = 452.5425
// z = 2456265356556552985698
// a = "45ghgb45g"
// b = true
// console.log("type is ", typeof x);
// console.log("type is ", typeof y);
// console.log("type is ", typeof z);
// console.log("type is ", typeof a);
// console.log("type is ", typeof b);


// x = "hi"
// y = " hi"
// console.log(x+y)


// x = [5, "array", 465, true];
// console.log(typeof x[0]);
// console.log(typeof x[1]);
// console.log(typeof x[2]);
// console.log(typeof x[3]);
// console.log(typeof x[4]);


// arr = ["Toyota", "Maruti", "Alto"," MG"]
// console.log(arr)
// arr[0] = "Tesla"
// console.log(arr)
// arr[4] = "konigsegg"
// console.log(arr)


// rain = false;
// if(rain){
//     console.log("Take your umberella")
// }
// else{
//     console.log("Enjoy your day today")
// }


// let hobby = "dancing";
// if(hobby == "coding"){
//     console.log("** I love coding too! **");
// } else {
//     console.log("** Can you teach me that? **");
// }


// let age = 10;
// let cost = 0;
// if(age < 3){
//     cost = 0;
//     message = "free Access"
// }
// else if(age > 3 && age < 12){
//     cost = 5;
//     message = " Please pay 5 dollars"
// }
// else if(age > 12 && age < 65){
//     cost = 10;
//     message = "Please pay 10 dollars"
// }
// else{
//     cost = 7;
//     message = "Please pay 7 dollars"
// }
// console.log(message);
// console.log("you have to pay "+cost)


// let age = 19;
// let cost = 0;
// age < 18 ? console.log("denied") : console.log("allowed")


// age = 19;
// switch(true){
//     case (age < 18):
//         console.log("denied");
//         break;
//     case (age > 18):
//         console.log("allowed");
//         break;
//     default:
//         console.log('Invalid age')
//         break;
// }


// // fibonacci series
// let n1 = 0;
// let n2 = 1;
// let temp;
// fibonacciSeries = [];
// while(fibonacciSeries.length < 100){
//     fibonacciSeries.push(n1);
//     temp = n1 + n2;
//     n1 = n2;
//     n2 = temp;
// }
// console.log(fibonacciSeries)


// let Name = ["Amit", "Aniket", "vishal", "sachin", "rohit", "virat", "dhoni", "yuvraj", "Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for(let i = 0; i < Name.length; i++){
//     if(Name[i].startsWith("A")){
//         delete Name[i];
//         continue;
//     }
//     console.log("Hello " + Name[i])
// }


// let car1 = {
//     Brand: "Lamborghini",
//     Model: "Aventador",
//     color: "Yellow",
//     Year: 2024,
//     isElectric: "False"
// }
// let car2 = {
//     Brand: "Tesla",
//     Model: "Cybertruck",
//     color: "steel blue",
//     year: 2025,
//     isElectric: "True",
//     terrain: "off-road"
// }
// let array1 = Object.keys(car1, car2);
// let array2 = Object.keys(car2);
// console.log(array1);


// let groups = [ 
//     ["Martin", "Daniel", "Keith"], 
//     ["Margot", "Marina", "Ali"], 
//     ["Helen", "Jonah", "Sambikos"],
//   ]; 
// for (let i = 0; i < groups.length; i++) { 
//     let matches = 0; 
//   for (let j = 0; j < groups[i].length; j++) { 
//     if(groups[i][j].startsWith("M")){ 
//         matches++; 
//       } else { 
//         continue; 
//       } 
//     if (matches === 2){ 
//         console.log("Found a group with two names starting with an");
//         console.log(groups[i]); 
//         break; 
//         } 
//     } 
// } 
// for (let group of groups){ 
//   for (let member of group){ 
//     if (member.startsWith("M")){ 
//       console.log("found one starting with M:", member); 
//       break;
//     } 
//   } 
// }


// function say(){
//     console.log("Hello")
// }
// say()


// const greet = () => console.log("hello ");
// greet()


// const gret = name => console.log("hello " + name);
// console.log(gret("Utkarsh"))


// const arr = ["squirrel", "alpaca", "buddy"]; 
// arr.forEach(e => console.log(e));


// let arr = [5, 6, 7, 8];
// let msg = [1, 2, 3, 4, ...arr, 9, 10];
// console.log(msg)


// function sub(a, b){
//     return a - b;
// }
// let arr = [50, 20];
// console.log(sub(...arr))


// function some(...num){
//     let total = 0;
//     for(let i = 0; i < num.length; i++){
//         total += num[i];
//         console.log(num[i] +" => " + total)
//     }
//     console.log(total)
// }
// some(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// function confuseReader() { 
//     x = "Guess my scope..."; 
//     console.log("Inside the function:", x); 
//   } 
//   confuseReader(); 
//   console.log("Outside of function:", x); 


// function getRecursive(nr) { 
//     console.log(nr); 
// if (nr > 0) { 
//     getRecursive(--nr); 
//    } 
// } 
// getRecursive(3);


// class Classname{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let obj = new Classname("Avantika", 20);
// console.log(obj)


// class Dog{
//     constructor(name, weight, color, breed, age, ismale){
//         this.name = name;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//         this.age = age;
//         this.ismale = ismale;
//     }
// }
// let dog = new Dog("buddy", 20, "fairy brown", "Labrador", 2, true);
// console.log(dog.name, "is a", dog.breed, "and weight", dog.weight, "kg. His color is", dog.color, "and his is", dog.ismale ? "male" : "female")


// class person{
//     #firstname;
//     #secondname;
//     constructor(firstname, secondname){
//         this.#firstname = firstname;
//         this.#secondname = secondname;
//     }
// }
// let p = new person("Maria", "Saga")
// console.log(p.firstname);


// class person{
//     #firstname;
//     #secondname;
//     constructor(firstname, secondname){
//         if(firstname.startsWith("M")){
//             this.firstname = firstname;
//         }else{
//             this.firstname = "M" + firstname;
//         }
//         this.secondname = secondname;
//     }
// }
// let p = new person("Maria", "Saga");
// console.log(p.firstname);
// let q = new person("Aniket", "Danish");
// console.log(q.firstname);


// class person{
//     #firstname;
//     #secondname;
//     cosntructor(firstname, secondname){
//         this.#firstname = firstname;
//         this.#secondname = secondname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname = firstname;
//     }
//     get secondname(){
//         return this.#secondname;
//     }
//     set secondname(secondname){
//         this.#secondname = secondname;
//     }
// }
// let p = new person("Maria", "Sam")
// console.log(p.firstname)


// class vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class Motor extends vehicle{
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel");
//     }
// }
// let m = new Motor("Yellow", 40, 180, 60)
// let v = new vehicle("Silver_Grey", 45, 180);
// console.log(v.color);
// console.log(v.currentSpeed  + " kmph");
// console.log(v.maxSpeed + " kmph");
// acc = v.accelerate(40);
// console.log(v.currentSpeed + " kmph");
// console.log(m.doWheelie(40));
// let m = new Motor("Black", 0, 250, "gasoline");
// console.log(Motor.color);
// m.accelerate(50);
// m.move();


// class person{
//     constructor(firstname, secondname){
//         this.firstname = firstname;
//         this.secondname = secondname;
//     }
//     greet(){
//         console.log("Hi there!");
//     }
// }
// let p = new person ("Maria", "Sighna");
// person.prototype.introduce = function(){
//     console.log("Hi, I'm", this.firstname())
// }


// console.log("Hello")
// x = prompt()
// console.log(x)


// let s = "Hello"; 
// console.log( 
//   s.concat(" therethere!")
//   .toUpperCase()
//   .replace("THERE!", "! yoo")
//   .concat(" You're amazing!") 
// );


// let x = "7"; 
// console.log(Number.isNaN(x));  //false
// console.log(isNaN(x));   //true


// let uri = "%22";
// let encoded_uri = encodeURI(uri); 
// console.log("Encoded:", encoded_uri); 
// // let decoded_uri = decodeURI(encoded_uri);
// let decoded_uri = decodeURI(uri) 
// console.log("Decoded:", decoded_uri); 


// let x = "6.5";
// let int = parseInt(x);
// let float = parseFloat(x);
// console.log("Type of", int, "is", x);
// console.log("Type of", float, "is", x);


// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function ch(element, index){
//     return typeof element == "string";
    
// }
// let filter = arr.filter(ch);
// console.log(filter);
// console.log(arr.every(ch));


// arr = ["grapefruit", "orange", "pineapple", "apple", "banana"];
// arr.copyWithin(0, 3, 5);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.map(x => x**2);
// console.log(arr1);


// let bb = ["so", "do", "you", "know", "about", "matrix", "movie", "?"];
// console.log("1.   { " + bb.join(" ")+" }");
// console.log("2.   { " + bb.lastIndexOf("matrix")+" }");
// console.log("3.   { " + bb.pop()+" }");
// console.log("4.   { " + bb.push("yes")+" }");
// console.log("5.   { " + bb+" }");
// console.log("6.   { " + bb.shift()+" }");
// console.log("7.   { " + bb.unshift("no")+" }");
// console.log("8.   { " + bb+" }");
// console.log("9.   { " + bb.slice(0, 3)+" }");
// console.log("10.  { " + bb.splice(0, 3)+" }");
// console.log("11.  { " + bb+" }");
// console.log("12.  { " + bb.sort()+" }");
// console.log("13.  { " + bb.reverse()+" }");
// console.log("14.  { " + bb.toString()+" }");
// console.log("15.  { " + bb.toLocaleString()+" }");


// let s1 = "Hello ";
// let s2 = "AV";
// console.log(s1.concat(" ", s2));

// let r = s1.concat(s2);
// let s = r.split(" ");
// console.log(s);

// let s3 = "strawberry,watermelon,apple,banana,orange";
// let s4 = s3.split(",");
// console.log(s4);


// let poem = "When I see my fellow, I say hello";
// let index_re = poem.indexOf("Lo"); 
// console.log("location of lo is", index_re);


// let searchStr = "When I see my fellow, I say hello"; 
// let pos = searchStr.search("Lo"); 
// console.log("location of lo is", pos);


// let p = "Bye!";
// let y = "hi!";
// console.log(p.toUpperCase());
// console.log(y.toLowerCase());
// console.log(y.charAt(0).toUpperCase() + y.slice(1));


// let x = "HI HOW ARE YOU?";
// let f = x.toLowerCase();
// let g = f.charAt(0).toUpperCase().concat(f.slice(1));
// console.log(g);


// let p = "You are doing a great job, keep up the good work";
// let b = p.toLowerCase().startsWith("you");
// console.log(b);


// let p = "you are doing awesome work";
// console.log(p);
// console.log(p.replace("awesome", "great"));


// let p = "I love javascript";
// p = p.toLowerCase();
// let arr = ["a", "e", "i", "o", "u"];
// let arr1 = ["0", "1", "2", "3", "4"];
// for(let i = 0; i<arr.length; i++){
//     p = p.replaceAll(arr[i], arr1[i]);
// }
// p = p.charAt(0).toUpperCase() + p.slice(1);
// console.log(p);


// let x = 3;
// let str = "infinite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite("infinite"));
// console.log(isFinite(10/0));


// let x = 1.23456789;
// let newx = x.toFixed(6);
// console.log(newx);


// let x = 1.123456789;
// let newx = x.toPrecision(3);
// console.log(newx);


// let h = [12,45,5,89,5,6,2,4,55,24,5,52,4,5,5,24,5,64,5,854,2,5];
// h1 = Math.max(...h);
// console.log(h1);


// let h =[12,45,5,89,5,6,4,55,24,5,52,4,5,5,24,5,64,5,854,50];
// h = Math.min(...h);
// console.log(h);


// let x = 256;
// x = Math.sqrt(x);
// console.log(x);


// let y = [5, 3];
// y = Math.pow(...y);
// console.log(y);


// let x = 5.78;
// let y = 6.23;
// x1 = Math.round(x);
// y1 = Math.round(y);
// console.log("X:", x, "Becomes", x1);
// console.log("Y:", y, "Becomes", y1);


// var x = 5.78;
// var y = 6.23;
// x1 = Math.ceil(x);
// y1 = Math.ceil(y);
// console.log("X:", x, "Becomes", x1);
// console.log("Y:", y, "Becomes", y1);


// var x = 5.78;
// var y = 6.23;
// x1 = Math.floor(x);
// y1 = Math.floor(y);
// console.log("X:", x, "Becomes", x1);
// console.log("Y:", y, "Becomes", y1);


// let x = 2;
// let e = Math.exp(x).toPrecision(6);
// console.log(e);
// let l = Math.log(x).toFixed(5);
// console.log(l);


// var Time = new Date();        //tells the correct time
// console.log(Time);
// var Time = Date.now();       //tells the UNIX time
// console.log(Time);
// var Time = new Date(1000);   //tells the starting time of UNIX
// console.log(Time);


// var d = new Date();
// //local time zone
// console.log("Day of week: ", d.getDay());
// console.log("Day of month: ", d.getDate());
// console.log("Month: ", d.getMonth());
// console.log("Year: ", d.getFullYear());
// console.log("Seconds: ", d.getSeconds());
// console.log("Milliseconds: ", d.getMilliseconds());
// console.log("Time: ", d.getTime());

// //Universal time zone
// console.log("Day of week: ", d.getUTCDay());
// console.log("Day of month: ", d.getUTCDate());
// console.log("Month: ", d.getUTCMonth());
// console.log("Year: ", d.getUTCFullYear());
// console.log("Seconds: ", d.getUTCSeconds());
// console.log("Milliseconds: ", d.getUTCMilliseconds());
// console.log("Time: ", d.getTime());


// var d = new Date();
// let d1 = Date.parse(d);
// console.log(d1);


// var d = new Date();
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());


// console.dir(window);
// window.history.go(-1);
// console.dir(window.navigator);
// console.dir(document);


// const elel = document.querySelector('h1');
// console.dir(elel);


// document.addEventListener('DOMContentLoaded', function() {
//     console.dir(document.body.children[0]);
//     console.dir(document.body);
// });


// document.addEventListener('DOMContentLoaded',function(){
// console.dir(document.body.children);
// });


// document.addEventListener('DOMContentLoaded',function(){
// document.body.children.greeting.innerText = "Bye!";
// });


// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.getElementById("two"));
// });


// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.getElementsByTagName("div"));
//     console.dir(document.getElementsByTagName("div"));
// });


// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.getElementsByTagName("div").item(0));
//     console.dir(document.getElementsByTagName("div").item(0));
// });


// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.getElementsByTagName("div").namedItem("three"));
//     console.dir(document.getElementsByTagName("div").namedItem("three"));
// });


// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.getElementsByClassName("example"));
//     console.dir(document.getElementsByClassName("example"));
// });


// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.querySelectorAll("h1"));
// });


// function stop(el){
//     alert("Ouch! stop it");
//     console.log(el.parentElement);
//     document.body.children.one.innerText = "I said dont click here";
// };


// function rain(){
//     let divs = document.getElementsByTagName("div");
//     for(let i = 0; i,divs.length; i++){
//         divs[i].style.backgroundColor = divs[i].id;
//     }
// }


// function disappear(){
//     document.getElementById("shape").classList.add("hide");
//     document.getElementById("button").classList.add("hide");
// }


// function disappear(){
//     document.getElementById("shape").classList.remove("blue");
// }


// function change(){
//     document.getElementById("shape").classList.toggle("blue");
// }


// function change(){
//     let el = document.getElementById("shape");
//     el.setAttribute("style", "border : 1px solid black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");
// }


// window.onload = function(){
//     document.getElementById("button").addEventListener("click", change);
// }
// function change(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     document.getElementById("square").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }


// function change(){
//     let el = document.createElement("p");
//     el.innerText = Math.floor(Math.random() * 100);
//     document.body.appendChild(el);
// }