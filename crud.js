var form = document.getElementById("my-form");




form.addEventListener("submit",getdata);

// var us = document.getElementById("userdetail");
// let i=0;
function getdata(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ulist=document.getElementById('userdetail');
    //ulist.innerHTML=''

    let obj = {
        name,
        email
    };
    axios.post("https://crudcrud.com/api/ddc1dc13e6d04f7aac488adf716bfad8/user",obj).then(res => {
      console.log(res);
  }).catch(err =>console.error(err));

    showonscreen(obj);

    //localStorage.setItem(obj.email,JSON.stringify(obj));
    
}
function showonscreen(user){
    const parentnode = document.getElementById("userdetail")
    const childnode = `<li id = ${user.email}> Username = ' ${user.name}  , Email id = ' ${user.email}<button id='${user.email}' onclick="dlfn(${user.email})" style="float:center">delete</button></li>`
    //const childnode = '<li id = '+user.email`> Username = ${user.name} , Email id = ${user.email}</li>`
    parentnode.innerHTML = parentnode.innerHTML + childnode;
}
