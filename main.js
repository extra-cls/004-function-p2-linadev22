const quadratic = (a, b, c) => {
       // complete the code here
       // Step 1: Calculate the Discriminant
       const discriminant = b * b - 4 * a * c; 
    
       if (discriminant >= 0) { // Step 2: Check if roots exist
           const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
           const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
           return x1, x2;
       } else {
           return "No root!";
       }
}
console.log(quadratic(1, 2, 1)); // x1 = -1, x2 = -1
console.log(quadratic(1, 1, 1)); // No root!


const formatSum = n => {
    // complete the code here
    
    
}




// DO NOT DELETE CODE BELOW
export {quadratic, formatSum}