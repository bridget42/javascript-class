/*they are five things that javascript does for us with dom
c- creating elements
r-reading elements
u- updating elements
d-deleting elements
r- respondong/ listening to events
*/
//everything captured from html should be at top  of the file

let button=document.getElementById("myButton");
let paragrapgh=document.getElementById("para")
let allTitles =document.getElementsByTagName("h1");

paragrapgh.textContent="hello world";

console.log(allTitles.length);

for(let i =0; i < allTitles.length; i++){
    console.log(allTitles[i]);
}
 
button.addEventListener("click", function(){
    alert("Button was clicked!");
});