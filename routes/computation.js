var express = require('express');
var router = express.Router();
var substitution;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    substitution=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(substitution == 0)
      substitution=Math.random()
    
    res.write('Math.log applied to '+substitution+" is "+Math.log(substitution)+"\n");
    res.end('Math.log10 applied to '+substitution+" is "+Math.log10(substitution));
 });

module.exports = router;