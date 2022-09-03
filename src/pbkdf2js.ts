import crypto from 'crypto';
const { webcrypto } = crypto;

interface PBKDF2Interface {
    encryptData: (password: string, data: string) => Promise<string>;
    decryptData: (password: string, data: string) => Promise<string>;
}
/**
 * PBKDF2 is a key derivation function that can be used to derive keys from a password.
 * It can be useda password based key derivation function (PBKDF2) or a password based key stretching function (PBKDF2-HMAC).
 * and it can be used from the frontend or the backend. to encrypt and decrypt data.
 */
class PBKDF2JS implements PBKDF2Interface {
    private isCrypto: Crypto;
    private salt: ArrayBuffer;
    private iv: ArrayBuffer;
    constructor() {
        this.isCrypto =
            typeof window !== 'undefined'
                ? window.crypto
                : (webcrypto as Crypto);
        this.salt = new Uint8Array(16).buffer;
        this.iv = new Uint8Array(16).buffer;
    }
    /**
     * encrypt data, return base64 string
     * @param password - password must be required for encrypt and decrypt
     * @param data - The data must be Json string for encrypt
     */
    encryptData(password: string, data: string): Promise<string> {
        if (password === '' && data === '') {
            throw new Error('password and data must be required');
        }
        if (password === '') {
            throw new Error('password must be required');
        }
        if (data === '') {
            throw new Error('data must be required');
        }
        return new Promise(async (resolve, reject) => {
            try {
                if (password && data) {
                    const passkey = await this.passkey(password);
                    const aesKey = await this.aesKey(passkey);
                    const dataBuffer = this.stringToBuffer(data);
                    const resultBuffer = await this.aesEncrypt(
                        aesKey,
                        dataBuffer
                    );
                    resolve(this.bufferToBase64(resultBuffer));
                }
            } catch (error) {
                reject(error);
            }
        });
    }
    /**
     * decrypt data, return string
     * @param password - password must be required for decrypt
     * @param data - data for decrypt
     */
    decryptData(password: string, data: string): Promise<string> {
        if (password === '' && data === '') {
            throw new Error('password and data must be required');
        }
        if (password === '') {
            throw new Error('password must be required');
        }
        if (data === '') {
            throw new Error('data must be required');
        }

        return new Promise(async (resolve, reject) => {
            try {
                if (password && data) {
                    const passkey = await this.passkey(password);
                    const aesKey = await this.aesKey(passkey);
                    const dataBuffer = this.base64ToBuffer(data);
                    const resultBuffer = await this.aesDecrypt(
                        aesKey,
                        dataBuffer
                    );
                    resolve(this.bufferToString(resultBuffer));
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    //string to buffer
    private stringToBuffer(str: string): ArrayBuffer {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0; i < str.length; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    //fontend buffer to base64
    private bufferToBase64(buf: ArrayBuffer): string {
        const bytes = new Uint8Array(buf);
        const len = bytes.byteLength;
        let base64 = '';
        for (let i = 0; i < len; i += 3) {
            base64 += String.fromCharCode(bytes[i]);
        }
        return typeof window !== 'undefined'
            ? window.btoa(base64)
            : Buffer.from(buf).toString('base64');
    }
    //decode bass64 to buffer
    private base64ToBuffer(base64: string): ArrayBuffer {
        const binaryString =
            typeof window !== 'undefined'
                ? window.atob(base64)
                : Buffer.from(base64, 'base64').toString('binary');
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }
    //buffer to string
    private bufferToString(buf: ArrayBuffer): string {
        const bytes = new Uint8Array(buf);
        const len = bytes.byteLength;
        let str = '';
        for (let i = 0; i < len; i++) {
            str += String.fromCharCode(bytes[i]);
        }
        return str;
    }
    //passkey
    private async passkey(password: string): Promise<CryptoKey> {
        return await this.isCrypto.subtle.importKey(
            'raw',
            this.stringToBuffer(password),
            { name: 'PBKDF2' },
            false,
            ['deriveKey']
        );
    }
    //aesKey
    private async aesKey(passkey: CryptoKey): Promise<CryptoKey> {
        return await this.isCrypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: this.salt,
                iterations: 1000,
                hash: 'SHA-256',
            },
            passkey,
            { name: 'AES-CBC', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    }

    //aes encrypt
    private async aesEncrypt(aesKey: CryptoKey, data: ArrayBuffer) {
        return await this.isCrypto.subtle.encrypt(
            { name: 'AES-CBC', iv: this.iv },
            aesKey,
            data
        );
    }
    //aes decrypt
    private async aesDecrypt(aesKey: CryptoKey, data: ArrayBuffer) {
        return await this.isCrypto.subtle.decrypt(
            { name: 'AES-CBC', iv: this.iv },
            aesKey,
            data
        );
    }
}

export default PBKDF2JS;
