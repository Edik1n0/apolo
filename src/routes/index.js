const express = require('express');
const router = express.Router();
const pool = require('../db');
const flash = require('connect-flash');

router.post('/registro-usuario', async (req, res) => {
    const { nombre, email, phone, description, checkbox } = req.body;
    const newUser = {
        nombre,
        email,
        phone,
        description,
        checkbox
    };
    await pool.query('INSERT INTO usuarios SET ?', [newUser]) // Guardar a base de dates
    req.flash('success', 'Datos enviados correctamente; en un momento nos pondremos en contacto');
    res.redirect('/');
});

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/nosotros', (req, res) => {
    res.render('./layouts/nosotros');
});

router.get('/voluntarios', (req, res) => {
    res.render('./layouts/voluntarios');
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