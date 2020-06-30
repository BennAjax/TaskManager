import express from 'express';
import routes from './routes';
import setEnvironment from './config/env';
import connectDB from './config/db';

const app = express();
const port = 3000;

setEnvironment(app);
connectDB();
routes(app);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running Server in Development Mode');
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist' });
  }
});

app.listen(port, () =>
  console.log(
    `MEVN app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode!`
  )
);
