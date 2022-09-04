# pbkdf2js.js

[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml) [![Create Release](https://github.com/xkid1/pbkdf2.js/actions/workflows/release-tag.yml/badge.svg?branch=main)](https://github.com/xkid1/pbkdf2.js/actions/workflows/release-tag.yml) [![publish](https://github.com/xkid1/pbkdf2.js/actions/workflows/publish.yml/badge.svg)](https://github.com/xkid1/pbkdf2.js/actions/workflows/publish.yml)

Password-Based Key: This library provides the functionality to encrypt and decrypt data using password from frontend vice versa backend. It can send as encrypted to your http request the decrypt to the  frontend vice versa backend.


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

## Status
| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [jsPbkdf2]            | [![jsPbkdf2-status]][jsPbkdf2-package]                   | Password-Based Key encrypt and decrypt                      |

[jsPbkdf2]: https://github.com/xkid1/pbkdf2.js
[jsPbkdf2-package]: https://www.npmjs.com/package/js-pbkdf2
[jsPbkdf2-status]: https://img.shields.io/npm/v/js-pbkdf2
