const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();

app.use(cors());
app.use(express.json());

//connect to mongo
mongoose.connect('mongodb://localhost/panle1')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const notesSchema = {
    title: String,
    content: String
}
const Note = mongoose.model("Note", notesSchema)
//for sending on mongo and save it
app.post("/create", (req, res) => {
    console.log('data sending to mongo')
      const title = req.body.title;
      const content = req.body.content;
      const newNote = new Note({
          title,
          content
      });
      newNote.save();
  
    });
//for reading from mongo
    app.get("/notes", (req, res) => {
        //Note.find({}).exec((err, Note) => { res.send(Note) })
        Note.find({}).sort({_id:-1}).limit(1).exec((err, Note) => { res.send(Note) }); 
        });

app.listen(3001, function(){
    console.log('express server is running on port 3001');
})