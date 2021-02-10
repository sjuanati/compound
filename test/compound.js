const Compound = artifacts.require('Compound.sol');

contract('Compound', (accounts) => {
    const deployer = accounts[0];
    const lender = accounts[1];
    const borrower = accounts[2];
    const cUNI = '0x22531F0f3a9c36Bfc3b04c4c60df5168A1cFCec3';
    let compound;

    beforeEach(async() => {
        compound = await Compound.deployed();
        await compound.supply(cUNI, web3.utils.toWei('2'));
    });

});
