// console.log('hero alom');

document.getElementById('login-btn')
.addEventListener('click',
function(event){
    // console.log(event);
    event.preventDefault();
    const accountNumber=document.getElementById('Account-Number').value;
    // console.log(accountNumber);
    const pin=document.getElementById('Pin').value;
    // console.log(accountNumber,',', pin);
    if(accountNumber.length===11) {
        if(pin==='1234') {
            window.location.href="./main.html";
        }
        else {
            alert('Enter valid Number and PIN');
        }
    }
    else {
        alert('Enter valid Number and PIN');
    }
})
