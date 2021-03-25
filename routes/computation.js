var express = require('express');
var router = express.Router();
var calcMath;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    calcMath=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(calcMath == 0)
      calcMath=Math.random()
    
    res.write('Math.log applied to '+calcMath+" is "+Math.log(calcMath)+"\n");
    res.end('Math.log10 applied to '+calcMath+" is "+Math.log10(calcMath));
 });

module.exports = router;