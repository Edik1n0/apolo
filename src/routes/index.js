const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/nosotros', (req, res) => {
    res.render('./layouts/nosotros');
});

router.get('/servicios', (req, res) => {
    res.render('./layouts/servicios');
});

router.get('/cookies', (req, res) => {
    res.render('./layouts/cookies');
});

router.get('/privacy', (req, res) => {
    res.render('./layouts/privacy');
});

router.get('/servicios/diseno', (req, res) => {
    res.render('./servicios/diseno');
});

router.get('/servicios/web', (req, res) => {
    res.render('./servicios/web');
});

router.get('/sitemap', (req, res) => {
    res.render('layouts/sitemap');
});

router.get('/control', (req, res) => {
    res.render('./control/');
});

module.exports = router;