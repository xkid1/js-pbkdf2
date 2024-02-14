import Base from './base';

class Common extends Base {
  constructor() {
    super();
  }

  /**
   * String to buffer
   * @function
   * @param str - string
   * @returns {ArrayBuffer}  ArrayBuffer
   */
  stringToBuffer(str: string): ArrayBuffer {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0; i < str.length; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  /**
   * ArrayBuffer to base64
   * @function bufferToBase64
   * @param buf - ArrayBuffer
   * @returns {string} - String
   */

  bufferToBase64(buf: ArrayBuffer): string {
    const bytes = new Uint8Array(buf);
    const len = bytes.byteLength;
    let base64 = '';
    for (let i = 0; i < len; i++) {
      base64 += String.fromCharCode(bytes[i]);
    }
    return typeof window !== 'undefined'
      ? window.btoa(base64)
      : Buffer.from(buf).toString('base64');
  }

  /**
   * String to buffer
   * @function base64ToBuffer
   * @param base64 - base64 string
   * @returns {ArrayBuffer} - ArrayBuffer
   */
  base64ToBuffer(base64: string): ArrayBuffer {
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

  /**
   * ArrayBuffer to string
   * @function bufferToString
   * @param buf - ArrayBuffer
   * @returns {string} - string
   */
  bufferToString(buf: ArrayBuffer): string {
    const bytes = new Uint8Array(buf);
    const len = bytes.byteLength;
    let str = '';
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  }
}

export default Common;
