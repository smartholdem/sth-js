/** @module networks */

module.exports = {
    /** @type {Network} */
    smartholdem: {
        messagePrefix: '\x18SmartHoldem Signed Message:\n',
        bip32: {
            public: 0x2bf496f, // base58 will have a prefix 'pub'
            private: 0x2bf4537 // base58Priv will have a prefix 'priv'
        },
        name: 'mainnet',
        nethash: 'fc46bfaf9379121dd6b09f5014595c7b7bd52a0a6d57c5aff790b42a73c76da7',
        token: 'SmartHoldem',
        symbol: 'STH',
        pubKeyHash: 0x3f, // Addresses will begin with 'S'
        explorer: 'https://blockexplorer.smartholdem.io',
        // 	BIP44 coin type is from https://github.com/satoshilabs/slips/blob/master/slip-0044.md - 255 SmartHoldem
        wif: 0xff, // Network prefix for wif generation
        activePeer: {
            ip: 'node0.smartholdem.io',
            port: 6100
        },
        peers: [
            { ip: '213.239.207.170', port: 6100 },
            { ip: '88.198.67.196', port: 6100 },
            { ip: '95.183.9.207', port: 6100 },
            { ip: '95.183.9.190', port: 6100 },
            { ip: '95.183.9.191', port: 6100 },
            { ip: '195.133.197.97', port: 6100 },
            { ip: '195.133.144.144', port: 6100 },
            { ip: '194.87.109.198', port: 6100 },
            { ip: '194.87.95.30', port: 6100 },
            { ip: '195.133.1.3', port: 6100 },
            { ip: '194.87.234.129', port: 6100 },
            { ip: '156.67.218.218', port: 6100 },
            { ip: '31.220.52.1', port: 6100 },
            { ip: '89.36.212.238', port: 6100 },
            { ip: '94.177.255.148', port: 6100 },
            { ip: '80.211.31.231', port: 6100 },
            { ip: '80.211.31.162', port: 6100 },
            { ip: '80.211.31.241', port: 6100 },
            { ip: '80.211.31.222', port: 6100 },
            { ip: '80.211.31.90', port: 6100 },
            { ip: '194.182.72.198', port: 6100 },
            { ip: '194.182.68.74', port: 6100 },
            { ip: '194.182.74.66', port: 6100 },
            { ip: '194.182.74.87', port: 6100 },
            { ip: '194.182.74.137', port: 6100 },
            { ip: '194.182.74.218', port: 6100 },
            { ip: '194.182.74.133', port: 6100 },
            { ip: '194.182.74.216', port: 6100 },
            { ip: '194.182.74.73', port: 6100 },
            { ip: '194.182.74.212', port: 6100 }
        ],
    tor: [
            { ip: '4xgx6qwyez5f35vo.onion'}
        ]
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