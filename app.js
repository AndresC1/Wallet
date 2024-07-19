import express from 'express';
import dotenv from 'dotenv';
import walletController from "./controllers/walletController.js";

dotenv.config();

const app = express();

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