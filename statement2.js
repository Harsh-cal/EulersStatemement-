function findSmallestMultiple(n) {
    let queue = ["1", "2"]; 
    let visited = new Set();
       
    while (queue.length > 0) {
        let numStr = queue.shift();
        let num = BigInt(numStr);
        
        if (num % BigInt(n) === 0n) return num; 

        for (let digit of ["0", "1", "2"]) {
            let nextNumStr = numStr + digit;
            if (!visited.has(nextNumStr)) {
                visited.add(nextNumStr);
                queue.push(nextNumStr);
            }
        }
    }
}

function calculateSum(limit) {
    let sum = 0;
    for (let n = 1; n <= limit; n++) {
        let fN = findSmallestMultiple(n);  
        sum += Number(fN) / n;  
    }
    return sum;
}

console.log(findSmallestMultiple(7))

