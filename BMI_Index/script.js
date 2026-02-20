const form = document.querySelector('form')
//server pe nahin bhejna hai - form jab bhi submithota hai ya to post type ke sath submit hota hai ys get type
form.addEventListener('submit',function(e)
{e.preventDefault()
    const height = parseFloat(document.querySelector('#height').value)//function ke bahar likhenge to deafulat value empty aa jayega
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    //calculation karne per fat sakta hai to kuch check lagate hai
    if( height < 50 || height >250 || isNaN(height))
    {
        results.innerHTML = `Please give a valid height (50-250 cm)`;
        results.style.color = "red";
        return;
    }
     else if( weight < 10 ||weight >300 ||isNaN(weight))
    {
        results.innerHTML = `Please give a valid weight (10 - 300 kg)`;
        results.style.color = "red";
        return;
    }

       else 
        {const bmi = (weight/((height*height)/10000)).toFixed(2);
       results.innerHTML=`<span> ${bmi} </span>`
    
       let category = "";
       let color = "black"
       if(bmi<18.6) {category = "Underweight ";
        color = "orange";
        alert("You are Underweight 🙂\nTip: Eat nutritious food & increase protein intake like 🍌🥚");
       }
       else if(bmi<=24.9) 
        {category = "Normal ";
            color = "green";
            alert("You are Normal 😊\n Great Job : Eat Healthy food to maintain your healthy lifestyle 🤗");
      
        }

       else 
        {category = "Overweight ";
        color = "red";
        alert("You are Overweight 😊\nTip: Try regular exercise & balanced diet 🏃‍♂️🥗 🤗");
      
       }
       results.style.color = color;
       results.innerHTML = ` <span> Your BMI is <strong> ${bmi} </strong> you're ${category} </span>`;
}});