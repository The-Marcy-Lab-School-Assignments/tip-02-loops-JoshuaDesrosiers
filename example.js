const range = (s,n)=>{
let bin =[]
  for (let i = s; i <= n; i++) {
    bin.push(i)
  }
  return bin
}
print=console.log

function staircaseSum(n) {
  let total = 0; // Initialize a variable to keep track of the sum

  for (let i of range(1,5)) {
    // Loop from 1 up to the given number
    total += i; // Add the current number to the total
  }

  return total;
}



print(staircaseSum(90000)); // Call the function with 5; output: 15
