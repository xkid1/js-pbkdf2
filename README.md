# js-pbkdf2

[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml) [![Create Release](https://github.com/xkid1/pbkdf2.js/actions/workflows/release-tag.yml/badge.svg?branch=main)](https://github.com/xkid1/pbkdf2.js/actions/workflows/release-tag.yml) [![publish](https://github.com/xkid1/pbkdf2.js/actions/workflows/publish.yml/badge.svg)](https://github.com/xkid1/pbkdf2.js/actions/workflows/publish.yml)
[![LICENSE](https://img.shields.io/github/license/xkid1/js-pbkdf2.svg)](LICENSE)
[![Featured on Openbase](https://badges.openbase.com/js/featured/js-pbkdf2.svg)](https://openbase.com/js/js-pbkdf2)

Password-Based Key: This library provides the functionality, and required a password to encrypt and decrypt data, can be use from frontend and backend. It can also send the encrypted data through http request.


# Installation

`npm i js-pbkdf2`


## Usage to encrypt and decrypt from frontend

```
import JsPbkdf2 from 'js-pbkdf2';

const jsPbkdf2 = new JsPbkdf2(crypto);

const encrypt = await jsPbkdf2.encryptData('process.env.SECRET_KEY', JSON.stringify({example: 'example'}));

const encrypt2 = await jsPbkdf2.encryptData('process.env.SECRET_KEY', 'sample string');

const decrypt = await jsPbkdf2.decryptData('process.env.SECRET_KEY', 'WOwy8gEvHxEuLe0wl2A/cA==');


```



## Usage to encrypt and decrypt backend

```
import JsPbkdf2 from 'js-pbkdf2';
import {webcrypto} from 'crypto';
const jsPbkdf2 = new JsPbkdf2(webcrypto);

const encrypt = await jsPbkdf2.encryptData('process.env.SECRET_KEY', JSON.stringify({example: 'example'}));

const encrypt2 = await jsPbkdf2.encryptData('process.env.SECRET_KEY', 'sample string');

const decrypt = await jsPbkdf2.decryptData('process.env.SECRET_KEY', 'WOwy8gEvHxEuLe0wl2A/cA==');

```

## Sent http request

```
import JsPbkdf2 from 'js-pbkdf2';

const jsPbkdf2 = new JsPbkdf2(crypto);

const encrypt = await jsPbkdf2.encryptData('process.env.SECRET_KEY', JSON.stringify({userName: 'example', password: 'sample'}));

fetch('https://127.0.0.1/api/sample', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(encrypt),    
})


```

## Status
| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [jsPbkdf2]            | [![jsPbkdf2-status]][jsPbkdf2-package]                   | Password-Based Key encrypt and decrypt                      |

[jsPbkdf2]: https://github.com/xkid1/pbkdf2.js
[jsPbkdf2-package]: https://www.npmjs.com/package/js-pbkdf2
[jsPbkdf2-status]: https://img.shields.io/npm/v/js-pbkdf2
