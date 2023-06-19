/*
In Node.js, the os module provides a way to access various operating system-related information and functionalities. 
It allows you to retrieve details about the underlying operating system and interact with it. 
Here are some key features and functions provided by the os module:
*/


const os = require("os");



// Operating System Information:

//To Check which architecture is using in computer 
console.log(os.arch())  //X64

//To check which plat form we are using
console.log(`Plat Form : ${os.platform()}`)

// System Memory:

//To check free memory(RAM) in the pc
const freeMemory = os.freemem()
console.log(`Free Memory : ${freeMemory/1024/1024/1024}`)
// console.log(`Free Memory : ${os.freemem()/1024/1024/1024}`)

//To check Total memory(RAM) in the pc
const totalMemory = os.totalmem()
console.log(`Total Memory : ${totalMemory/1024/1024/1024}`)
// console.log(`Total Memory : ${os.totalmem/1024/1024/1024}`)

//Network Interfaces :

const network = os.networkInterfaces();
console.log(`Network Interfaces : ${network}`)

// Get network interfaces
const networkInterfaces = os.networkInterfaces();

// Iterate over each network interface
Object.keys(networkInterfaces).forEach((interfaceName) => {
  const interfaces = networkInterfaces[interfaceName];
  console.log(`Interface: ${interfaceName}`);

  // Iterate over each IP address of the interface
  interfaces.forEach((iface) => {
    const { address, netmask, family, mac, internal } = iface;
    console.log(`  IP Address: ${address}`);
    console.log(`  Netmask: ${netmask}`);
    console.log(`  MAC Address: ${mac}`);
    console.log(`  Family: ${family}`);
    console.log(`  Internal: ${internal}`);
    console.log('------------------');
  });
});


// Operating System User and Environment:

//To check the Host Name or PC Name
console.log(`Host Name : ${os.hostname()}`)

//To check the type operating system using
console.log(`Operating System : ${os.type()}`)

//To check information about the currently logged-in user, 
// including the username, UID, GID, home directory, and shell.
console.log(`User Information : ${os.homedir()}`)


//To check the home directory of the current user.
console.log(`Home Directory : ${os.homedir()}`)

//To check the number of seconds the system has been running.
console.log(`Uptime : ${os.uptime()}`)


//Endianness:
//Returns the endianness of the CPU, either "BE" (big-endian) or "LE" (little-endian).
console.log(`Endianess : ${os.endianness()}`)


//Utility Functions:

//To check the temperory files folder
console.log(`Temperory Folders : ${os.tmpdir()}`)

//Returns an array of objects containing information about each logical CPU core.

const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`);
  console.log(`  Model: ${cpu.model}`);
  console.log(`  Speed: ${cpu.speed} MHz`);
  console.log('------------------');
});

//Returns an array containing the system's average load over different time intervals.

const loadAvg = os.loadavg();
console.log(`1-minute Load Average: ${loadAvg[0]}`);
console.log(`5-minute Load Average: ${loadAvg[1]}`);
console.log(`15-minute Load Average: ${loadAvg[2]}`);

