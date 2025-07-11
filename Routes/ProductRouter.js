const ensureAuthenticated = require('../Middlewares/Auth');

const router =require('express').Router();

router.get('/', ensureAuthenticated , ( req , res) => {
    console.log('--- logged in user detail ---' , req.user);
    res.status(200).json([
        {
            name:"College",
            price: "95000" 
        },
        {
            name: "College",
            price: "72000" 
        }
    ])
});

module.exports = router;