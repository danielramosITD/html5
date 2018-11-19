	let aDomObj = document.getElementById('test');

		aDomObj.addEventListener('dblclick', addSomeText);

		function addSomeText() {
			aDomObj.innerHTML = "hello Javascript with event handler";
		}

		// function addSomeText() {
		// 	setTimeout(function(){
		// 		aDomObj.innerHTML = "hello Javascript with event handler"; }, 3000);
		// }