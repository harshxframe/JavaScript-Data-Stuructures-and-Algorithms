
// O(n^2)

function findPair(arr){
    for (let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            console.log(`pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}


const numbers = [2,3,4,5,6,7,8,23,345];

findPair(numbers);