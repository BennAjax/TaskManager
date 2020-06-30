import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyparser from 'body-parser';

export default function setEnvironment(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}

function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  app.use(bodyparser.json());
  app.use(morgan('dev'));
  app.use(cors());
}

function setProdEnv(app) {
  process.env.NODE_ENV = 'production';
  app.use(bodyparser.json());
  app.use(express.static(__dirname + '/../dist'));
}