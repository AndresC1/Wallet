import WalletModel from "../models/wallet.model.js";

class walletController {
    getHashInfo(request){
        return new Promise(async (resolve, reject) => {
            if(!request || !request.txHash){
                reject({
                    status: 400,
                    message: 'missing parameters',
                });
            }
            const response = await WalletModel.callApi(request)
            resolve(response);
            try{
                resolve("Hash info");
            } catch (err){
                reject(err);
            }
        })
    }
}

export default new walletController();