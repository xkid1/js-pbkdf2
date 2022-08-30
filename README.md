# pbkdf2.js

[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml)
[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg?branch=main&event=release)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml)
[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg?event=registry_package)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml)
[![PBKDF2Js](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml/badge.svg?event=fork)](https://github.com/xkid1/pbkdf2.js/actions/workflows/main.yml)

Password-Based Key: This library provides the functionality to encrypt and decrypt data using password from frontend vice versa backend. It can send as encrypted to your http request the decrypt to the  frontend vice versa backend.


# Installation

`npm i -D pbkdf2js`


## Usage

```
import pbkdf2js from 'pbkdf2js';

const encrypt = await pbkdf2js.encryptData('process.env.SECRET_KEY', JSON.stringify({example: 'example'}));

conso.log(encrypt)

const decrypt = await pbkdf2js.decryptData('process.env.SECRET_KEY', 'WOwy8gEvHxEuLe0wl2A/cA=='));

conso.log(decrypt)

```

