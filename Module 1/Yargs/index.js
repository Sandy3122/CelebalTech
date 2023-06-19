const yargs = require('yargs')

//argv = arguments vector
// console.log(process.argv);

// console.log(yargs.argv);    //It shows the output in array
const command = yargs.argv._[0];   //"_" will always gives the command
let params = yargs.argv;


if(command === 'fly'){
    console.log("I'm flying");
}else if(command === "drive"){
    if(params.speed && params.car){
        console.log(`Driving ${params.car} at ${params.speed} miles/hr Speed`)
    }else{
    console.log("I'm Driving");
    }
}
