const fs = require("fs");

file = "groceryList.json";

//To read the file
const readFile = fileName => {
    try{
       return groceryList = JSON.parse(fs.readFileSync(fileName));
    }catch(err){
        // console.log(err);
        return []
    }
}

//Write a file
//I will always rewrite the entrie document
const writeFile = (fileName, content) => {
    try{
        fs.writeFileSync(fileName,JSON.stringify(content));
        console.log('Successfully written to '+ fileName);
    }
    catch(error){
        throw error;
        };
}

//Adding the items
const add = (item, price) => {
    let groceryList = readFile(file)

    let index = groceryList.findIndex((x) => x.item === item);

    if(index === -1){   //It means, If it cannot find anything 
        groceryList.push({item, price});
        // console.log(groceryList);
    }else{
        const newPrice = Number(price) + Number(groceryList[index].price);
        console.log(` New Price : ${newPrice} For ${item}`);

        groceryList[index].price += price;
        // console.log(groceryList);
    }

    //Writing in the file
    writeFile(file, groceryList);

};


//Remove item
const remove = (item) => {
    let groceryList = readFile(file)
    
    const filteredList =  groceryList.filter( (x) => x.item !== item);
    console.log(`${item} Removed`);

    //Writing in the file
    writeFile(file, filteredList);

}


const print = () => {
    let groceryList = readFile(file)
    
    console.log(groceryList)    
}


const priceOf = item => {
    let groceryList = readFile(file)

    let index = groceryList.findIndex((x) => x.item === item);
    
    if(index !== -1){
        console.log(`Price of ${item} Is ${groceryList[index].price}   Rs.`)
    }else{
        console.log(`${item} Not Found`);
    }
}

module.exports = {add, remove, print, priceOf}