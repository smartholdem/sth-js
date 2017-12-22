module.exports = {
    smartholdem: {
        messagePrefix: '\x18SmartHoldem Signed Message:\n',
        bip32: {
            public: 0x2bf496f, // base58 will have a prefix 'pub'
            private: 0x2bf4537 // base58Priv will have a prefix 'priv'
        },
        pubKeyHash: 0x3f, // Addresses will begin with 'S'
        // 	BIP44 coin type is from https://github.com/satoshilabs/slips/blob/master/slip-0044.md - 255 SmartHoldem
        wif: 0xff // Network prefix for wif generation
    },
    testnet: {
        messagePrefix: '\x18SmartHoldem Testnet Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x41, // Addresses will begin with 'a'
        wif: 0xba // Network prefix for wif generation
    },
    bitcoin: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        wif: 0x80
    },
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
