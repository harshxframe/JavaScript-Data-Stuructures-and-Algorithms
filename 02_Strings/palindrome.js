function isPalindrome(data){
    const reversed = data.split('').reverse().join('');
    if (reversed == data){
        console.log("It is a Palindrome!");
    } else {
        console.log("It is not a Palindrome");
    }
}

isPalindrome("level");
