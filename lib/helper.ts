import Base from './base';
import Common from './common';
class Helper extends Base {
  private isCrypto: Crypto;
  private salt: ArrayBuffer;
  private iv: ArrayBuffer;
  private instanceCommon: Common;

  constructor(isCrypto: Crypto, salt: ArrayBuffer, iv: ArrayBuffer) {
    super();
    this.isCrypto = isCrypto;
    this.salt = salt;
    this.iv = iv;
    this.instanceCommon = new Common();
  }

  /**
   * Passkey
   * @function passkey
   * @param password
   * @returns {Promise<CryptoKey>}
   */
  async passkey(password: string): Promise<CryptoKey> {
    if (password === undefined || password === null || password === '') {
      throw new Error('Password is required');
    }
    return await this.isCrypto.subtle.importKey(
      'raw',
      this.instanceCommon.stringToBuffer(password),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );
  }

  /**
   * AES key
   * @function aesKey
   * @param passkey
   * @returns {Promise<CryptoKey>}
   */
  async aesKey(passkey: CryptoKey): Promise<CryptoKey> {
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

  /**
   * AES encrypt
   * @function aesEncrypt
   * @param aesKey - CryptoKey
   * @param data - ArrayBuffer
   * @returns {Promise<ArrayBuffer>}
   */
  async aesEncrypt(aesKey: CryptoKey, data: ArrayBuffer): Promise<ArrayBuffer> {
    return await this.isCrypto.subtle.encrypt(
      { name: 'AES-CBC', iv: this.iv },
      aesKey,
      data
    );
  }

  /**
   * AES decrypt
   * @function aesDecrypt
   * @param aesKey - CryptoKey
   * @param data - ArrayBuffer
   * @returns {Promise<ArrayBuffer>}
   */
  async aesDecrypt(aesKey: CryptoKey, data: ArrayBuffer): Promise<ArrayBuffer> {
    return await this.isCrypto.subtle.decrypt(
      { name: 'AES-CBC', iv: this.iv },
      aesKey,
      data
    );
  }

  /**
   * Begin to encrypt
   *
   * @param password
   * @param data
   * @returns {Promise<string>}
   */
  async processToEncrypt(password: string, data: string): Promise<string> {
    const passkey = await this.passkey(password);
    const aesKey = await this.aesKey(passkey);
    const dataBuffer = this.instanceCommon.stringToBuffer(data);
    const resultBuffer = await this.aesEncrypt(aesKey, dataBuffer);
    return this.instanceCommon.bufferToBase64(resultBuffer);
  }

  /**
   * Begin to decrypt
   *
   * @param decrypt
   * @param data
   * @returns {Promise<string>}
   */
  async processToDencrypt(password: string, data: string): Promise<string> {
    const passkey = await this.passkey(password);
    const aesKey = await this.aesKey(passkey);
    const dataBuffer = this.instanceCommon.base64ToBuffer(data);
    const resultBuffer = await this.aesDecrypt(aesKey, dataBuffer);

    return this.instanceCommon.bufferToString(resultBuffer);
  }
}

export default Helper;
