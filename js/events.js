//define functions here



// call functions here
   function getIt(){
     $('p').on('click', ()=>{
       alert('Hey!')
     })
   }
   
   function frameIt(){
     $('img').on('load', ()=>{
       $('img').addClass('tasty')
     })
   }
   
   
   
   function pressIt(){
     $('#typing').on('keydown', (e)=>{
      if (e.which === 71) {
        alert("You pressed 'g'!")
       }
     })  
   }
   
   function submitIt(){
     $('form').on('submit', ()=>{
       alert('Your form is going to be submitted now.')
     }) 
   }

