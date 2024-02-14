/**
 * PBKDF2 is a key derivation function that can be used to derive keys from a password.
 * It can be useda password based key derivation function (PBKDF2) or a password based key stretching function (PBKDF2-HMAC).
 * and it can be used from the frontend or the backend. to encrypt and decrypt data.
 */
declare module 'js-pbkdf2' {
  /**
   * encrypt data and return base64 string
   * @param password - password must be required for encrypt and decrypt
   * @param data - The data must be Json string for encrypt
   */
  function encrypt(password: string, data: string): Promise<string>;

  /**
   * decrypt data and return string
   * @param password - password must be required for decrypt
   * @param data - data for decrypt
   */
  function decrypt(password: string, data: string): Promise<string>;
}
