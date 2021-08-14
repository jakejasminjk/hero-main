const express = require('express');
let User = require('../models/user.model')
const crypt = require('../server_funct/crypt');
//const crypt = require('../server_funct/solo')
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10


/* GET users listing. */
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Create a user
router.route('/add').post(async (req, res) => {
  try{
    const username = req.body.username;
    const pass = await crypt.hashPassword(req.body.password);
    const newUser = await new User({ username, password:pass, savedHeros:[] });
    
    console.log(pass)
    await newUser.save()
      .then(() => res.json(`User added! ${pass}`))
      .catch(err => res.status(400).json('Error: ' + err));
  } catch(error){
    console.log(error)
  }
  
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;

      user.save()
        .then(() => res.json('UserName updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});






module.exports = router;
