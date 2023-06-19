const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const unlinkAsync = util.promisify(fs.unlink);

// CREATE operation
const createFile = async (filename, data) => {
  try {
    await writeFileAsync(filename, data);
    console.log(`File '${filename}' created successfully.`);
  } catch (error) {
    console.error(`Error creating file '${filename}':`, error);
  }
};

// READ operation
const readFile = async (filename) => {
  try {
    const fileData = await readFileAsync(filename, 'utf8');
    console.log(`Contents of '${filename}': ${fileData}`);
  } catch (error) {
    console.error(`Error reading file '${filename}':`, error);
  }
};

// UPDATE operation
const updateFile = async (filename, newData) => {
  try {
    await writeFileAsync(filename, newData);
    console.log(`File '${filename}' updated successfully.`);
  } catch (error) {
    console.error(`Error updating file '${filename}':`, error);
  }
};

// DELETE operation
const deleteFile = async (filename) => {
  try {
    await unlinkAsync(filename);
    console.log(`File '${filename}' deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting file '${filename}':`, error);
  }
};

// Usage example
const filename = 'example.txt';

createFile(filename, 'Hello, world!'); // Create a new file
readFile(filename); // Read the file's contents

updateFile(filename, 'Updated content'); // Update the file's contents
readFile(filename); // Read the updated contents

// deleteFile(filename); // Delete the file
