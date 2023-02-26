/**
 * PBKDF2 is a key derivation function that can be used to derive keys from a password.
 * It can be useda password based key derivation function (PBKDF2) or a password based key stretching function (PBKDF2-HMAC).
 * and it can be used from the frontend or the backend. to encrypt and decrypt data.
 * @param isCrypto  - reuired to determine if it is a browser or nodejs
 * @function encryptData - encrypt data with a password
 * @function decryptData - decrypt data with a password
 */
declare module 'js-pbkdf2' {
    export class JsPbkdf2 {
        constructor(isCrypto: Crypto);
        /**
         * encrypt data, return base64 string
         * @param password - password must be required for encrypt and decrypt
         * @param data - The data must be Json string for encrypt
         */
        encryptData(password: string, data: string): Promise<string>;

        /**
         * decrypt data, return string
         * @param password - password must be required for decrypt
         * @param data - data for decrypt
         */
        decryptData(password: string, data: string): Promise<string>;
    }
}
