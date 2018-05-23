//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $(document).on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which ===)
  })
}

$(document).ready(function(){

// call functions 
  getIt()
  frameIt()

});
