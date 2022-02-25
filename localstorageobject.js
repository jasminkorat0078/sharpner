
var form = document.getElementById("my-form");

form.addEventListener("submit",getdata);

// var us = document.getElementById("userdetail");
// let i=0;
function getdata(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ulist=document.getElementById('userdetail');
    ulist.innerHTML=''

    let obj = {
        name,
        email
    };

    localStorage.setItem(obj.email,JSON.stringify(obj));
    showonscreen(obj);
}

function showonscreen(user){
    const parentnode = document.getElementById("userdetail")
    const childnode = '<li>Username = ' + user.name + ' , Email id = '+ user.email+'</li>'
    parentnode.innerHTML=parentnode.innerHTML+childnode;
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