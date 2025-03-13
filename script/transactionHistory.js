document.getElementById("transaction-box")
.addEventListener("click", function(event){
    handleToggle('cashout', 'none');
    handleToggle('addmoney', 'none');
    handleToggle('transaction-history', 'block');
})