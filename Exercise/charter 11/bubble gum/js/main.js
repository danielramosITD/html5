// let numberArray = [6,5,7,8,11,4,19,22,3,12,99,1,123];

// let i 
// for (i=0; i < numberArray.length; i += 1){
// 	let k;

// 	for(k = 0; k < numberArray.length; k += 1){
// 		if(numberArray[k] > numberArray[k+1]){
// 			let temp;
// 			temp =  numberArray[k];
// 			numberArray[k] = numberArray[k+1];
// 			numberArray[k+1] = temp;
// 		}
// 	}
// }

// console.log(numberArray);

let numberArray = [6,5,7,8,11,4,19,22,3,12,99,1,123];

function bubbleSort(theArray){

	let i 
	for (i=0; i < theArray.length; i += 1){
		let k;

		for(k = 0; k < theArray.length; k += 1){
			if(theArray[k] > theArray[k+1]){
				let temp;
				temp =  theArray[k];
				theArray[k] = theArray[k+1];
				theArray[k+1] = temp;
			}
		}
	}
	return theArray;
}

console.log(bubbleSort([6,5,4,3,2,1]));
console.log(bubbleSort(numberArray));