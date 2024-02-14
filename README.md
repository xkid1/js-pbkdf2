# js-pbkdf2

[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml) [![Create Release](https://github.com/xkid1/pbkdf2.js/actions/workflows/release-tag.yml/badge.svg?branch=main)](https://github.com/xkid1/pbkdf2.js/actions/workflows/release-tag.yml) [![publish](https://github.com/xkid1/pbkdf2.js/actions/workflows/publish.yml/badge.svg)](https://github.com/xkid1/pbkdf2.js/actions/workflows/publish.yml)
[![LICENSE](https://img.shields.io/github/license/xkid1/js-pbkdf2.svg)](LICENSE)
[![Featured on Openbase](https://badges.openbase.com/js/featured/js-pbkdf2.svg)](https://openbase.com/js/js-pbkdf2)

Password-Based Key: This library provides the functionality, and required a password to encrypt and decrypt data, can be use from frontend and backend. It can also send the encrypted data through http request.


# Installation

`npm i js-pbkdf2`


## Usage to encrypt and decrypt from frontend

```
import { encrypt, decrypt } from 'js-pbkdf2';

const encrypted = await encrypt('secret password', JSON.stringify({example: 'example'}));

const encrypt2 = await encrypt('secret password', 'sample string');

const decrypted = await decrypt('secret password', 'WOwy8gEvHxEuLe0wl2A/cA==');
```

## Usage to encrypt and decrypt backend

```
import { encrypt, decrypt } from 'js-pbkdf2';

const encrypted = await encrypt('secret password', JSON.stringify({example: 'example'}));

const encrypt2 = await encrypt('process.env.SECRET_KEY', 'sample string');

const buf = await encrypt('process.env.SECRET_KEY', JSON.stringify({ id: 1, name: 'test', buffer: Buffer.from('hello'), typeArr: new Uint8Array([1, 2, 3]),}));

const decrypt = await jsPbkdf2.decryptData('process.env.SECRET_KEY', 'WOwy8gEvHxEuLe0wl2A/cA==');

```

## Sent http request

```
import { encrypt, decrypt } from 'js-pbkdf2';

const encrypted = await encrypt('secret password', JSON.stringify({userName: 'example', password: 'sample'}));

fetch('https://127.0.0.1/api/sample', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(encrypted),    
})
```

## Status
| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [jsPbkdf2]            | [![jsPbkdf2-status]][jsPbkdf2-package]                   | Password-Based Key encrypt and decrypt                      |

[jsPbkdf2]: https://github.com/xkid1/pbkdf2.js
[jsPbkdf2-package]: https://www.npmjs.com/package/js-pbkdf2
[jsPbkdf2-status]: https://img.shields.io/npm/v/js-pbkdf2
