import * as newKeys from './new-keys-actions';
let bitcoin = require('bitcoinjs-lib');

export const setNewKeys = () => (dispath, getState) => {
    let keyPair = bitcoin.ECPair.makeRandom();
    let address = keyPair.getAddress();
    let wif = keyPair.toWIF();
    let data = {
        address: address,
        privateKey: wif,
    }
    dispath(newKeys.newKeys(data));
}