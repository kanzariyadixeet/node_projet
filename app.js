require('dotenv').config()
const express = require('express');
const { json } = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`=======>> http://localhost:${PORT}`);
});
