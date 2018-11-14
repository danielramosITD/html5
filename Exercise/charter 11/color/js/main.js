function changeColor(){
	let myList = document.getElementsByClassName("listItems");
	let i;
	for (i =0; i<myList.length; i += 1){
		myList[i].style.color = "red";
	}
}

changeColor();

