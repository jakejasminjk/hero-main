const express = require('express');
const router = express.Router();
let Hero = require('../models/hero.model')

/* GET home page. */
router.get('/:start/:stop', async (req, res) => {
  Hero.find().skip(Number(req.params.start)-1).limit(Number(req.params.stop))
    .then(heros => res.json(heros))
    .catch(err => res.status(400).json('Error: ' + err));
});

 router.post('/', async () => {
    try{
      
    } catch(error){

    }
 })

//Create a hero
router.route('/add').post(async (req, res) => {
  try {
    console.log(req.body)
    // for(let i = 0; i < req.body; i++){
    //   console.log(req.body[i])
    //   const newHero = await new Hero(req.body[i]);
    //   newHero.save()
    //     .then(() => res.json(`Hero added`))
    //     .catch(err => res.status(400).json('Error: ' + err));
    // }
    await Hero.insertMany(req.body)
    console.log("Success probably")
    res.status(200).send("Got some heroes")
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;
