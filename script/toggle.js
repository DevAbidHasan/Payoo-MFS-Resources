// By-default
document.getElementById("addmoney").style.display="none";
document.getElementById("cashout").style.display="none";
document.getElementById("transaction-history").style.display="none";

// add money
document.getElementById("add-money-box")
.addEventListener("click", function(event){
    handleToggle("addmoney", "block");
    handleToggle("cashout", "none");
    handleToggle("transaction-history", "none");
})
document.getElementById("cashout-box")
.addEventListener("click", function(event){
    handleToggle("addmoney", "none");
    handleToggle("transaction-history", "none");
    handleToggle("cashout", "block");
})

