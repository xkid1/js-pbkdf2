import { Base, Helper } from '../lib';

class JSPBKDF2FE extends Base {
  private instanceHelper: Helper;

  constructor() {
    super();
    this.instanceHelper = new Helper(
      window.crypto,
      new Uint8Array(16).buffer,
      new Uint8Array(16).buffer
    );
  }

  /**
   * encrypt data, return base64 string
   *
   * @param password - password must be required for encrypt and decrypt
   * @param data - The data must be string, json string
   * @returns {Promise<string>}
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
        resolve(await this.instanceHelper.processToEncrypt(password, data));
      } catch (error: any) {
        reject(error.message);
      }
    });
  }

  /**
   * decrypt data, return string
   *
   * @param password - password must be required for decrypt
   * @param data - data for decrypt
   * @returns {Promise<string>}
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
        resolve(await this.instanceHelper.processToDencrypt(password, data));
      } catch (error: any) {
        reject(error.message);
      }
    });
  }
}

export default JSPBKDF2FE;
