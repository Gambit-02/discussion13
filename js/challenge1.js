var time = Date();
var heading;
var email;

window.addEventListener("load", function(){
        heading = document.querySelector('h1');
        heading.classList.add("heading");
        email = document.querySelector("#emailBox");

this.addEventListener('dblclick', function(){
    alert(time);
});
document.querySelector("#toggle").addEventListener('change', function(){
    if (this.checked) {
        email.classList.remove("hidden");
      } else {
        email.classList.add("hidden");
      }
    });
});