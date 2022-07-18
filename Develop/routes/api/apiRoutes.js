const router = require('express').Router();
const notesDB = require('../../db/db.json');
const path = require('path');
const fs = require('fs');
const {v4 : uuidv4} = require('uuid')
// const chalk = require('chalk');

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    // console.log(chalk.green('in the notes page'));
    const readData = fs.readFileSync('./db/db.json', 'utf8');
    const parsedData = JSON.parse(readData);
    res.json(parsedData);
})

// `POST /api/notes` should receive a new note -- add it to the `db.json`.
router.post('/notes', (req, res) => {
    // log a POST request has been received
    console.log(`${req.method} request received for ${req.url}`);
    // deconstruct the req.body object
    const { title, text } = req.body;
    //generate a new id
    const newId = uuidv4()
    // create a new note object
    if (req.body) {
        const newNote = {
            title: title,
            text: text,
            id: newId
        }
        // cwd === current working directory
    const readData = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/db.json"), 'utf8'));
        console.log(readData);
        readData.push(newNote);
        fs.writeFileSync(path.join(process.cwd(),"/db/db.json"), JSON.stringify(readData));
        res.json(newNote);
    }

})

// `DELETE /api/notes/:id` should delete the note with the corresponding id.
router.delete('/notes/:id', (req, res) => {
    const idDelete = req.params.id;
    console.log(idDelete);
    const readData = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/db.json"), 'utf8'));
    // checking if the id exists in the db then delete it
    for (let i = 0; i < readData.length; i++) {
        if (readData[i].id === idDelete) {
            readData.splice(i, 1); 
            fs.writeFileSync(path.join(process.cwd(),"/db/db.json"), JSON.stringify(readData));

        }
        console.log(`console---Note with ${idDelete} has been deleted`);
        return res.json(readData);
    }
})
    

module.exports = router;