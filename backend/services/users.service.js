const { db } = require("../database");

const getAllUsers = async (responseFn) => {

  const count = await countUsers();

  db.serialize(()=>{
  
      db.all(`
          SELECT * FROM user 
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
  const color = Math.floor(Math.random()*16777215).toString(16);
  const name = `User ${color}`;

  db.serialize(()=>{
  
      db.run(`
          INSERT INTO user(name,color) VALUES(?,?)
          `,[name,color],
          function(err){
          if (err){
            throw err;
          }
            responseFn({
              id: this.lastID,
              name,
              color
            });
        });
  });
}

const deleteUser = async (id,responseFn) => {

  db.serialize(()=>{
  
      db.run(`
          DELETE FROM user WHERE id=?
          `,[id],
          function(err){
          if (err){
            throw err;
          }
            responseFn({message:`User ${id} deleted due inactivity`});
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
    createNewUser,
    deleteUser
}