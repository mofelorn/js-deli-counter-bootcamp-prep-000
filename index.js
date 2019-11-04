



var katzDeliLine = []

function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  var i = 0
  for (i; i < katzDeliLine.length; i++){
    var current_in_line = (`Currently serving ${katzDeliLine[i]}.`)
    katzDeliLine.shift()
    return (current_in_line)
  }
  
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!") 
  }   
}

