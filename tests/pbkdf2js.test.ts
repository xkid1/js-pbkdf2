import { describe, expect, test, it } from '@jest/globals';
import { webcrypto } from 'crypto';
const JsPbkdf2 = require('../src/js-pbkdf2');
const jsPbkdf2 = new JsPbkdf2(
    typeof window !== 'undefined' ? crypto : webcrypto
);

describe('JsPbkdf2', () => {
    it('should be defined', () => {
        expect(JsPbkdf2).toBeDefined();
    }),
        it('should be a function to encrypt', () => {
            expect(typeof jsPbkdf2.encryptData).toBe('function');
        }),
        it('should be a function to decrypt', () => {
            expect(typeof jsPbkdf2.decryptData).toBe('function');
        }),
        it('should return a JsPbkdf2 instance', () => {
            expect(jsPbkdf2 instanceof JsPbkdf2).toBe(true);
        }),
        test('Ecrypt should return a string', async () => {
            const password = 'password';
            const data = 'test sample';
            const result = await jsPbkdf2.encryptData(password, data);
            expect(typeof result).toBe('string');
        }),
        test('Decrypt should return a string', async () => {
            const password = 'password';
            const data = 'clurRNgu0sJAB5lI60NAtw==';
            const result = await jsPbkdf2.decryptData(password, data);
            expect(typeof result).toBe('string');
        });
});
