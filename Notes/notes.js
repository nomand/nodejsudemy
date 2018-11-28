const fs = require('fs');

let fetchNotes = () => {
    try { return JSON.parse(fs.readFileSync('notes-data.json')); }
    catch (e) { console.log('database doesn\'t exist\ncreating...'); return []; }};

let saveNotes = (notes) => { fs.writeFileSync('notes-data.json', JSON.stringify(notes)); }

let addNote = (title, body) =>
{
    var notes = fetchNotes();
    var note = { title, body };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){ notes.push(note); saveNotes(notes); return note; };
};

let getAll = () => { return fetchNotes(); };
let getNote = (title) => { return fetchNotes().filter((note) => note.title === title)[0]; };

let removeNote = (title) =>
{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

module.exports = { addNote, getAll, getNote, removeNote };