const form =document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#weight').value);
   const result= document.querySelector('#result')

   if(height===''||height<=0||isNaN(height)){
     result.innerHTML=`Please give a valid height ${height}`;
   }
)
}
