document.getElementById("cashout-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const pin=document.getElementById("cashout-pin").value;
    
    const amount=document.getElementById("cashout-amount").value;
    const convertedAmount=parseFloat(amount);
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    if(pin==="1234"){
        const sum=convertedMainBalance-convertedAmount;
        document.getElementById("main-balance").innerText=sum;
    }
    else {
        alert("You've Entered Wrong Pin! Please Enter valid Pin");
    }
})