//Reverse the String

function reverseInt(integer) {
    const numArray = integer.toString().split('').reverse().join('');
    return parseInt(numArray);

}


const result = reverseInt(234234);
console.log(result);


