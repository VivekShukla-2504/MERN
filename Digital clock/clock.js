const clock = document.getElementById('clock')
//const clock = documnet.querySelector('#clock')
let date = new Date();
console.log(date.toLocaleTimeString());
// use setinterval function for real time time
setInterval(function ()
{
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
},1000)