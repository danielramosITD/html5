// let contactInfo = [];
// 	contactInfo[0] = "Saygin Guven";
// 	contactInfo[1] = 34;
// 	contactInfo[2] = false;
// 	//using just array name will print out all the elements seperated by ,
// 	document.getElementById("here").innerHTML = contactInfo;
	//array methods
	let numbers = [1,2,3,4,5,6,7];
	let display = document.getElementById("push");
	function pushToArray(){
		let userInput = document.querySelector("#numberInput");
		if (userInput.value === "") {
			document.getElementById("warning").innerHTML ="Please enter a number and push after, NO ENTER NO PUSH";
		} else{
			numbers.push(document.querySelector("#numberInput").value);
			display.innerHTML = numbers;
			
		}
}
