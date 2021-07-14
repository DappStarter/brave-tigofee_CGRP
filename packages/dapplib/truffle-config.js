require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski struggle cruise oval under grace civil army gate'; 
let testAccounts = [
"0xc8577699d5fb3f8417d79019d3c71d99c6754d6a1b442866178933fefbe2b259",
"0x72476dfa3af46602c8b98fd76935852c2662dc3fc85f16376b58f4633e781e77",
"0x3da0233c672533b60be07510b4766fc0538e0863eb096eda8feca1fce3cc61a2",
"0xefc86d0d56311ecbdc8c0087047e72fa38dbfdf703fbf1517d1de6104a95ccbe",
"0x599cf18a47f33ab4e40c9e7f141e1ae17131021ee80bebdc2ade9d4555c6a058",
"0x199f95e28affbb57227d078bdbc6cccd07d564e5e969d5f9b931a41dcc48d835",
"0x1d6b279261272488baaae5a5239e681fea4a15004480dbcee6bdf1630f5982f0",
"0x9532b4dc112ee19871b3bce94a0428dd34178add8d301a4394ffa9c8ceca7ec8",
"0x4f2b23f93142c2e9ee7e3d6cdf5eb8c4c2ea96f03b26c5fa4ebfd4014ac3de69",
"0x413897e726d7a0ec074b6091b030f0e6ae130c3c54517a72c3939d505145505d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

