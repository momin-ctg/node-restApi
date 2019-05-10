const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mominriyadh:@Alkarim786@cluster0-or786.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}).then(res => {
    console.log('MongoDB Connected to Database')
}).catch(e => {
    console.log('Database Disconnected');
});
