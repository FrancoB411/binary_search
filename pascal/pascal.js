

function pascal(n) { 
    if(n === undefined || n < 0) { return; }
    
    function calculate(i, n, triangle) {
      if(n === 0) { return triangle; }
      if(i >= n) { return triangle; }

      var next = []; 
      var last = triangle[triangle.length -1]
        
      for(var j = 0; j <=  last.length;  j++) {
        if (j == 0 || j === last.length ) 
        {
          next.push(1);
        }
        else if(j >= 1 ) 
        {
          next.push(last[j -1] + last[j]);
        }
      }
      return calculate( i + 1, n, triangle.concat([next]) )    
    }
    return calculate(0, n, [[1]]);
}

module.exports = pascal;

