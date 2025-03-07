// By-default
document.getElementById("addmoney").style.display="none";
document.getElementById("cashout").style.display="none";



// add money
document.getElementById("add-money-box")
.addEventListener("click", function(event){
    document.getElementById("addmoney").style.display="block";
    document.getElementById("cashout").style.display="none";
})
// cash out
document.getElementById("cashout-box")
.addEventListener("click", function(event){
    document.getElementById("addmoney").style.display="none";
    document.getElementById("cashout").style.display="block";
})