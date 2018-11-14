function writeMyname(name,lastname){
	console.log(`${name} ${lastname}`);
}

writeMyname("David","Reina");
writeMyname("Vivek","Chalana");
writeMyname("Daniel","Ramos");

// function add(a,b){
// 	document.getElementById("demo1").innerHTML = a+b;
// }

// function sub(a,b){
// 	document.getElementById("demo1").innerHTML = a-b;
// }

// function mul(a,b){
// 	document.getElementById("demo2").innerHTML = a*b;
// }

// function div(a,b){
// 	document.getElementById("demo3").innerHTML = a/b;
// }

// I can use return a/b; but no show the aswer


// let add = (a,b) => {
// 	return a-b;
// }

// console.log(add());//NaN


let add = function (){

let arg = arguments.length;
let i;
let result = 0;
for (i=0; i<arg; i+=1) {
	result+=arguments[i];
}
return result;
}

let mul = function (){

let arg = arguments.length;
let i;
let result = 1;
for (i=0; i<arg; i+=1) {
	result+=arguments[i];
}
return result;
}




console.log(add(5,13));
// sub(5,13);
document.getElementById("demo").innerHTML=mul(5,13);
// div(5,13);



