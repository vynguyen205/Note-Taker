const path = require('path')
const router = require('express').Router();
const chalk = require('chalk');

//homepage
router.get('/', (req, res) => {
    console.log('in the homepage')
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//notes page should return the `notes.html` file.
router.get('/notes', (req, res) => {
    console.log('in the notes page')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// `GET *` should return the `index.html` file.
router.get('*', (req, res) => {})


module.exports = router;