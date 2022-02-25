
var form = document.getElementById("my-form");

form.addEventListener("submit",getdata);

var us = document.getElementById("user");

function getdata(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    let obj = {
        n:name,
        em:email

    };
    let myobj=JSON.stringify(obj);
    localStorage.setItem("userdetails",myobj);
    
    let getobj=JSON.parse(localStorage.getItem("userdetails"));
    console.log(getobj);

    us.innerHTML = "user details  :  " + getobj['n'] +"<br>" + "email is : "+ getobj['em'];

    
    
}