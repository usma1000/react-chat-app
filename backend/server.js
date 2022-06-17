const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const chatId = req.params.id;
    const chat = chats.find(chat => chat._id === chatId);
    res.send(chat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));