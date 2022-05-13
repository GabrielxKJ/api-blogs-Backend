const express = require('express');
const bodyParser = require('body-parser'); 
const { error } = require('./middlewares/error');

const app = express();

const userRoute = require('./routes/user');
const loginRoute = require('./routes/login');
const categorieRoute = require('./routes/categorie');
const blogsPostRoute = require('./routes/post');

app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categorieRoute);
app.use('/post', blogsPostRoute);

app.use(error);
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
