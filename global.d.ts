declare module 'PBKDF2JS' {
    export interface PBKDF2Interface {
        encryptData(password: string, data: string): Promise<string>;
        decryptData(password: string, data: string): Promise<string>;
    }
    export class PBKDF2JS implements PBKDF2Interface {
        private isCrypto: Crypto;
        private salt: ArrayBuffer;
        private iv: ArrayBuffer;
        constructor();
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
        private passkey;
        private aesKey;
        private stringToBuffer;
        private bufferToBase64;
        private aesEncrypt;
        private aesDecrypt;
    }
}
