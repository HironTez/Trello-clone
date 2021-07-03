import fs from 'fs/promises';

// Write log to the file
const log = (message: string, cl: boolean = false): void => {
    if (cl) console.log(message);
    fs.appendFile('./logs/logs.txt', `${message}\n`);
};

// Write error log to the file and console
const error = (error: string): void => {
    console.error(error);
    fs.appendFile('./logs/errors.txt', `${error}\n`);
};

export = { log, error };