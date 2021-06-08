const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/empresa', (req, res) => {
    res.render('./layouts/empresa');
});

router.get('/clients/add', (req, res) => {
    res.redirect('/');
});

// router.get('/productos', (req, res) => {
//     res.render('./layouts/productos');
// });

router.get('/contacto', (req, res) => {
    res.render('./layouts/contacto');
});

router.get('/cookies', (req, res) => {
    res.render('./layouts/cookies');
});

router.get('/privacy', (req, res) => {
    res.render('./layouts/privacy');
});

router.get('/productos/panel-japones', (req, res) => {
    res.render('./productos/panel-japones');
});

router.get('/productos/bambulita', (req, res) => {
    res.render('./productos/bambulita');
});

router.get('/productos/cortina-onda-perfecta', (req, res) => {
    res.render('./productos/cortina-onda-perfecta');
});

router.get('/productos/cortina-romana', (req, res) => {
    res.render('./productos/cortina-romana');
});

router.get('/productos/cortina-tradicional', (req, res) => {
    res.render('./productos/cortina-tradicional');
});

router.get('/productos/enrollables-en-vinilo', (req, res) => {
    res.render('./productos/enrollables-en-vinilo');
});

router.get('/productos/enrollable-blackout', (req, res) => {
    res.render('./productos/enrollable-blackout');
});

router.get('/productos/papel-de-colgadura', (req, res) => {
    res.render('./productos/papel-de-colgadura');
});

router.get('/productos/peliculas-para-vidrios', (req, res) => {
    res.render('./productos/peliculas-para-vidrios');
});

router.get('/productos/pergolas', (req, res) => {
    res.render('./productos/pergolas');
});

router.get('/productos/persiana-en-aluminio', (req, res) => {
    res.render('./productos/persiana-en-aluminio');
});

router.get('/productos/persiana-enrollable', (req, res) => {
    res.render('./productos/persiana-enrollable');
});

router.get('/productos/persiana-vertical', (req, res) => {
    res.render('./productos/persiana-vertical');
});

router.get('/productos/persianas-estampadas', (req, res) => {
    res.render('./productos/persianas-estampadas');
});

router.get('/productos/sheer-elegance', (req, res) => {
    res.render('./productos/sheer-elegance');
});

router.get('/productos/toldos', (req, res) => {
    res.render('./productos/toldos');
});


router.get('/sitemap', (req, res) => {
    res.render('layouts/sitemap');
});

module.exports = router;