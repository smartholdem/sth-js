/** @module networks */

module.exports = {
    /** @type {Network} */
    smartholdem: {
        messagePrefix: '\x18SmartHoldem Signed Message:\n',
        bip32: {
            public: 0x2bf496f, // base58 will have a prefix 'pub'
            private: 0x2bf4537 // base58Priv will have a prefix 'priv'
        },
        pubKeyHash: 0x3f, // Addresses will begin with 'S' (dec 63)
        // 	BIP44 coin type is from https://github.com/satoshilabs/slips/blob/master/slip-0044.md - 255 SmartHoldem
        wif: 0xff // Network prefix for wif generation (dec 255)
    },
    /** @type {Network} */
    devnet: {
        messagePrefix: '\x18SmartHoldem DevNet Signed Message:\n',
        bip32: {
            public: 0x2bf4970,
            private: 0x2bf4538
        },
        name: 'devnet',
        nethash: '3a6d2bec6798dedea99a1e6c64120a3876781b85e46bb75908aba07ffda61360',
        token: 'DSTH',
        symbol: 'DEV',
        pubKeyHash: 0x1e, // Dev Addresses will begin with 'D' (dec 30)
        explorer: 'https://devexplorer.smartholdem.io',
        wif: 0x1, // Network prefix for wif generation
        activePeer: {
            ip: 'nodedev.smartholdem.io',
            port: 6101
        },
        peers: [
            { ip: '88.198.67.196', port: 6101 },
            { ip: '213.239.207.170', port: 6101 }
        ]
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