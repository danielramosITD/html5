	let aDomObj = document.getElementById('test');

		aDomObj.addEventListener('dblclick', startCounting);

		

let t = 0;	
	let myVariable = setInterval(function(){ 
		startCounting() ;
	}, 1000);

	function startCounting() {
	    document.getElementById("test").innerHTML = t+=1;
	    
	    if(t===10){
		clearInterval(myVariable);
		}
	}
