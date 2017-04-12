const express 	= require('express');
const router 		= express.Router();



function SvgController(){
    this.index = function(req, res){
        res.status(200).json("Back-end svg calculations");
    }
}

const Controller = new SvgController;
// define the users api routes
router.get('/', Controller.index);

module.exports = router;