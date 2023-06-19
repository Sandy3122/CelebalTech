//Console.time() and Console.timeEnd()

console.time('abc')
let firstStart = function(){
    console.log('FirstStart Is Running');
}

let secondStart = () => {
    console.log('SecondStart IS Running');
}


firstStart();   //Calling firstStart();
secondStart()   //Calling secondStart();

console.timeEnd('abc')

