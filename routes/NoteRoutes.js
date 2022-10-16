const express = require("express")
const mongoose = require('mongoose');

const NotesModel = require('../models/NotesModel.js');

const routes = express.Router()

//TODO - Create a new Note
/*
{
    "noteTitle": "Test",
    "noteDescription": "This is a testing",
    "priority": "High",
    "dateAdded": "10-16-2022",
    "dateUpdated": "10-16-2022"
}
*/
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to save the note
    try {
        const newNote = new NotesModel(req.body)
        const note = await newNote.save()
        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to returns all note
    try {
        const notes = await NotesModel.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const note = await NotesModel.findById(req.params.noteId)
        if(!note){
            res.status(400).send({message: "No Note Found"})
        }
        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to update the note using noteid
    try {
        const newNote = await NotesModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(201).send(newNote)
    } catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to delete the note using noteid
    try {
        const deletedNote = await NotesModel.findByIdAndDelete(req.params.noteId)
        if(!deletedNote){
            res.status(400).send({message: "No Note to Delete"})
        }
        res.status(201).send(deletedNote)
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = routes