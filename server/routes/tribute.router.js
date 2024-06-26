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
  

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
