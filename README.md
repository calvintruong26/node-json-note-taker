# NodeJS JSON Note Taker
* A simple CLI tool that allows users to create, list, read, and remove notes

# Features
* Create Note
* List Notes
* Read Note
* Remove Note

# Frameworks/Libraries
* [Node.js](https://nodejs.org/en/ "Node.js Homepage")
* [Yargs](https://www.npmjs.com/package/yargs "Yargs NPM Page")
* [Chalk](https://www.npmjs.com/package/chalk "Chalk NPM Page")

# Usage
* Creating a new note
```
node app.js add --title <note-title> --body <note-body>
```
* Listing existing notes
```
node app.js list
```
* Reading an existing note
```
node app.js read --title <note-title>
```
* Removing an existing note
```
node app.js remove --title <note-title>
```

# Screenshots
## CLI Usage Example
![CLI Example](./screenshots/cli-example.png?raw=true)

## Generated Notes Example
![JSON Example](./screenshots/json-example.png?raw=true)
