// import { Base, Common, Helper } from "~/lib";

// /**
//  * @description Fronted pbkd2 encryption and decryption
//  * @class JSPBKDF2FE
//  */
// class JSPBKDF2FE extends Base {
//   constructor() {
//     if (typeof window === 'undefined') {
//       throw new Error('window is not defined');
//     }
//     super(window.crypto, new Uint8Array(16).buffer, new Uint8Array(16).buffer);
//   }

//   /**
//    * encrypt data, return base64 string
//    * @param password - password must be required for encrypt and decrypt
//    * @param data - The data must be string, json string
//    */
//   encrypt(password: string, data: string): Promise<string> {
//     if (password === '' && data === '') {
//       throw new Error('password and data is required');
//     }
//     if (typeof password !== 'string' && typeof data !== 'string') {
//       throw new Error('password and data must be string');
//     }
//     return new Promise(async (resolve, reject) => {
//       try {
//         const passkey = await this.passkey(password);
//         const aesKey = await this.aesKey(passkey);
//         const dataBuffer = this.stringToBuffer(data);
//         const resultBuffer = await this.aesEncrypt(aesKey, dataBuffer);
//         resolve(this.bufferToBase64(resultBuffer));
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }

//   /**
//    * decrypt data, return string
//    * @param password - password must be required for decrypt
//    * @param data - data for decrypt
//    */

//   decrypt(password: string, data: string): Promise<string> {
//     if (password === '' && data === '') {
//       throw new Error('password and data is required');
//     }
//     if (typeof password !== 'string' && typeof data !== 'string') {
//       throw new Error('password and data must be string');
//     }

//     return new Promise(async (resolve, reject) => {
//       try {
//         const passkey = await this.passkey(password);
//         const aesKey = await this.aesKey(passkey);
//         const dataBuffer = this.base64ToBuffer(data);
//         const resultBuffer = await this.aesDecrypt(aesKey, dataBuffer);
//         resolve(this.bufferToString(resultBuffer));
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
// }

// export default JSPBKDF2FE;
