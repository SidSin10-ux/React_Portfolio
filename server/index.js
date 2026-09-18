require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());


const submissions = [];


let projects = [];
const dataFilePath = process.env.DATA_FILE_PATH || './data/projects.json';
try {
    const absolutePath = path.resolve(__dirname, dataFilePath);
    if (fs.existsSync(absolutePath)) {
        projects = JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));
    }
} catch (error) {
    console.error('Error loading projects data:', error);
}


app.get('/', (req, res) => {
    res.status(200).json({ status: 'ok' });
});


app.get('/api/projects', (req, res) => {
    res.status(200).json(projects);
});


app.get('/api/projects/:id', (req, res) => {
    const project = projects.find((p) => p.id === req.params.id);
    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
});


app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || email.trim() === '') {
        return res.status(400).json({ error: 'Email is required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }
    if (!message || message.trim() === '') {
        return res.status(400).json({ error: 'Message is required' });
    }

    const newSubmission = { name, email, message, date: new Date().toISOString() };
    submissions.push(newSubmission);
    res.status(201).json({ message: 'Submission successful', data: newSubmission });
});


app.get('/api/contact', (req, res) => {
    res.status(200).json(submissions);
});


app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});


app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
