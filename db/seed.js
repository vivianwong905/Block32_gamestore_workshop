const client = require('./client');
const { rebuildDB, testDB } = require('./seedData');

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());


  //this populate database from the seeData