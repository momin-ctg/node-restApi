

// Todo Schema
const TodoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            trim: true,
            required: [true, "Task details is required"]

        },

        age: {
            type: Number,
            min: [6, 'Age must be at least 6'],
            max: [12, "Age can not be higher then 12"]
        },
        done: {
            type: Boolean,
            default: false
        },
        time: {type: Date, Default: Date.now}
    },
    {
        timestamps: true,
    }
);

// Model
const Todo = mongoose.model('Todo', TodoSchema);

// Create
const todo = new Todo({
    task: 'task 1 ',
    age: 6
});

todo.save().then(doc => {
    console.log(doc)
}).catch(e => {
    console.log(e)
});
