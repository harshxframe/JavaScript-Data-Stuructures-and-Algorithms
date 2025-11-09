function match(record, targetItem) {
    for (let i = 0; i < numberList.length; i++) {
        for (let x = 0; x < numberList.length; x++) {
            if(numberList[i]+numberList[x]==targetNumber){
                return `[${i},${x}] becuase ${numberList[i]} 
                (at index ${i}) plus ${numberList[x]} (at index ${x})
                 equals ${(numberList[i]+numberList[x])}`;
            }
        }
    }
}
const result = twoSum([2,7,11,5], 9);
console.log(result);