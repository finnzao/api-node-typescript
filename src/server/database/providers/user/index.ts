import * as deleteById from './DeleteById';
import * as updateById from './UpdateById';
import * as getById from './GetById';
import * as create from './Create';
import * as getAll from './GetAll';
import * as count from './Count';
import * as getByEmail from './GetByEmail';


export const UserProviders = {
  ...deleteById,
  ...updateById,
  ...getById,
  ...getByEmail,
  ...create,
  ...getAll,
  ...count,
};