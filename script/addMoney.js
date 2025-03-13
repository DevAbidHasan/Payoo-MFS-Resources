document.getElementById("add-money")
.addEventListener("click", function(event){
    const value =getInputValueByID('amount');
    const pin=getInputValueByID('pin');
    const mainBalance=getInnerTextByID('main-balance');
    // console.log(mainBalance);
    // console.log(value, pin);
    const container=document.getElementById("transaction-container");
    const account=document.getElementById('account-number').value;
    const selectedBank=document.getElementById("allbank").value;
    if(value<0){
        alert('vai aita kuno kotha');
        return;
    }
    
    if(account.length===11) {
        if(pin===1234) {
            const sum=mainBalance+value;
            // document.getElementById("main-balance").innerText=sum;
            setInnerTextByIDandValue('main-balance', sum);
            alert('Add money successful');
            const div=document.createElement("div");
            div.classList.add("border")
            div.classList.add("bg-green-200")
            div.classList.add("px-5")
            div.classList.add("py-3")
            div.classList.add("mb-3")
            div.classList.add("rounded-xl")
            div.innerHTML=`
            <h1 class=" text-xl"><span class="text-green-700">Add Money</span> in ${selectedBank}</h1>
            <h3 class="font-bold text-2xl">${value}</h3>
            <p>Account Number: ${account}</p>
            
            `
            container.appendChild(div)
        }
        else {
            console.log('Pin is wrong vai');
        }
    }
    else {
        console.log('Account Number tik nai vai');
    }
})