const express = require('express');

const authRoutes = require('./routes/authRoutes')

const app = express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('home');
});

app.use('/auth',authRoutes);

app.listen(3000);