



// Write a function that prints the first n square numbers and also calculates the sum of these numbers.



const printSquareNumbers = (n) => {
  //write code here
 let total=0
 for(let x=1;x<=n;x++){
  total=total+x*x
  console.log(x*x)
 }
return total
}
 console.log(printSquareNumbers(5));
//will print: 1, 4, 9, 16, 25
// Final output is: 55








