import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.join(__dirname, '../../.env')
});

export = process.env['PORT'] || 4000;