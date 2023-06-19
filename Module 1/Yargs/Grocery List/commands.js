const fs = require("fs");


const add = (item, price) => {
    // console.log("Adding " + item + ' ' + price);
    let groceryList = [];

    try{
        groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
    }catch(err){
        console.log(err);
    }

    let index = groceryList.findIndex((x) => x.item === item);

    if(index === -1){   //It means, If it cannot find anything 
        groceryList.push({item, price});
        console.log(groceryList);
    }else{
        const newPrice = Number(price) + Number(groceryList[index].price);
        console.log(` New Price : ${newPrice} For ${item}`);

        groceryList[index].price += price;
        console.log(groceryList);
    }

    //Writing in the file
    fs.writeFileSync("groceryList.json", JSON.stringify(groceryList)); //I will always rewrite the entrie document

}








module.exports = {add}