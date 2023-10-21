function sortArrayDescending(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
}

const inputArray = [5, 2, 9, 1, 5, 6];
sortArrayDescending(inputArray);
console.log(inputArray); 
