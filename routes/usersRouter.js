const express = require('express');
const router = express.Router();
const {createUser} = require('../database/controller/userManagementDbController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create-user',async ( req, res)=>{
  console.log (req.body)
  try {
    await createUser(req.body)
  }catch (e) {
    console.log (e)
    res.status(500)
  }

})


module.exports = router;
