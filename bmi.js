const form =document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#weight').value);
   const result= document.querySelector('#result')

   if(height===''||height<=0||isNaN(height)){
     result.innerHTML=`Please give a valid height ${height}`;
   }
   else if(weight===''||weight<=0||isNaN(weight)){
    result.innerHTML=`Please give a valid Weight ${weight}`
   }
   else{
   const bmi=(weight / ((height * height) / 10000)).toFixed(2)
   // show mine result 
   if ( bmi < 18.6 ){
      const msg="Fuel your body with love and nutrients 🍓🥑"
    result.style.color = "black";
    result.innerHTML=` Under weight: Your BMI is ${bmi}<br><span>${msg}</span>`;
   }
   else if( bmi >= 18.6 && bmi<=24.9){
      result.style.color = "green";
     const msg="Great job! Keep up the healthy lifestyle 🥦🏃‍♂️"
      result.innerHTML = `Congratulations! Normal range: Your BMI is ${bmi}<br><span >${msg}</span>`;
  


   }
     }
}
)
   

 
