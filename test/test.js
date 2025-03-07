document.getElementById("bangladesh-btn")
.addEventListener('click', function(event){
    document.getElementById("bd").style.display="block";
    document.getElementById("usa").style.display='none';
})

document.getElementById("usa-btn")
.addEventListener('click', function(event){
    document.getElementById("bd").style.display="none";
    document.getElementById("usa").style.display="block";
})