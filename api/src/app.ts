import express from 'express';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (_, res) => {
  res.send('Express API + Typescript');
});

app.listen(8000, () => {
  console.log('Server started in port 8000');
});
