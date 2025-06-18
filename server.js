const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let messages = [];

app.post('/', (req, res) => {
  const { device, data, time } = req.body;
  messages.push({ device, data, time });
  console.log('Nuevo mensaje recibido:', req.body);
  res.sendStatus(200);
});

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
