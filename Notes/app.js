
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const t = { describe: 'note title', demand:true, alias: 't' }
const b = { describe: 'note body', demand:true, alias: 'b' }
const argv = yargs
    .command('add', 'Add a new note', {t, b})
    .command('remove', 'Delete note by name', {t})
    .command('read', 'Output note by name', {t})
    .command('list', 'List all notes')
    .help()
    .argv;

let command = argv._[0];

if(command === 'add')
{
    let note = notes.addNote(argv.title, argv.body);
    console.log( note ? `successfully added ${note.title}` : `duplicate refused`);
}
else if (command === 'list')
{
    let list = notes.getAll();
    for(i in list)
    {
        console.log(list[i].title + "\n" + list[i].body + "\n---\n");
    }
}
else if (command === 'read')
{
    let note = notes.getNote(argv.title);
    console.log( note ? `${note.title} \n-\n ${note.body}` : `no note with title ${argv.title}`);
}
else if (command === 'remove')
    console.log(notes.removeNote(argv.title) ? `note ${argv.title} was removed` : `note ${argv.title} doesn\'t exist`);
else
    console.log('invalid command');