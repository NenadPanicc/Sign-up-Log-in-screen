// User class
class User {
    constructor(name, surname, email, password){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}

// UI class
class UI {
    // Alert
    static showAlert(message, className){
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.className = `alert alert-${className}`;
        var container = document.querySelector('#form-div');
        var form = document.querySelector('.form-inline');
        container.insertBefore(div,form);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
    // Clear forms
    static clearForm(){
        document.querySelector("#new-name").value = '';
        document.querySelector("#new-surname").value = '';
        document.querySelector("#new-email").value = '';
        document.querySelector("#new-password").value = '';
    }
    // New User Greeting
    static greetings(){
        var greetingName = document.querySelector("#new-name").value;
        greeting = document.getElementById("greetings").innerHTML = `Welcome, ${greetingName}`;
    }
}

// user list
const users = [];

// Store class
class Store {
    static addUserToList(user){
       users.push(user);
    }
}

// EVENTS

// instatiate a User
document.querySelector("#registerBtn").addEventListener("click", (e) => {
    // Collect form values
    var name = document.querySelector("#new-name").value;
    var surname = document.querySelector("#new-surname").value;
    var email = document.querySelector("#new-email").value;
    var password = document.querySelector("#new-password").value;
    //Validate form
    if(name === '' || surname === '' || email === '' || password === ''){
        UI.showAlert('You have to fill out the form', 'danger');
    }else if(password.length < 8){
        UI.showAlert('Password needs to be at least 8 characters', 'danger');
    }else {
    //Instatiate a user
    const user = new User(name, surname, email, password);
    // Add a user to the array
    Store.addUserToList(user);
    // Clear form
    UI.clearForm();
    // Show success alert
    UI.showAlert('You have successfully registered, you can login now.', 'success');
    console.log(users);
    }
}
);

// Login form
document.querySelector('#login-btn').addEventListener('click', (e) => {
    //Get form values
    var loginEmail = document.querySelector('#email').value;
    var loginPassword = document.querySelector('#password').value;

    for (var i = 0; i < users.length; i++) {
        if (loginEmail == users[i].email) {
          if (loginPassword == users[i].password) {
             window.location.href = "login.html";
            return
          }
          }else {
            UI.showAlert("You have typed your credentials incorrectly", "danger");
        }
    }
});

// Greet the registering user
document.querySelector('#new-name').addEventListener("blur", UI.greetings);


