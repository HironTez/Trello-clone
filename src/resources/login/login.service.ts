import { db } from '../../db.controller';
import * as jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';

const userLogin = async (login: string, password: string) => {
    // Get user with compare login
    const user = db.users.find(user => user.login === login);
    if (user) {
        if (await compare(password, user.password)) {
            const token = jwt.sign({
                userId: user.id,
                login: user.login,
            }, process.env['JWT_SECRET_KEY']!);

            return token;
<<<<<<< HEAD
        }
    }
=======
        };
    };
>>>>>>> e6c3f222ab41e29de2b5c3bae20d248579a8ddd5
    return false;
};

export = userLogin;