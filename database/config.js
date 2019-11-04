require('dotenv').config();

module.exports = {
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'courses_db'
};

// const tests = {
//   host: 'localhost',
//   user: 'root',
//   password: process.env.PASSWORD,
//   database: 'courses'
// };

// module.exports = { course, tests };
