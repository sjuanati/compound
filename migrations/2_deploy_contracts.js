const Compound = artifacts.require("Compound");

module.exports = function (deployer, network) {
	let comptrollerAddress, priceOracleProxyAddress;

	console.log('network', network)

	if (network === 'rinkeby') {
		comptrollerAddress = '0x2EAa9D77AE4D8f9cdD9FAAcd44016E746485bddb';
		priceOracleProxyAddress = '0x5722A3F60fa4F0EC5120DCD6C386289A4758D1b2';
	} else if (network === 'ropsten' || network === 'ropsten-fork') {
		comptrollerAddress = '0x54188bBeDD7b68228fa89CbDDa5e3e930459C6c6';
		priceOracleProxyAddress = '0xb2b3d5B4E35881D518fa2062325F118A6Ebb6C4A';
	} else if (network === 'goerli') {
		comptrollerAddress = '0x627EA49279FD0dE89186A58b8758aD02B6Be2867';
		priceOracleProxyAddress = '0xd0c84453b3945cd7e84BF7fc53BfFd6718913B71';
	} else if (network === 'mainnet') {
		comptrollerAddress = '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B';
		priceOracleProxyAddress = '0xDDc46a3B076aec7ab3Fc37420A8eDd2959764Ec4';
	};

	deployer.deploy(Compound, comptrollerAddress, priceOracleProxyAddress);
};

// Compound at Ropsten: 0x45c307b844b3bE1cE9C2823fBE16235f5172dc6B


// cDAI: 	0x8354C3a332FFB24E3A27be252E01aCFE65A33B35
// cUNI: 	0x22531F0f3a9c36Bfc3b04c4c60df5168A1cFCec3
// cBAT: 	0x9E95c0b2412cE50C37a121622308e7a6177F819D
