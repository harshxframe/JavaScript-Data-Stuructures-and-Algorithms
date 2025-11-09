const chunkArray = (arr, size) => {
   let finalArray = [];
   let index = 0;



   while(index<arr.length){
    const chunk = arr.slice(index, index + size);
    
    finalArray.push(chunk);
    index += size;
   }

   return finalArray;


}


const chuckedArr = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 10) || "Hello";


console.log(chuckedArr);