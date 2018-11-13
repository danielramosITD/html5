// let student = ["leonardo", "Raphael", "Donatelo", "Michelangelo"];
// // document.getElementById("demo").innerHTML = student[2];

// let userDetails =[];
// userDetails[0] = prompt("What is your name?");
// userDetails[1] = prompt("What is last name?");
// userDetails[2] = prompt("How old are you?");
// document.getElementById("demo").innerHTML = userDetails[0] + " " + userDetails [1] + " " + userDetails[2];




function myFunction(event){
          event.preventDefault();
         let name = document.getElementById('nameinput').value;
         let lastName = document.getElementById('lastNameInput').value;
         let emailInput = document.getElementById('emailInput').value;


         document.getElementById('inputSummary').innerHTML = 
         `Hello ${name} ${lastName}, thank you for filling out and submitting the form. You will receive an email to the provided email: <h4>${emailInput}</h4>`;
     }