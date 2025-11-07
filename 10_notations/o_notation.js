const gro = ["milk", "banana", "apple", "tea", "eggs"];



const searchItem = (item)=>{
    for(let i = 0; i<item.length;i++){
        if(item[i]==="tea"){
console.log("Got it"+item[i]);
        }
    }
}

searchItem(gro);