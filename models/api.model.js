const connection = require("../db/connection");

exports.readParks = () => {
  return connection.query(`SELECT * FROM parks`).then(({ rows }) => {
    return rows;
  });
};

exports.getRideById = (id) => {
  let rideObj;
  let parkObj;

  return connection
    .query(`SELECT * FROM rides WHERE ride_id=$1`, [id])
    .then(({ rows }) => {
      console.log(rows, "<<< ride");
      rideObj = rows[0];
      return connection.query(`SELECT * FROM parks WHERE park_id=$1`, [
        rideObj.park_id,
      ]);
    })
    .then(({ rows }) => {
      console.log(rows, "<<< park");
      parkObj = rows[0];
      return {
        ride_id: rideObj.ride_id,
        ride_name: rideObj.ride_name,
        year_opened: rideObj.year_opened,
        park_name: parkObj.park_name,
        votes: rideObj.votes,
      };
    });
};
