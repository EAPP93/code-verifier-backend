"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// configuration the .env file
dotenv_1.default.config();
//create Express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Define the first Route of Appp
app.get('/', (req, res) => {
    //Send Hello World
    res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    //Send Hello World
    res.send('Hello world');
});
// Execute APP and listen Requests to PORT
app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map