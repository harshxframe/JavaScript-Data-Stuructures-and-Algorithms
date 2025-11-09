function maxProfit(dataList){
    let minPrices = dataList[0];
    let maxProfit = 0;
    for(let i = 1; i<dataList.length;i++){
        const currentPrice =dataList[i];
        //update minimum price id the lower price is found
        minPrices = Math.min(minPrices, currentPrice);
        const potentialPrice = currentPrice - minPrices;
        maxProfit = Math.max(maxProfit, potentialPrice);
        console.log(maxProfit);
    }
return maxProfit;

}

const pro = maxProfit([7,1,5,3,6,4]);
console.log("Max Profit: "+pro);