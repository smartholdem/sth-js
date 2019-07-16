# SmartHoldem JS Library

JavaScript library for sending SmartHoldem transactions from the client or server

## Installation

```shell
npm install --save sthjs
```

## Tests lib

```
npm test
```

## Build documentation

```
npm build:docs
```

## Build lib for browser

```
npm build:browserify
```

## Clean browser

```
npm clean:browserify
```

## Examples

On the client:

```
<script src="node_modules/sthjs/bundle.min.js"></script>
```

On the server:

```js
var sth = require("sthjs");
```


### Generate a public/private key pair from a given BIP39 or Any Pass Phrase:

```js
const sth = require ('sthjs')
const bip39 = require('bip39')

const MNEMONIC = bip39.generateMnemonic(); // muscle scissors verb useless matrix fall dignity luxury head hurdle unaware mistake
const PUB_KEY = sth.crypto.getKeys(MNEMONIC).publicKey // 029f6aa2c38b8bfc8882ea71008a7a9c204d228fceac2de1299d9f192b33c95cbc
const ADDRESS = sth.crypto.getAddress(PUB_KEY) // SVjFUHYhN6MKjSdcCmqrKza81WNGrArncr

console.log(MNEMONIC) // muscle scissors verb useless matrix fall dignity luxury head hurdle unaware mistake
console.log(ADDRESS) // SVjFUHYhN6MKjSdcCmqrKza81WNGrArncr

---

Get Private key:

```js
console.log('privKey:'+keys.d.toBuffer().toString("hex"));
```

### Send or Receive Tx

see helper https://github.com/smartholdem/sthjs-wrapper






