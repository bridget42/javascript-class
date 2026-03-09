/*Steps to creating a registration form
1. Creating a form using bootstrap
2. dom selection/ declare form variables/ grab the elements with Javascript
3. We listen for events ie eventListener eg submit event/ Form handling
4. Validation --Name starts with a capital letter, the email, the phone number is Ugandan, the passwords match ie password and confirm password, storing in database
5. Table visualization
6. Chart visualization
*/
//This below is called dom selection or variable declaration.
let form = document.getElementById("signupForm");
let message = document.getElementById("message");
let tableBody = document.getElementById("userBody")
document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(localStorage.getItem("New Park Ease:"))
    console.log(userData)
    let row = document.createElement("tr")
    row.innerHTML = `<td>${userData.userName}</td>
    <td>${userData.fullName}</td>
    <td>${userData.phoneNumber}</td>
    <td>${userData.email}</td>
    <td>${userData.role}</td>`
    tableBody.appendChild(row)
})

//We are now going to form handling
form.addEventListener("submit", function (event) {
    event.preventDefault()//It prevents the automatic page reloading
    let fullName = document.getElementById("fullName").value.trim();
    let userName = document.getElementById("userName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let role = document.getElementById("role").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    //This is for clearing the message.
    message.textContent = "";
    message.className = "message"

    //We are now going to validate patterns
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^(?:\+256|0)7\d{8}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!phoneRegex.test(phoneNumber)) {
        message.textContent = "Enter valid phone number."
        message.classList.add("error")//error changes the div to red
        return 
    }
    if(!emailRegex.test(email)) {
        message.textContent = "Enter valid email address."
        message.classList.add("error")//error changes the div to red
        return 
    }
    if(!passwordRegex.test(password)) {
        message.textContent = "Enter a strong password."
        message.classList.add("error")//error changes the div to red
        return 
    }
    //The if statement is for validating
    if(!fullName || !email || !password || !confirmPassword || !userName ) {
        message.textContent = "All fields are required."
        message.classList.add("error")//error changes the div to red
        return 
    }
    if(password !== confirmPassword) {
        message.textContent = "Passwords don't match."
        message.classList.add("error")//error changes the div to red
        return 
    }
    if(phoneNumber.length < 10) {
        message.textContent = "Phone number is incorrect."
        message.classList.add("error")//error changes the div to red
        return 
    }
    if(!role) {
        message.textContent = "Please select a user role."
        message.classList.add("error")//error changes the div to red
        return 
    }
    let user = {
        userName: userName,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        role: role
    };
    console.log("New Park Ease:", user)
    localStorage.setItem("New Park Ease:", JSON.stringify(user))
    message.textContent = "Sign up is successful."
    message.classList.add("success")

    form.reset() //It clears the form.
    
  })
