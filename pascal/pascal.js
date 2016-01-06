var _ = require('lodash');

function pascal(n) { 
    if(n === undefined || n < 0) { return; }
    
    function calculate(i, n, triangle) {
      if(n === 0) { return triangle; }
      if(i > n) { return triangle; }

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

// console.log(_.eq([1,2,3], [1,2,3]), "arrays equal?");
console.log(pascal() === undefined, pascal());
console.log(pascal(-1) === undefined, pascal());
console.log(_.eq(pascal(0), [[1]]), pascal(0));
console.log(_.eq(pascal(1), [[1], [1,1], [1,2,1]]), pascal(1));
console.log(_.eq(pascal(2), [[1], [1,1], [1,2,1],[1,3,3,1]]), pascal(2));
console.log(_.eq(pascal(3), [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]), pascal(3));
console.log(_.eq(pascal(4), [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1]]), pascal(4));

