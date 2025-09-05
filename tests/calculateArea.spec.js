// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
       it("should be defined", () => {
         expect(add).toBeDefined();
       });

       it("should take two arguments", () => {
          expect(add.length).toBe(2);
      });
       
      it("should return the calculate of the two numbers", () => {
         expect(calculateArea(2, 1)).toEqual(2);
         expect(calculateArea(9, 3)).toEqual(27);
         expect(calculateArea(100, 50)).toEqual(5000);
       });

      it("should return undefined if any of the arguments is not provided", () => {
       expect(calculateArea(1)).toEqual(undefined);
       expect(calculateArea()).toEqual(undefined);
       expect(calculateArea(undefined, 1)).toEqual(undefined);
  });

  
    })    
})

