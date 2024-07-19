import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class WalletModel{
    constructor() {
        if(WalletModel.instance){
            return WalletModel.instance;
        }

        this.apiUrl = process.env.API_URL;
        WalletModel.instance = this;
        console.log("WalletModel instance created");
        console.log(this.apiUrl);
    }

    callApi(request){
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + request.txHash)
                .then((response) => {
                    console.log(response)
                    resolve(response.data);
                }).catch((err) => {
                    reject(err);
                })
        })
    }
}

export default new WalletModel();