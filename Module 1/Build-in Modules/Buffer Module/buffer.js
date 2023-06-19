/*
In node.js buffer module provides a way to handle binary data.
It allows us to create, Manipulate, And interact with buffers, which are used to represent sequences of binary data.
Buffers can be used to work with binary data, such as reading from or writing to files, working with network protocols, cryptographic operations, and more.
*/

//Buffer Creation:
console.log("Buffer Creation : ")

// Creates a new buffer of size 5 filled with zeroes
const buf1 = Buffer.alloc(5); 
console.log(buf1); // Output: <Buffer 00 00 00 00 00>

// Creates a buffer from an array
const buf2 = Buffer.from([1, 2, 3]); 
console.log(buf2); // Output: <Buffer 01 02 03>

// Creates a buffer from a string with 'utf8' encoding
const alphaLower = 'abcdefghijklmnopqrstuvwxyz'
const alphaUpper = alphaLower.toUpperCase();
const buf3 = Buffer.from(alphaUpper, 'utf8'); 
console.log('Upper Case Alphabets : ');
console.log(buf3);

const buf4 = Buffer.from(alphaLower, 'utf8'); 
console.log('Lower Case Alphabets :');
console.log(buf4);



//Buffer Manipulation:
console.log('Buffer Manipulation :')

const buf = Buffer.from('Hello', 'UTF-8');
console.log(`Buffer Length : ${buf.length}`)     //Output : 5

// Converts buffer to string
const str = buf.toString('UTF-8');
console.log(`Buffer To String : ${str}`)

// Writes a string to the buffer
const buf5 = Buffer.alloc(10);
buf5.write('Node.js', 'UTF-8');     
console.log(`String To Buffer : ${buf5.toString('UTF-8')}`);


// Buffer Operations:
console.log("Buffer Operations : ")

const bufOpr = Buffer.from('Hello', 'UTF-8');
//Slices Buffer From Index
const sliceBuf = bufOpr.slice(1, 3);
console.log(`Sliced String : ${sliceBuf.toString('UTF-8')}`)

const bufOpr1 = Buffer.from('Hello', 'UTF-8')
const bufOpr2 = Buffer.from(' World', 'UTF-8')
const concatenatedBuf = Buffer.concat([bufOpr1, bufOpr2]);
console.log(`Concatenated String : ${concatenatedBuf.toString('UTF-8')}`);


// Buffer Conversation:
console.log("Buffer Conversation : ")

const buf6 = Buffer.from('Hello', 'UTF-8');
// Converts buffer to JSON object
const json = buf6.toJSON();
console.log(`Buffer to JSON Object ${json}`);

const bufStr = Buffer.from('Hello', 'UTF-8');
// Converts buffer to hexadecimal string
const str2 = bufStr.toString('hex');
console.log(`Buffer To Hexadecimel : ${str2}`);