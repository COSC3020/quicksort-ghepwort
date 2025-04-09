# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answers

The time complexity of this algorithm is $\Theta(n^2)$. We loop through every element which takes $n$ time and each step we subarray the existing array to size $n-1$. This gives us that the complexity is $(n-1)+(n-2)+(n-3)...+1= \frac{n(n-1)}{2}=\Theta(n^2)$.

## Sources

Aidan Newberry and Noah (not sure what his last name is) advised me to use a stack to simulate recursion.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.