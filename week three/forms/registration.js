/* (1)create a sign up/ registration form
using bootstrap
the 4Ts- teams, tools, technology, time
(2)dom selection / declare form variables / grab the elements with javascript
(3)listen for submit button/ form handling
(4) validation--captilize the first letter, validate the email, phone number is valid and passwords match also storing in the database
(5) table 
*/
// full name, username, email, phone number, role, password, confirm password, submit button.

let form= document.getElementById("signupForm"); 
let fullName=document.getElementById("fullName");
let role=document.getElementById("role");
let username=document.getElementById("userName");
let confirmPassword=document.getElementById("confirmPassword");
let phone=document.getElementById("phone");
let email=document.getElementById("email");
let password=document.getElementById("password");
let emailRegex = /^[^\S@]+@[^\S@]+\.[^\S@]$/    //this is a simple email pattern
// the last step is called dom selection

//form handling
/*form.addEventListener("submit", function(){
    validateForm()
})
//validation function 
function validateForm(){
if(emailRegex.test){}
}*/

//validating email
 function validateEmail(email){
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
return emailRegex.test(email);
 }
 let myEmail1 = "britnybridgerton@gmail.com"
 let myEmail2 = "britny bridgerton@gmail.com"
 console.log(validateEmail(myEmail1))
 console.log(validateEmail(myEmail2))
