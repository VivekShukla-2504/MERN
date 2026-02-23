/* What is a Promise? 

A Promise is an object that represents a value that will be available in the future.

Think of it like ordering food at a restaurant:

You place the order → Promise created

Food is being prepared → Promise is pending

You get the food → Promise fulfilled

Or the kitchen says sorry, not available → Promise rejected

🔁 Promise States

A Promise can be in only one of these states:

Pending → Initial state (still waiting)

Fulfilled (Resolved) → Operation successful

Rejected → Operation failed (error)

Once fulfilled or rejected, the promise is settled and won’t change.*/
   
/*now we know that how to create promise before consume*/

const promiseone = new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    console.log("Async task 2");
    resolve();
},1000)
}).then(function()
{
    console.log("Async 2  resolved");
})


const promise3 =new Promise(function(resolve,reject)
{
  setTimeout(function()
{
    resolve({username:"Vivekshukla-2504",email:"7800652515vivek@gmail.com"})
},1000)
})

promise3.then(function(user)
{
    console.log(user);
    
})

promise4 = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username:"Vivekshukla-2504",email:"7800652515vivek@gmail.com"});
        }
        else{
            reject('Error:something went wrong');
        }
    },1000)
})

 promise4.then((user)=>{
    console.log(user);
   return user.email
})
.then((username)=> {
    console.log(username);
    
})
.catch(function(error)
{
    console.log(error);
    
}).finally(()=>console.log("either resolved or rejected"))

//new promise
const promise5 = promise4 = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"Vivek-2504",email:"viveks72_scs@gmail.com"});
        }
        else{
            reject('Error:something went wrong');
        }
    },1000)
});
async function consumePromise5(){
   try{
    const response= await promise5
   console.log(response)
   }
   catch(error)
   {
    console.log(error);
    
   }
}
    
consumePromise5()


// sometimes you can used asynawait or then_catch 
// async await dont handle error directly you can use try and catch 



/*whether you use then.catch or u can also use await function with
try and catch*/

async function getallusers() {
   try{ console.log("Request started....");
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //const response = await fetch('https://api.github.com/users/vivekshukla-2504');
    const data = await response.json()
    console.log(data);
   }
   catch(error)
   {
    console.log("E:",error);
    
   }
    
}
getallusers()


// we work same using fetch

 fetch('https://jsonplaceholder.typicode.com/users').then((response)=>
{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))