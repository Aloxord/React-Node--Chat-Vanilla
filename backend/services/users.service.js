const { db } = require("../database");

const getAllUsers = async (responseFn) => {

  const count = await countUsers();

  db.serialize(()=>{
  
      db.all(`
          SELECT * FROM message 
          `, (err, row) => {
          if (err){
            throw err;
          }
              responseFn({
                count, 
                users: row
              });
        });
    });
}

const createNewUser = async (responseFn) => {

  const count = await countUsers();
  const name = `User ${count + 1}`;

  db.serialize(()=>{
  
      db.run(`
          INSERT INTO user(name) VALUES(?)
          `,[name],
          function(err){
          if (err){
            throw err;
          }
            responseFn({last:this.lastID});
        });
  });
}

const countUsers = () => new Promise((resolve) => {

  db.serialize(()=>{
  
      db.get(`
          SELECT COUNT(*) q FROM user
          `,[],
          (err, row) => {
          if (err){
            throw err;
          }
            resolve(row.q);
        });
  });
});

module.exports = {
    getAllUsers,
    createNewUser
}