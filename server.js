const express = require('express');
const app = express();
const PORT = 3001;

// Обработчик для корневого URL
app.get('/', (req, res) => {
    res.send('Welcome to Notes Service');
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Notes Service is running on http://localhost:${PORT}`);
});