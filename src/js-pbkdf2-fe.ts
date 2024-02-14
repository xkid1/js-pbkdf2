import { Base, Helper, Common } from '../lib';

/**
 * @description Fronted pbkd2 encryption and decryption
 * @class JSPBKDF2FE
 */
class JSPBKDF2FE extends Base {
  private instanceHelper: Helper;
  private instanceCommon: Common;
  constructor() {
    super();
    this.instanceHelper = new Helper(
      window.crypto,
      new Uint8Array(16).buffer,
      new Uint8Array(16).buffer
    );
    this.instanceCommon = new Common();
  }

  /**
   * encrypt data, return base64 string
   * @param password - password must be required for encrypt and decrypt
   * @param data - The data must be string, json string
   */
  encrypt(password: string, data: string): Promise<string> {
    if (password === '' && data === '') {
      throw new Error('password and data is required');
    }
    if (typeof password !== 'string' && typeof data !== 'string') {
      throw new Error('password and data must be string');
    }
    return new Promise(async (resolve, reject) => {
      try {
        const passkey = await this.instanceHelper.passkey(password);
        const aesKey = await this.instanceHelper.aesKey(passkey);
        const dataBuffer = this.instanceCommon.stringToBuffer(data);
        const resultBuffer = await this.instanceHelper.aesEncrypt(
          aesKey,
          dataBuffer
        );
        resolve(this.instanceCommon.bufferToBase64(resultBuffer));
      } catch (error: any) {
        reject(error.message);
      }
    });
  }

  /**
   * decrypt data, return string
   * @param password - password must be required for decrypt
   * @param data - data for decrypt
   */

  decrypt(password: string, data: string): Promise<string> {
    if (password === '' && data === '') {
      throw new Error('password and data is required');
    }
    if (typeof password !== 'string' && typeof data !== 'string') {
      throw new Error('password and data must be string');
    }

    return new Promise(async (resolve, reject) => {
      try {
        const passkey = await this.instanceHelper.passkey(password);
        const aesKey = await this.instanceHelper.aesKey(passkey);
        const dataBuffer = this.instanceCommon.base64ToBuffer(data);
        const resultBuffer = await this.instanceHelper.aesDecrypt(
          aesKey,
          dataBuffer
        );
        resolve(this.instanceCommon.bufferToString(resultBuffer));
      } catch (error: any) {
        reject(error.message);
      }
    });
  }
}

export default JSPBKDF2FE;
