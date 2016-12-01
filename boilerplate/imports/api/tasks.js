import { Mongo } from 'meteor/mongo';
// Store the API of your application and later the Publications that read from them and the Methods that write to them. Y
// You can read more about how to structure your code in the Application Structure article of the Meteor Guide.

export const Tasks = new Mongo.Collection('tasks');
