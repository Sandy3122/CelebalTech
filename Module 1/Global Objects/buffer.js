//Buffer
/*
Buffer: The Buffer object is used to work with binary data in Node.js.
It provides methods to create, manipulate, and convert data in various formats,
such as strings, integers, and hexadecimal.
*/

const buf = Buffer.from('Hello', 'utf8');
console.log(buf.toString('hex'));   // Output: 48656c6c6f
