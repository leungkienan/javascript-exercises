const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	let i = arr.reduce((n, a)=> n+a,0)
  return i 
};

const multiply = function(arr) {
  let i = arr.reduce((a,b)=> a*b,1)
  return i
};

const power = function(num, pow) {
  let calc = Math.pow(num, pow)
  return calc
  // return sum

};

const factorial = function(n) {
  let ans = 1;
  if(n==0 || n==1){
    return ans
  } else{
    return n*factorial(n-1)
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
