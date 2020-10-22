const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('home', {subtitle:"FS Website"});

});

router.get('/services', function(req, res){
    res.render('services', {subtitle:"Services"});

});

router.get('/projects', function(req, res){
    res.render('projects', {subtitle:"Projects"});

});

router.get('/about', function(req, res){
    res.render('about', {subtitle:"About Us"});

});

router.get('/contact', function(req, res){
    res.render('contact', {subtitle:"Contact"});

});

module.exports = router;