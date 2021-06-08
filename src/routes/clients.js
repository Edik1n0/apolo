const express = require('express');
const router = express.Router();
const flash = require('connect-flash');

const pool = require('../db');
// const { isLoggedIn } = require('../lib/auth')

router.post('/clients/add', async (req, res) => {
    const { nombre, telefono, email, descripcion, producto } = req.body;
    const newClient = {
        nombre,
        telefono,
        email,
        descripcion,
        producto
    };
    await pool.query('INSERT INTO clients SET ?', [newClient]) // Guardar a base de dates
    req.flash('success', 'Solicitud enviada correctamente. En breve nos pondremos en contacto.');
    res.redirect('/');
});

// router.get('/', isLoggedIn, async (req, res) => {
//     const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]); // Consulta la db
//     console.log(links)
//     res.render('links/list', { links });
// });

// router.get('/delete/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     await pool.query('DELETE FROM links WHERE ID = ?', [id]);
//     req.flash('success', 'Tarea eliminada correctamente');
//     res.redirect('/links')
// });

// router.get('/edit/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
//     res.render('links/edit', { link: links[0] });
// });

// router.post('/edit/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     const { title, description, url } = req.body;
//     const newLink = {
//         title,
//         description,
//         url
//     }
//     await pool.query('UPDATE links set ? WHERE id  = ?', [newLink, id]);
//     req.flash('success', 'Tarea actualizada correctamente');
//     res.redirect('/links');
// });

module.exports = router;