[![Build Status](https://travis-ci.org/smartholdem/sth-js.svg?branch=master)](https://travis-ci.org/smartholdem/sth-js)

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


### To generate a public / private key pair from a given passphrase:

```js
var keyz = sth.crypto.getKeys("pass phrase");
```

response keyz

```shell
{
publicKey: '022b903c7eae707b38e91be3952b2243910fff080b9d158884264f3c6394bd2a3e',
privateKey: ''
}
```

---

get private key:

```js
console.log('privKey:'+keys.d.toBuffer().toString("hex"));
```

response

```shell
privKey:84d6b9b64dd6a2111e2616544e16e07580d590df9a8d5ce1d9dc5a168a1b1188
```


