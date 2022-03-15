console.log('person1: shows ticket');
console.log('person1: shows ticket');
// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         resolve('ticket')
//     },3000)

// });

// const getPopcorn=promiseWifeBringingTicks.then((t) =>{
//     console.log('wife: I have tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject) =>resolve(`${t} popcorn`));

// });
// const getButter= getPopcorn.then((t) =>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve,reject) =>resolve(`${t} popcorn`));

// });
// getButter.then((t)=>console.log(t));
const preMovie= async()=>{
    const promiseWifeBringingTicks=
    new Promise((resolve,reject)=>{
           setTimeout(() => resolve('ticket'),3000);
          });
         const getPopcorn=new Promise((resolve,reject)=> resolve(`popcorn`));
         const addButter=new Promise((resolve,reject)=> resolve(`butter`));
         const addColdDrinks=new Promise((resolve,reject)=> resolve(`colddrinks`));
          let ticket= await promiseWifeBringingTicks;
         console.log(`wife: I have the ${ticket}`);
          console.log('husband: we should go in');
          console.log('wife: no i am hungry');
          let popcorn=await getPopcorn;
          console.log(`husband: i got some ${popcorn}`);
          console.log('husband: we should go in');
          console.log('wife: I need butter on my popcorn');
          let butter= await addButter;
          console.log(`husband: i got some ${butter} on popcorn`);
          console.log('husband: we should go in');
          console.log('wife: I need some colddrinks');
          let colddrinks= await addColdDrinks;
          console.log(`husband: i got some ${colddrinks} also`);
          console.log(`husband anything else darling?`);
          console.log(`wife: lets go we are getting late`);
          console.log(`Thank you for the reminder *grins*`);




    return ticket;
    }
preMovie().then((m) =>console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');