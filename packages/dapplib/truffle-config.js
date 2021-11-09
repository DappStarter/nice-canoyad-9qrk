require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food current rescue sadness club goddess light army gate'; 
let testAccounts = [
"0xb47c3f7715413e2dc432632a3579e06ee172c8576fd6207ff41f2ef5e5faf56b",
"0x8bb309fba5792fbff431da6c010282e824fc9834ef0a2e787a50586da14927f4",
"0x3e12e673a2d539e21a9fc2f2b1fb5affda1069ca040c07d970f3090b37f49c14",
"0xe1f425c429a07ae2b0d346a7b2483426f6a4c8ad5682a9da8f3c42c63670e32f",
"0x0fc274797024cb61b31bb55f493508dd69504681d6324ee5e6e9ca59ff5e9028",
"0x3f0caeacc3d6cf4ca36ad8c7678f7fbf681e74ee2070accc3762232a39923acc",
"0x8b63f4bf77051863dfe1b32b2073656d6ec28fce081ff5e4cf78180e065b87e1",
"0xc09fde1e3048d8b3dbed1d1cc432ef0c4ec11f91b8be7ca377c7899bb6d59c42",
"0x9cacc8c868861b18f08bcf165877a729e1e5a6dcf298fee4377b71c9a4e26915",
"0x02ef6e1100d4d9df7579cede99082fe9260d90fa22f18c6af1de3dca75806215"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


