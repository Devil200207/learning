const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chinmay:chinmay@cluster0.dwpy7.mongodb.net/Todo_app")

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos', TodoSchema);
module.exports = {
    todo
}