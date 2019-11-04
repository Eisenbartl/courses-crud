const express = require('express');
const router = express.Router();
const courses = require('../database/models/courses');

// ADD COURSES TO COURSE LISE
router.post('/addCourse', (req, res) => {
  const { name, domain, description } = req.body.newCourse;

  courses.create({ name, domain, description });

  let array = [];

  const resData = input => {
    return res.send(input);
  };
  courses
    .findAll()
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        array.push(res[i].dataValues);
      }
      resData(array);
    })
    .catch(err => console.log(err));
});

// DISPLAY COURSES ON PAGE LOAD
router.get('/displayCourses', (req, res) => {
  let array = [];
  const resData = input => {
    return res.send(input);
  };
  courses
    .findAll()
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        array.push(res[i].dataValues);
      }
      resData(array);
    })
    .catch(err => console.log(err));
});

// SEARCH FOR COURSES MY COURSE NAME
router.post('/searchCourse', (req, res) => {
  const { term } = req.body;

  let array = [];

  const resData = input => {
    return res.send(input);
  };
  courses
    .findAll()
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].dataValues.name === term) {
          array.push(res[i].dataValues);
        }
      }
      resData(array);
    })
    .catch(err => console.log(err));
});
module.exports = router;
