import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/public')));

// views is directory for all template files
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('pages/index');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
