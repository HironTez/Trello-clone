import fs from 'fs/promises';

// Write log to the file
const log = (data: string, toConsole=false): void => {
    if (toConsole) console.log(data);
    fs.appendFile('./logs/requests.log.txt', data);
};

// Write error log to the file and console
const error = (error: string): void => {
    console.error(error);
    fs.appendFile('./logs/errors.log.txt', `${error}\n`);
};

export = { log, error };