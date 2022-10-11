import mongoose from 'mongoose';


const MONGODB : any= {
    uri: process.env.MONGO_URI,
    options:{
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_ADM_PASS
    }
};

console.debug('Starting connection with mongo');

mongoose.connection.on('connected', function () {
    console.info('Connected to the database');
});

mongoose.connection.on('error', function (err) {
    console.error('Database connection error', { error: err });
});

mongoose.connection.on('disconnected', function () {
    console.warn('Connection to MongoDB dropped.');
});

mongoose.connect(
    MONGODB.uri,
    MONGODB.options
);
