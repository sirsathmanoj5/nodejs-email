import express, { Request, Response } from "express";

const router = express.Router();

const timelog = (req: Request, res:Response, next:any) => {
    console.log(`Time: ${Date.now()}`);
    next();
}

router.use(timelog);

//define route of home page
router.get('/', (req: Request, res: Response) => {
    res.send("Welcome to home page");
});

router.get('/about', (req:Request, res: Response) => {
    res.send("About home page");
});


export default router;