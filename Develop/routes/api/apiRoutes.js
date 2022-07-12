const router = require('express').Router();
const chalk = require('chalk');

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/', (req, res) => {
})

// `POST /api/notes` should receive a new note -- add it to the `db.json`.
router.post('/', (req, res) => {

})

// `DELETE /api/notes/:id` should delete the note with the corresponding id.
router.delete('/:id', (req, res) => {})

module.exports = router;