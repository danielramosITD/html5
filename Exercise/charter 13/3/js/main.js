	let aDomObj = document.getElementById('test');

		aDomObj.addEventListener('dblclick', addSomeText);

		

	function addSomeText() {
			setInterval(function(){
				console.log("setInterval function runs")}, 1000);
		}
