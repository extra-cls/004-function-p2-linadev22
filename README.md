[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/edXvPV5K)
# 004--function-p2

In this exercise, you have two comple 2 functions
1. `quadratic()` function
2. `formatSum()` function

## 1. Function `quadratic()` 
This function is aiming to find the root value of `x1` and `x2`. The quadratic formalar is:

$$ ax^2+bx+c=0 $$

Your goal is to find the value of `x1` and `x2` given the value of `a`, `b`, and `c`.

- Step 1: Calculate the `Discriminant`

$$ \Delta = b^2-4ac $$

- Step 2: 
    - If $ \Delta >= 0 $ you can find `x1` and `x2`


    $$ x_1 = \frac{-b+ \sqrt{\Delta}}{2a} $$


    $$ x_2 = \frac{-b- \sqrt{\Delta}}{2a} $$


    - If $ \Delta < 0 $ you can say "`There is no root value for x`"


The function asks for 3 augument `a`, `b`, `c` and return back the result.

### Example: 
- quadratic(1, 2, 1) -> `x1 = -1, x2 = -1`
- quadratic(1, 1, 1) -> `No root!`

## 2. Function `formatSum()`
We want to have the function that can display the sum of number from `1` to `n`. For instance, the sum from 1 to 5 is `1+2+3+4+5`.

Apply the recursion to format the summation of the number.

### Example:
- formatSum(5) -> `1+2+3+4+5`
- formatSum(2) -> `1+2`