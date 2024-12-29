"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const timelog = (req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
};
router.use(timelog);
//define route of home page
router.get('/', (req, res) => {
    res.send("Welcome to home page");
});
router.get('/about', (req, res) => {
    res.send("About home page");
});
exports.default = router;
