const { db } = require("../database");

const getMessagesByUserId = (id,responseFn) => {

    db.serialize(()=>{
    
        db.all(`
            SELECT m.* FROM message m
                INNER JOIN user u
                ON u.id = m.user_id 
                WHERE m.user_id = ?
            `,[id], (err, row) => {
            if (err){
              throw err;
            }
                responseFn(row);
          });
    });
}

const getAllMessages = (responseFn) => {

    db.serialize(()=>{
    
        db.all(`
            SELECT * FROM message m
            INNER JOIN user u
            ON u.id = m.user_id 
            `, (err, row) => {
            if (err){
              throw err;
            }
                responseFn(row);
          });
    });
}

const createNewMessage = (userId,message,responseFn) => {

    db.serialize(()=>{
    
        db.run(`
            INSERT INTO message(text,user_id) VALUES(?,?)
            `,[message,userId],
            (err, row) => {
            if (err){
              throw err;
            }
                responseFn(row);
          });
    });
}

module.exports = {
    getMessagesByUserId,
    getAllMessages,
    createNewMessage
}