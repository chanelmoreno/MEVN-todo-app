const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    todo: String, 
    author: String,
    date: Date
})

module.exports = mongoose.model('todo', TodoSchema)