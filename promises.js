var currenttime = new Date().toLocaleTimeString();


let posts =[
    {title:"post one", body:"this is post one", edit:currenttime},
    {title:"post two", body:"this is post two",edit:currenttime}
]



function getpost(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output += `<li> ${post.title} Last edited at  ${post.edit}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createpost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error');
            }
        },2000);
    });

}

function deletepost(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.pop();
            if(posts.length == 0){
                error = true;
            }
            else{
                error = false;
            }

            if(!error){
                resolve();
            }
            else{
                reject("array is empty");
            }
        }, 3000);
    })
}

function create4thpost(post,callcreatepost){
    setTimeout(() => {
        callcreatepost(post,getpost);
    },2000);
}

createpost({title:'post four', body:'this is post four'}).then(getpost).catch
(err => console.log("error jasmin"));

deletepost().then(() => console.log("deleted")).catch(err => console.log("empty"));
deletepost().then(() => console.log("deleted")).catch(err => console.log("empty"));
deletepost().then(() => console.log("deleted")).catch(err => console.log("empty"));
deletepost().then(() => console.log("deleted")).catch(err => console.log("empty"));