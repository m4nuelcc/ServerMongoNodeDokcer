const mongoose =require('mongoose')
mongoose.connect('mongodb://mongo/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connect to',db.connection.host))
    .catch(err => console.log(err));