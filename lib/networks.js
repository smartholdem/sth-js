/** @module networks */

module.exports = {
    /** @type {Network} */
    smartholdem: {
        messagePrefix: '\x18SmartHoldem Signed Message:\n',
        bip32: {
            public: 0x2bf496f, // base58 will have a prefix 'pub'
            private: 0x2bf4537 // base58Priv will have a prefix 'priv'
        },
        pubKeyHash: 0x3f, // Addresses will begin with 'S'
        // 	BIP44 coin type is from https://github.com/satoshilabs/slips/blob/master/slip-0044.md - 255 SmartHoldem
        wif: 0xff, // Network prefix for wif generation
        activePeer: {
            ip: 'node0.smartholdem.io',
            port: 6100
        },
        peers: [
            { ip: '185.206.144.49', port: 6100 },
            { ip: '156.67.218.218', port: 6100 },
            { ip: '138.68.78.246', port: 6100 },
            { ip: '46.173.218.164', port: 6100 },
            { ip: '63.142.250.30', port: 6100 },
            { ip: '185.203.117.137', port: 6100 },
            { ip: '151.80.136.51', port: 6100 },
            { ip: '91.218.230.11', port: 6100 },
            { ip: '185.87.51.221', port: 6100 },
            { ip: '95.183.9.205', port: 6100 },
            { ip: '195.133.1.45', port: 6100 },
            { ip: '139.59.68.3', port: 6100 },
            { ip: '212.73.150.214', port: 6100 },
            { ip: '195.133.197.108', port: 6100 },
            { ip: '5.189.189.46', port: 6100 },
            { ip: '145.239.85.96', port: 6100 },
            { ip: '139.162.10.155', port: 6100 },
            { ip: '195.133.144.144', port: 6100 }
        ],
    },
    /** @type {Network} */
    testnet: {
        messagePrefix: '\x18SmartHoldem Testnet Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x41, // Addresses will begin with 'T'
        wif: 0xba // Network prefix for wif generation
    },
    /** @type {Network} */
    bitcoin: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        wif: 0x80
    },
    /** @type {Network} */
    postcoin: {
        messagePrefix: '\x18Postcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x37,
        wif: 0xb7
    }
}