const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

// Add notes
yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  }
})

// Remove notes
yargs.command({
  command: 'remove',
  describe: 'Removes existing note',
  builder: {
    title: {
      describe: 'Note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  }
})

// Lists notes
yargs.command({
  command: 'list',
  describe: 'Lists all notes',
  handler: () => {
    notes.listNotes();
  }
})

// Read notes
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: "Title of note to read",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  }
})

yargs.parse();
