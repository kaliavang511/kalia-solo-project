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
    const  { firstName, middleName, lastName, obituary, image_url, video_url, dateOfBirth, dateOfDeath } = req.body;
    let queryText = `
      INSERT INTO "tribute"
      ("user_id", "first_name", "middle_name", "last_name", "obituary", "image", "video", "date_of_birth", "date_of_death")
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;
    const values = [req.user.id, firstName, middleName, lastName, obituary, image_url, video_url, dateOfBirth, dateOfDeath];
    pool
      .query(queryText, values)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('Error making POST', error);
        res.sendStatus(500);
      });
  });


  router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const tributeId = req.params.id;
    const userId = req.user.id;

    const queryText = `
    DELETE FROM "tribute"
    WHERE "id" = $1 AND "user_id" = $2
    `
    pool.query(queryText, [tributeId, userId])
    .then ((result) => {
      if (result.rowCount > 0) {
        res.sendStatus(204)
      } else {
        res.sendStatus(403)
      } 
    })
    .catch((error) => {
      console.log('Error with DELETE', error);
      res.sendStatus(500)
    })
});

router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id;
  const sqlText = `UPDATE tribute SET First_Name = $1 WHERE id = $2`;
  pool.query(sqlText, [req.body.First_Name, idToUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});


module.exports = router;
