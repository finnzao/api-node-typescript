import * as create from './Create';
import * as GetById from './GetById';
import * as UpdateById from './UpdateById';
import * as DeleteById from './DeleteById';
import * as SignUp from './SignUp';
import * as SignIn from './SignIn';
import * as GetByEmail from './GetByEmail';

export const UserController = {
    ...create,
    ...GetById,
    ...UpdateById,
    ...DeleteById,
    ...SignUp,
    ...SignIn,
    ...GetByEmail
};