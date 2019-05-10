const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mominriyadh:@Alkarim786@cluster0-or786.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}).then(res => {
    console.log('MongoDB Connected to Database')
}).catch(e => {
    console.log('Database Disconnected');
});

// Todo Schema
const TodoSchema = new mongoose.Schema({
    task: {
      type: String,
      trim:false
    },
    done: {
      type: Boolean,
      default:false
    },
    time: {type: Date, Default: Date.now()}
});

// Model
const Todo = mongoose.model('Todo', TodoSchema);

// Create
const todo = new Todo({
    task: '    task 1     ',
    time: Date.now(),
});

todo.save().then(doc => {
    console.log(doc)
});
