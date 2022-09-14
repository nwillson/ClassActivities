const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = console.log(arr.indexOf("a"));
let firstB = console.log(arr.indexOf("b"));
let firstC = console.log(arr.indexOf("c"));
// find the last index of "a", "b", and "c"
let LastA = console.log(arr.lastIndexOf("a"));
let LastB = console.log(arr.lastIndexOf("b"));
let lastC = console.log(arr.lastIndexOf("c"));
// if the first index and last index of "a" is not the same,
//remove the last instance
function removeDuplicates(arr, duplicateValue) {
    let firstIndex = arr.indexOf(duplicateValue);
    let lastIndex = arr.lastIndexOf(duplicateValue);

    while (firstIndex !== lastIndex) {
        arr.splice(lastIndex, 1);
        lastIndex = arr.lastIndexOf(duplicateValue);
}
return arr;

}
// repeat until there is just one "a"