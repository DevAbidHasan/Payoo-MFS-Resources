document.getElementById("cashout-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber=document.getElementById("Account-number").value;
    const amount=getInputValueByID("cashout-amount");
    const pinNumber=getInputValueByID("cashout-pin");
    const mainBalance=getInnerTextByID('main-balance');
    const container=document.getElementById("transaction-container");
    if(accountNumber.length===11){
        if(pinNumber===1234){
            const sum=mainBalance-amount;
            if(sum<0){
                alert('Insufficient Balance, Cashout Failed..!');
            }
            else {
                setInnerTextByIDandValue('main-balance', sum);
                const div=document.createElement("div");
                div.classList.add("border")
                div.classList.add("bg-red-100")
            div.classList.add("px-5")
            div.classList.add("py-3")
            div.classList.add("mb-3")
                div.classList.add("rounded-xl")
                div.innerHTML =`
                <h1 class=" text-xl text-red-600">Cash Out</h1>
                <h3 class="font-bold text-2xl">${amount}</h3>
                <p>Account Number: ${accountNumber}</p>
                
                `
                container.appendChild(div);
            }
        }
        else {
            console.log('Pin is not Valid vaiya');
        }
    }
    else {
        console.log('Account Number vul disos choto vai');
    }
})