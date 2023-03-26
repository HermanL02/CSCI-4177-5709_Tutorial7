const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Replace the connection string with the one provided
const connectionString = 'mongodb+srv://admin:admin123@cluster0.s2yvsle.mongodb.net/test';

// Connect to the MongoDB instance
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Define the schema for the collection
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

// Create the model for the collection
const Person = mongoose.model('Person', personSchema);

app.use(express.json());

// Routes for CRUD operations
app.post('/people', async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).send(person);
    } catch (err) {
        res.status(500).send({ message: 'Failed to create a new person', error: err });
    }
});

app.get('/people', async (req, res) => {
    try {
        const people = await Person.find();
        res.send(people);
    } catch (err) {
        res.status(500).send({ message: 'Failed to fetch people', error: err });
    }
});

app.put('/people/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!person) return res.status(404).send({ message: 'Person not found' });
        res.send(person);
    } catch (err) {
        res.status(500).send({ message: 'Failed to update person', error: err });
    }
});

app.get('/people/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) return res.status(404).send({ message: 'Person not found' });
        res.send(person);
    } catch (err) {
        res.status(500).send({ message: 'Failed to fetch person', error: err });
    }
});

app.delete('/people/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if (!person) return res.status(404).send({ message: 'Person not found' });
        res.send(person);
    } catch (err) {
        res.status(500).send({ message: 'Failed to delete person', error: err });
    }
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
