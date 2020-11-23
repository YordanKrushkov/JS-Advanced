function validate() {

    let inputElement=document.getElementById('email');

     inputElement.addEventListener('change', (e)=>{
         let currentValue=e.currentTarget.value;
         let patternt=/[a-z]+@[a-z]+.[a-z]+/

         if(patternt.test(currentValue)){
             inputElement.classList.remove('error');
         }else{
             inputElement.classList.add('error')
         }
     })
}