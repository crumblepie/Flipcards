import express from 'express';
import cors from 'cors';
import { userRouter } from './routes';

const PORT = 3000; 

const allowedOrigins = ['http://localhost:8080', 'http://localhost:44513/','http://localhost:62632'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
app.use(cors(options));
app.use(express.json());

app.use('/', userRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Error: Page not found'));  

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});