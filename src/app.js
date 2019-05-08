const express = require('express');
const path = require('path');
const hbs = require('hbs');
const getGeoCode = require('./utils/geocode.js');
const getForecast = require('./utils/forecast.js');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views'); // change the template directory from default as "views" to "templates"
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);


// set up status directory to serve
app.use(express.static(publicDirectory));


app.get('', (req, res) => {
   res.render('index', {
       title: 'Weather App',
       name: 'Andrew'
   });
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Test'
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send({
        products: []
    });
});

app.get('/weather', (req, res) => {
   if(!req.query.address) {
       return res.send({
           error: "You must provide the address!"
       })
   }

   getGeoCode(req.query.address, (error, {latitude, longitude} = {}) => {
        if(error) {
            return res.send({
                error: error
            });
        }

       getForecast(latitude, longitude, (error, data) => {
           if(error) {
               return res.send({
                   error: error
               });
           }

           res.send({
               forecast: data,
               address: req.query.address
           })
       });
    });
});


//handle 404

app.get('*', (req, res) => {
   res.send('My 404 page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
