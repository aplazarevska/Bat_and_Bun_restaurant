const path = require('path');
const cors = require('cors');
const express = require('express');

const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes.js');
const paymentRoutes = require('./routes/paymentRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

__dirname = path.resolve();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);
app.use('/upload', uploadRoutes);

// PRODUCTION: Serve static build client
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = {
  app
};
