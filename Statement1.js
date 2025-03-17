function generateSubsequences(arr, r, index = 0, current = []) {
    if (current.length === r) {
        console.log(current.join("")); 
        return;
    }
    if (index >= arr.length) return; 
    
    generateSubsequences(arr, r, index + 1, [...current, arr[index]]);
    generateSubsequences(arr, r, index + 1, current);
}

function calculateTheTotalSubSequence(n, r) {
    if (r === 0 || r === n) return 1;  
    return calculateTheTotalSubSequence(n - 1, r - 1) + calculateTheTotalSubSequence(n - 1, r); 
}




let arr = ["1", "2", "3", "4", "5"];
console.log( "The total ways to calculate the combinatorics is "+calculateTheTotalSubSequence(arr.length , 3));

generateSubsequences(arr, 3);  
