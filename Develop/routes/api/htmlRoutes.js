const path = require('path')
const router = require('express').Router();

//homepage
router.get('/', (req, res) => {
    console.log('in the homepage')
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//notes page
router.get('/notes', (req, res) => {
    console.log('in the notes page')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

module.exports = router;