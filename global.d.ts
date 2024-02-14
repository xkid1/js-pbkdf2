/**
 * PBKDF2 is a key derivation function that can be used to derive keys from a password.
 * It can be useda password based key derivation function (PBKDF2) or a password based key stretching function (PBKDF2-HMAC).
 * and it can be used from the frontend or the backend. to encrypt and decrypt data.
 * @function encryptFE - (Frontend) encrypt data with a password
 * @function decryptFE - (Frontend) decrypt data with a password
 * @function encryptBE - (Backend) encrypt data with a password
 * @function decryptBE - (Backend) decrypt data with a password
 */
declare module 'js-pbkdf2' {
  /**
   * encrypt data from (Frontend), return base64 string
   * @param password - password must be required for encrypt and decrypt
   * @param data - The data must be Json string for encrypt
   */
  function encryptFE(password: string, data: string): Promise<string>;

  /**
   * decrypt data from (Frontend), return string
   * @param password - password must be required for decrypt
   * @param data - data for decrypt
   */
  function decryptFE(password: string, data: string): Promise<string>;

  /**
   * encrypt data from (Backend), return base64 string
   * @param password - password must be required for encrypt and decrypt
   * @param data - The data must be Json string for encrypt
   */
  function encryptBE(password: string, data: string): Promise<string>;

  /**
   * decrypt data from (Backend), return string
   * @param password - password must be required for decrypt
   * @param data - data for decrypt
   */
  function decryptBE(password: string, data: string): Promise<string>;
}
