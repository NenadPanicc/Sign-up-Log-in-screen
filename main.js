// Collecting the new user information and other variables
var ime = document.getElementById("registrationName");
var surname = document.getElementById("registrationSurname");
var registerBtn = document.getElementById("registerBtn");
var regEmail = document.getElementById("registrationEmail");
var regPass = document.getElementById("registrationPassword");
var yearOfBirth = document.getElementById("yearOfBirth");
var formDiv = document.getElementById("registrationEmailPassword");
var loginBtn = document.getElementById("loginBtn");
var loginEmail ;
var loginPass ;
var greeting ;
var timeOfDayText ;
var users = [];


// Function calls
registerBtn.addEventListener('click',userInfoCheck);
regEmail.addEventListener('blur', validateEmailAddress);
ime.addEventListener("blur", greetingUser);
loginBtn.addEventListener("click", loginUser);


// Checking the information user has provided
function userInfoCheck(e){
    // password validation
    if(regPass.value.length < 8){
        regPass.style.border="3px solid red";
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("Please enter a minimum of 8 characters for your password."))
        formDiv.appendChild(p);
    } 
    // email validation
    if(validateEmailAddress(regEmail.value) == false){
        regEmail.style.border='3px solid red';
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("Please enter your e-mail correctly."))
        formDiv.appendChild(p);
    }
    // date of birth validation
   if(yearOfBirth.value > 2007){
        yearOfBirth.style.border = "3px solid red";
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("You need to be at least 13 years old for this website."))
        formDiv.appendChild(p);   
   }
   if(yearOfBirth.value == "Year"){
       yearOfBirth.style.border = "3px solid red";
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("Please enter your age."))
        formDiv.appendChild(p);   
   }
   // name validation
   if(ime.value.length == 0){
        ime.style.border = "3px solid red";
        var p = document.createElement('p');
        p.appendChild(document.createTextNode("Please enter your name."))
        formDiv.appendChild(p); 
   }
   // surname validation
   if(surname.value.length == 0){
    surname.style.border = "3px solid red";
    var p = document.createElement('p');
    p.appendChild(document.createTextNode("Please enter your last name."))
    formDiv.appendChild(p); 
}
// Adding new user in to the registry
newUser = {"name":ime.value, "surname":surname.value,"email":regEmail.value,"password":regPass.value,"yearOfBirth":yearOfBirth.value};
users.push(newUser);
console.log(users);

}

// Email validation
function validateEmailAddress(email) {
    var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
   
}
// Greeting depending on the time of day
var hours = new Date().getHours();

if(hours <12){
    timeOfDayText  = "Good morning, " ;
}else if(hours <18){
    timeOfDayText =  "Good afternoon, " ;
}else {
    timeOfDayText =  "Good evening, " ;
}

// Greeting
function greetingUser(){
    // If the user typed in his name, if will show in the greeting message
    if(ime.value.length > 0){ 
      greeting = document.getElementById("registrationText").innerHTML = timeOfDayText + ime.value;
    }
    // If the user deletes his name the text will go back to what it was
    if(ime.value.length == 0){
        greeting = document.getElementById("registrationText").textContent = "Register now.";
       }     
}
// Log in a user
function loginUser() {
    loginEmail = document.getElementById("loginEmail").value;
    loginPass = document.getElementById("loginPass").value;
    for (var i = 0; i < users.length; i++) {
        if (loginEmail == users[i].email) {
          if (loginPass == users[i].password) {
             logInConfirmation = document.getElementById("registrationText2").innerHTML="You have successfully logged in!"
            return
          }else {
              alert("You have typed your credentials incorrectly.")
          }
        }
    }
}
