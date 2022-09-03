# pbkdf2.js

[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml)

Password-Based Key: This library provides the functionality to encrypt and decrypt data using password from frontend vice versa backend. It can send as encrypted to your http request the decrypt to the  frontend vice versa backend.


# Installation

`npm i -D pbkdf2js`


## Usage to encrypt

```
import pbkdf2js from 'pbkdf2js';

const encrypt = await pbkdf2js.encryptData('process.env.SECRET_KEY', JSON.stringify({example: 'example'}));

```

## OR

```
import pbkdf2js from 'pbkdf2js';

const encrypt = await pbkdf2js.encryptData('process.env.SECRET_KEY', 'any sample');

```


## Usage to decrypt

```
import pbkdf2js from 'pbkdf2js';

const decrypt = await pbkdf2js.decryptData('process.env.SECRET_KEY', 'WOwy8gEvHxEuLe0wl2A/cA=='));

conso.log(decrypt)

```

## Status
| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [pbkdf2js]          | [![pbkdf2js-status][pbkdf2js-package]                   | Password-Based Key encrypt and decrypt                      |

[pbkdf2js]: https://github.com/xkid1/pbkdf2.js
[pbkdf2js-package]: https://npmjs.com/package/pbkdf2js
[pbkdf2js-status]: https://img.shields.io/npm/v/vue-router.svg

