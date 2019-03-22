const fs = require('fs');
const chalk = require('chalk');

// Add note handler
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.white("New note added!"));
  } else {
    console.log(chalk.bgRed.white("Could not add new note, title already exists in notes"));
  }
}

// Remove note handler
const removeNote = (title) => {
  let notes = loadNotes();
  const originalNotesLength = notes.length;
  notes = notes.filter((note) => {
    if (note.title === title) {
      console.log("Removing note titled: " + title);
      return false;
    } else {
      return true;
    }
  });
  const newNotesLength = notes.length;

  if (originalNotesLength !== newNotesLength) {
    console.log(chalk.bgGreen.white('Note removed!'));
    saveNotes(notes);
  } else {
    console.log(chalk.bgRed.white('Note not found!'));
  }
}

// Save note helper function
const saveNotes = (notes) => {
  const newNotes = JSON.stringify(notes, null, 2);
  fs.writeFileSync('notes.json', newNotes);
}

// List notes handler
const listNotes = () => {
  const notes = loadNotes();
  const noteTitles = notes.map((note) => {
    return note.title;
  });

  if (notes.length > 0) {
    console.log(chalk.bgCyan.white('Your notes:'));
    noteTitles.forEach((title) => {
      console.log(chalk.cyan(title));
    });
  } else {
    console.log(chalk.bgRed.white('You don\'t have any saved notes!'));
  }
}

// Read note handler
const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);

  if (foundNote) {
    console.log(chalk.bgCyan.white(foundNote.title));
    console.log(chalk.cyan(foundNote.body));
  } else {
    console.log(chalk.bgRed.white('Could not find note titled: ' + title));
  }
}

// Load notes helper function
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (err) {
    return [];
  }

}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
