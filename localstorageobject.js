
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
    showonscreen(obj);

    localStorage.setItem(obj.email,JSON.stringify(obj));
    
}

function showonscreen(user){
    

    if (localStorage.getItem(user.email) !== null){
        removeuserfromscreen(user.email);
    }
    const parentnode = document.getElementById("userdetail")
    const childnode = `<li id = ${user.email}> Username = ' ${user.name}  , Email id = ' ${user.email}<button id='${user.email}' onclick="dlfn(${user.email})" style="float:center">delete</button></li>`
    //const childnode = '<li id = '+user.email`> Username = ${user.name} , Email id = ${user.email}</li>`
    parentnode.innerHTML = parentnode.innerHTML + childnode;
}

function dlfn(emailiddel){
    removeuserfromscreen(emailiddel);
}
function removeuserfromscreen(emailid){
    console.log("removed");
    localStorage.removeItem(emailid);
    removechildnode(emailid);

}

function removechildnode(emailid){
    const parentnode1=document.getElementById("userdetail");
    const childnodedeleted = document.getElementById(`${emailid}`);
    //parentnode.removeChild(childnode);
    if(childnodedeleted){
        parentnode1.removeChild(childnodedeleted);


    }
    console.log(parentnode1);
  
}

document.addEventListener('DOMContentLoaded',refresh);
function refresh(e){
    e.preventDefault();
    console.log("refresh")
    let i=0;
    for(i=0;i<localStorage.length;i++)
    {
        k=localStorage.key(i);
        var getobj = JSON.parse(localStorage.getItem(k));
        const parentnode = document.getElementById("userdetail")
        const childnode = '<li>Username = ' + getobj['name'] + ' , Email id = '+ getobj
        ['email']+'</li>'
        
        parentnode.innerHTML=parentnode.innerHTML+childnode;

    }
}