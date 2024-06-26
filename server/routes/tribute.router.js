const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `SELECT * FROM tribute`;
    pool
      .query(sqlText)
      .then((result) => {
        console.log(`GET from database`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  }); 



router.post('/', rejectUnauthenticated, (req, res) => {
  let queryText = `
  INSERT INTO "tribute"
  ("user_id","First_Name", "Middle_Name","Last_Name","obituary","image","Date_of_birth","Date_of_death" )
  VALUES
  ($1,$2,$3,$4,$5,$6,$7,$8)
  `;
  const values = [ First_Name, Middle_Name, Last_Name,obituary,image,Date_of_birth,Date_of_death, req.user.id ]
  pool
    .query(queryText, values)
    .then (() => {
      res.sendStatus(200);
    })
    .catch((error) => {
    console.log('Error making POST', error);
    res.sendStatus(500)
  })

});





module.exports = router;
