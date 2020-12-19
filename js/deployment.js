const ethTx = require('ethereumjs-tx');
const ethUtils = require('ethereumjs-util');

const artifacts = require('./artifacts')();
const rawTransaction = require('./rawTransaction');



generateDeployTx = () => {
    const tx = new ethTx(rawTransaction);
    const res = {
        sender: ethUtils.toChecksumAddress(tx.getSenderAddress().toString('hex')),
        rawTx: '0x' + tx.serialize().toString('hex'),
        contractAddr: ethUtils.toChecksumAddress(
          ethUtils.generateAddress(tx.getSenderAddress(), ethUtils.toBuffer(0)).toString('hex')),
    };
    return res;
};


deploy = async (web3) => {
    const res = generateDeployTx();

    const deployedCode = await web3.eth.getCode(res.contractAddr);

    if (deployedCode.length <=3 ) {
        await web3.eth.sendSignedTransaction(res.rawTx);
    }

    return await new web3.eth.Contract(artifacts.contracts.ERC1820Registry.ERC1820Registry.abi, res.contractAddr);
};



module.exports.generateDeployTx = generateDeployTx;
module.exports.deploy = deploy;
