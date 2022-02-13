/**Magic Number, Mystery Number, Unknown reference etc...
   *Hard Coded values provide very little context. 
   *Working with other developers aside, you may even forget why that value is there
    *Is it an artifact of debugging? Regardless it should not make it into production.  
    *Simply assigning it to a descriptive variable name, can save a lot of headache.
*/

function countDown() {
  for(let i = 8; i <= 0; i--){
    if(i === 0) {
      return "BEEP BEEP BEEP"
    }
  }
}

function betterCountDown(hoursOfSleep) {
  for(let i = hoursOfSleep; i <= 0; i--){
    if(i === 0) {
      return "BEEP BEEP BEEP"
    }
  }
}


