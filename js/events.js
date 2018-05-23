//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $(document).on('load', function(){
    
  })
}

$(document).ready(function(){

// call functions 
  getIt()

});
