import express, { Express } from "express";
import router from './routes/router';

const app:Express = express();
const port: number | undefined | string = process.env.PORT || 3000;

app.use('/home', router)

app.listen(port, () => {
    console.log(`Application running at http://localhost${port}`);
});