var pascal = require('../pascal.js');


describe("Pascal", function() {
    it("takes undefined and returns undefined", function() {
          expect(pascal()).toEqual(undefined);
    });

    it("takes negative ints and returns undefined", function() {
          expect(pascal(-1)).toEqual(undefined);
    });

    it("takes 0 & return row 0", function() {
          expect(pascal(0)).toEqual([ [ 1 ] ]);
    });

    it("takes 1 & return row 1", function() {
          expect(pascal(1)).toEqual([ [ 1 ], [1, 1] ]);
    });

    it("takes 2 & return row 2", function() {
          expect(pascal(2)).toEqual([[1], [1,1], [1,2,1]]);
    });

    it("takes 3 & return row 3", function() {
          expect(pascal(3)).toEqual([[1], [1,1], [1,2,1],[1,3,3,1]]);
    });
    
    it("takes 4 & return row 4", function() {
          expect(pascal(4)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]);
    });

    it("takes 5 & return row 5", function() {
          expect(pascal(5))
            .toEqual([[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1]]);
    });
});

