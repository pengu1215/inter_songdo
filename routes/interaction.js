var express=require('express');

var path=require('path');
var fs=require('fs');

var router=express.Router();

router.get('/',function(request,response,next){
    
    response.json({
        "program0": true,
        "program1" : false,
    });
});

module.exports=router;
