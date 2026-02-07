// login check
let Islogged = false;
let istoken = false;
if(Islogged&&istoken)
{
    console.log("access granted");
}
else if(Islogged||istoken)
{
    console.log("partially accessed");
}
else{
    console.log("denied");
}
