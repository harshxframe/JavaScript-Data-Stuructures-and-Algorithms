var name = "Harsh";


function hreverse(data){
    var reversed = "";
    const len = data.length;
    for(let i=1;i<len+1;i++){
        const inChars = data[len - i];
        reversed += inChars;
    }
   console.log(reversed);

}

hreverse("Apple");