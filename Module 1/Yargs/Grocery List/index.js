const yargs = require("yargs")
const commands = require("./commands")

// console.log(yargs.argv);

let command = yargs.argv._[0];      //It will give the command in cli. Like add, remove delete

let item = yargs.argv.item;
let price = yargs.argv.price;


if(command === "add"){
    if(item && price){
        commands.add(item, price);
    }
}
else if(command === "remove"){
    if(item){
        commands.remove(item);
    }
}
else if(command === "print"){
    commands.print(item)
}
else if(command === "priceOf"){
    if(item){
        commands.priceOf(item)
    }
}else{
    console.log('Invalid Command,');
}