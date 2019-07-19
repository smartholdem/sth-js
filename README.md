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



## Licenses

The MIT License (MIT)

Copyright (c) 2018 SmartHoldem

Copyright (c) 2016 Ark

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# IMPORTANT NOTE

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.


