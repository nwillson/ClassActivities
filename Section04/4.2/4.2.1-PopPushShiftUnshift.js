const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastTwo = nums.pop();
let lastTwo1 = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
let firstTwo = nums.shift();
let firstTwo1 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(lastTwo1);
nums.unshift(lastTwo);

nums.push(firstTwo1);
nums.push(firstTwo);

console.log(nums);
