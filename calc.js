function displaydata(data){
    result.value+=data
}

function allclear(){
result.value=""
}

function evaluateEq(){
  result.value=eval(result.value) 
}

function backSpace(){
   data=result.value
   result.value=data.slice(0,-1)
}