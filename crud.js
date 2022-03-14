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

document.addEventListener('DOMContentLoaded',refresh);
function refresh(e){
    e.preventDefault();
    console.log("refresh")
    axios.get("https://crudcrud.com/api/ddc1dc13e6d04f7aac488adf716bfad8/user")
        .then(res => {

            for(var i=0;i<res.data.length;i++){
                showonscreen(res.data[i]);
            }
        })
    // for(i=0;i<localStorage.length;i++)
    // {
    //     k=localStorage.key(i);
    //     var getobj = JSON.parse(localStorage.getItem(k));
    //     const parentnode = document.getElementById("userdetail")
    //     const childnode = '<li>Username = ' + getobj['name'] + ' , Email id = '+ getobj
    //     ['email']+'</li>'
        
    //     parentnode.innerHTML=parentnode.innerHTML+childnode;

    // }
}

function showonscreen(user){
    const parentnode = document.getElementById("userdetail")
    const childnode = `<li id = ${user.email}> Username = ' ${user.name}  , Email id = ' ${user.email}<button id='${user.email}' onclick="dlfn(${user.email})" style="float:center">delete</button></li>`
    //const childnode = '<li id = '+user.email`> Username = ${user.name} , Email id = ${user.email}</li>`
    parentnode.innerHTML = parentnode.innerHTML + childnode;
}
