import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import walletController from "./controllers/walletController.js";

dotenv.config();

const app = express();


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/api/txs', (req, res, next) => {
    let request = {
        txHash: req.body.txHash
    }

    walletController.getHashInfo(request)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(err.status ?? 500).json(err);
        })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})