// routes go here, routes /= controllers

var express = require("express");
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
//var db =

// paths here
router.get("/",function(req,res){
    res.render("index");
})
//router.post

// router get route for scraper
router.get("/scrape", function(req,res){
    // use axios to grab a web page
    // use cheerio to grab certain web page elements
    // res.json
    axios.get("https://www.npr.org/")
  .then(function (response) {
    console.log(response);
    var $ = cheerio.load(response.data);
    $(".story-wrap").each(function(i,element){
        // try to grab title and link for articles
        // create var to save scraped data
        console.log("we're inside of cheerio too");
        var title = $(element).find(".title").text();
        var link = $(element).find("a").attr("href");
        console.log(title);
        console.log(link);
    
    })
  })
  .catch(function (error) {
    console.log(error);
  });

    
})



module.exports = router;
