/* 
TODO: Write a function called getTriangleArea 
that returns the area of a triangle. It
should take in three parameters.

Requisite math (use * for multiplication):
   s = (sumOfSides) / 2;
   area = √(s(s-a)(s-b)(s-c))
*/

const getTriangleArea = (a, b, c) => {
   const s = (a + b + c) / 2;
   const area = Math.sqrt(s*(s - a)*(s - b)*(s - c));

   return area;
};

// Run the file and use this to check your work
console.log("getTriangleArea(3,4,5)", getTriangleArea(3,4,5)," (should be 6)")
console.log("getTriangleArea(2,6,7)", getTriangleArea(2,6,7)," (should be ≈5.562)")
console.log("getTriangleArea(9,9,9)", getTriangleArea(9,9,9)," (should be ≈35.074)")
