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
    if(key.which === 71) alert('G was pressed!')
  })
}

function submitIt(){
  $('input')
}

$(document).ready(function(){

// call functions 
  getIt()
  frameIt()
  pressIt()

});
