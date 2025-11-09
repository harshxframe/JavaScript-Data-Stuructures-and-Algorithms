function capti(str){
    try{
const words = str.toString().toLowerCase().split(' ');

const g = words.map((word)=>word[0].toUpperCase()+word.slice(1));

return g.join(' ');
    }catch(e){
return "Error..."+e;
    }

}

const testStr = "lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eum.";
const captilized = capti(testStr);
console.log(captilized);


