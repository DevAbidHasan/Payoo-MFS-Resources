document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount=document.getElementById("amount").value;
    const convertedAmount=parseFloat(amount);
    const pin=document.getElementById("pin").value;
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    if(pin==="1234") {
        const sum=convertedMainBalance+convertedAmount;
        document.getElementById('main-balance').innerText=sum;
    }
    else {
        console.log('failed');
    }
})