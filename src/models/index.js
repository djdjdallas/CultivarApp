// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Strain } = initSchema(schema);

export {
  Strain
};