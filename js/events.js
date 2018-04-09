//define functions here
function getIt() {
  $('p').on('click', ()=>{alert("Hey!")})
}
function frameIt(){
  $('img').on('load', ()=> {document.querySelectorAll("img").forEach((img)=> (img.className = 'tasty'))})
}

function submitIt(){
  $('form').on('submit', ()=>{alert("Your form is going to be submitted now.")})
}

function pressIt(){
  $(document).on('keydown',
  (key)=>{
    if (key.which == 71){
      alert("g was pressed")
    }
  })
}

$(document).ready(function(){

// call functions here

});
