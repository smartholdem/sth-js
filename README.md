[![Build Status](https://travis-ci.org/smartholdem/sth-js.svg?branch=master)](https://travis-ci.org/smartholdem/sth-js)

# SmartHoldem JS Library

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

```
var sth = require("sthjs");
```


## To generate a public / private key pair from a given passphrase:

```
var keyz = sth.crypto.getKeys("pass phrase");
```

response

```shell
{
publicKey: '022b903c7eae707b38e91be3952b2243910fff080b9d158884264f3c6394bd2a3e',
privateKey: ''
}
```

