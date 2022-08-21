const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();
app.use(express.json());

const authRoutes = require('./routes/user.route');
const itemRoutes = require('./routes/item.route');
const cartRoutes = require('./routes/cart.route');
const orderRoutes = require('./routes/order.route');

app.use('/api', authRoutes);
app.use('/api', itemRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;

console.log(dbURI)

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log(`connected to db`)
        app.listen(port, () => console.log(`server started on port ${port}`))
    })
    .catch((err) => console.log(err));