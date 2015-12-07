function isPrime(num) {
  if(num <= 1) {
    return false
  }
  else {
    var c = 1;
    while(c < num) {
      if(num % divisor === 0){
        return false;
      }
      // Optimization, if num % 2 !== 0, no evens will be either so just check odds
      if(c >= 3){ 
        c = c + 2; 
      }
      else {
        c++;
      }
    }
    return true;
  }
}
