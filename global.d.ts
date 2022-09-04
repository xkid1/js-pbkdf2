export interface PBKDF2Interface {
    encryptData(password: string, data: string): Promise<string>;
    decryptData(password: string, data: string): Promise<string>;
}
