var form = document.getElementById("my-form");
var updatedata;



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
    if (updatedata == false){
        axios.post("https://crudcrud.com/api/ddc1dc13e6d04f7aac488adf716bfad8/user",obj).then(res => {
      console.log(res);
  }).catch(err =>console.error(err));

    }

    

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

}

function showonscreen(user){
    const parentnode = document.getElementById("userdetail")
    const childnode = `<li id = ${user._id}> Username = ' ${user.name}'  , Email id = ' ${user.email}'<button id='${user._id}' onclick="dlfn('${user._id}')" style="float:center">delete</button>
    <button id='${user._id}' onclick="update('${user._id}')" style="float:center">update</button></li>`
    //const childnode = '<li id = '+user.email`> Username = ${user.name} , Email id = ${user.email}</li>`
    parentnode.innerHTML = parentnode.innerHTML + childnode;
    console.log(childnode);
}

function dlfn(userid){
    console.log(userid);
    removeuserfromscreen(userid);
    console.log("dlfn function called");
}
function removeuserfromscreen(userid){
    console.log("removed");
    axios.delete(`https://crudcrud.com/api/ddc1dc13e6d04f7aac488adf716bfad8/user/${userid}`
  ).then(res => {
      console.log("removed from storage")
  }).catch(err =>console.error(err));
    
    removechildnode(userid);

}

function removechildnode(userid){
    const parentnode1=document.getElementById("userdetail");
    const childnodedeleted = document.getElementById(`${userid}`);
    //parentnode.removeChild(childnode);
    if(childnodedeleted){
        parentnode1.removeChild(childnodedeleted);


    }
    console.log(parentnode1);
  
}

function update(userid){
    updatedata = true;
    form.addEventListener("submit",getdatanew);

// var us = document.getElementById("userdetail");
// let i=0;
    function getdatanew(e){
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var ulist=document.getElementById('userdetail');
    //ulist.innerHTML=''

        let newdata = {
            name,
            email
        };
    axios.put(`https://crudcrud.com/api/ddc1dc13e6d04f7aac488adf716bfad8/user/${userid}`,newdata)
    .then(res =>console.log("updated"))
    .catch(err => console.log("error"));
    }
    axios.get("https://crudcrud.com/api/ddc1dc13e6d04f7aac488adf716bfad8/user")
        .then(res => {

            for(var i=0;i<res.data.length;i++){
                showonscreen(res.data[i]);
            }
        })
}