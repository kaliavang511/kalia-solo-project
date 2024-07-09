const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  //only authenticated users can access this route
  const userId = req.user.id;
  const sqlText = `SELECT * FROM tribute WHERE user_id = $1`;
  //able to select everything from tribute table for authenticated user 

 
  pool
    .query(sqlText, [userId])
    .then((result) => {
       // Perform the SQLTEXT using the database pool
      console.log(`GET from database`, result);
      // Log the successful result 
      res.send(result.rows);
      //send back
    })
    .catch((error) => {
    //log any erros 
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});


router.post('/', rejectUnauthenticated, (req, res) => {
  const { firstName, middleName, lastName, obituary, image_url, video_url, dateOfBirth, dateOfDeath } = req.body;
  const userId = req.user.id;
  let queryText = `
    INSERT INTO "tribute"
    ("user_id", "first_name", "middle_name", "last_name", "obituary", "image", "video", "date_of_birth", "date_of_death")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id
  `;
  const values = [userId, firstName, middleName, lastName, obituary, image_url, video_url, dateOfBirth, dateOfDeath];
  pool
    .query(queryText, values)
    .then((result) => {
      res.status(201).send({ id: result.rows[0].id });
      //It sends back the first data of row, which is the ID. 
      //it's important to send back the ID. So we can delete and update 
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
        //check if deletion was successful
        res.sendStatus(204)
        //if it is send a status code indicating successful deletion
      } else {
        //if not send a forbidden status code
        res.sendStatus(403)
      } 
    })
    .catch((error) => {
      //if any errors, console log it and sned an internal server error 
      console.log('Error with DELETE', error);
      res.sendStatus(500)
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const tributeId = req.params.id;
  const { firstName, middleName, lastName, obituary, image, video, dateOfBirth, dateOfDeath } = req.body;
  //extracting data fields from the incoming request body for update
  const userId = req.user.id;

  const queryText = `
    UPDATE "tribute"
    SET
      "first_name" = $1,
      "middle_name" = $2,
      "last_name" = $3,
      "obituary" = $4,
      "image" = $5,
      "video" = $6,
      "date_of_birth" = $7,
      "date_of_death" = $8
    WHERE "id" = $9 AND "user_id" = $10
  `;

  const values = [firstName, middleName, lastName, obituary, image, video, dateOfBirth, dateOfDeath, tributeId, userId];
  // Data values to update a tribute table in the database
  pool
      .query(queryText, values)
      .then((result) => {
          if (result.rowCount > 0) {
              res.sendStatus(200);
          } else {
              res.sendStatus(403);
          }
      })
      .catch((error) => {
          console.log('Error with PUT', error);
          res.sendStatus(500);
      });
});

module.exports = router;