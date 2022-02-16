
import express from 'express';
import { userRouter } from './routes';

const PORT = 3000; 

const app = express();
app.use(express.json());

app.use('/', userRouter);

//test route
app.use('/test', (req, res) => {
    res.sendStatus(200);
  });

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Error: Page not found'));  

//global error handler
// app.use((err, req, res, next) => {
//     const defaultErr = {
//       log: 'Express error handler caught unknown middleware error',
//       status: 500,
//       message: { err: 'An error occurred' },
//     };
//     const errorObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
//   });



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});