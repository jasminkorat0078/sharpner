var form = document.getElementById("my-form");

form.addEventListener("submit",getdata);

function getdata(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    localStorage.setItem(name,email);

    console.log(name);
    console.log(email);

    
}