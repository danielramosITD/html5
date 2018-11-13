// let oddNumbers =[];
// let counter = 0;
// let value =1;
// for (counter = 0; counter <10; counter +=1){
// 	oddNumbers[counter] = value;
// 	value +=2;
// }
// document.getElementById("here").innerHTML = oddNumbers

let numberArray = [10,50,97,22,9,13,15,43,75,10,56];
		let average;
		let sum = 0;
		let i;

		//calculate the average of this elements

		//calculate of the items, assign it to sum
		//sum = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3] + numberArray[4]+ numberArray[5]+ numberArray[6] + numberArray[7] + numberArray[8]
		for(i = 0; i < numberArray.length; i += 1){
			//sum = sum + numberArray[i];
			sum += numberArray[i];
		}
		//calculate the average
		average = sum / numberArray.length;

		//print on HTML
		document.getElementById('here').innerHTML = average;
