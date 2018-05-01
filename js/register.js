var lastname = document.getElementById("lastname");
var confirmName = document.getElementById("confirmName");

lastname.addEventListener('focus',function(e){
    confirmName.className = "ok";
}, true);

lastname.addEventListener('onmouseover',function(e){
    e.target.title = "Entrez votre nom en Majiscule";
}, true);
