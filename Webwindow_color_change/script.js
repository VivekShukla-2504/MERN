const buttons = document.querySelectorAll(".button");//for select button
const body = document.querySelector("body");//to hold in variable

buttons.forEach(function(button){  // used becuase we found nodelist 
  button.addEventListener("click", function(e)
  //event for click
   {
    body.style.backgroundColor = e.target.id;
  });
});
/*   Also you can use  this

      
    if(e.target.id==='grey')
    {
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='white')
    {
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='blue')
    {
        body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='yellow')
    {
        body.style.backgroundColor = e.target.id;
    }
    else 
    {
        body.style.backgroundColor =e.target.id ;
    }
*/