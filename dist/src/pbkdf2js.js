"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var webcrypto = crypto_1.default.webcrypto;
/**
 * PBKDF2 is a key derivation function that can be used to derive keys from a password.
 * It can be useda password based key derivation function (PBKDF2) or a password based key stretching function (PBKDF2-HMAC).
 * and it can be used from the frontend or the backend. to encrypt and decrypt data.
 */
var PBKDF2JS = /** @class */ (function () {
    function PBKDF2JS() {
        this.isCrypto =
            typeof window !== 'undefined'
                ? window.crypto
                : webcrypto;
        this.salt = new Uint8Array(16).buffer;
        this.iv = new Uint8Array(16).buffer;
    }
    /**
     * encrypt data, return base64 string
     * @param password - password must be required for encrypt and decrypt
     * @param data - The data must be Json string for encrypt
     */
    PBKDF2JS.prototype.encryptData = function (password, data) {
        var _this = this;
        if (password === '' && data === '') {
            throw new Error('password and data must be required');
        }
        if (password === '') {
            throw new Error('password must be required');
        }
        if (data === '') {
            throw new Error('data must be required');
        }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var passkey, aesKey, dataBuffer, resultBuffer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(password && data)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.passkey(password)];
                    case 1:
                        passkey = _a.sent();
                        return [4 /*yield*/, this.aesKey(passkey)];
                    case 2:
                        aesKey = _a.sent();
                        dataBuffer = this.stringToBuffer(data);
                        return [4 /*yield*/, this.aesEncrypt(aesKey, dataBuffer)];
                    case 3:
                        resultBuffer = _a.sent();
                        resolve(this.bufferToBase64(resultBuffer));
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * decrypt data, return string
     * @param password - password must be required for decrypt
     * @param data - data for decrypt
     */
    PBKDF2JS.prototype.decryptData = function (password, data) {
        var _this = this;
        if (password === '' && data === '') {
            throw new Error('password and data must be required');
        }
        if (password === '') {
            throw new Error('password must be required');
        }
        if (data === '') {
            throw new Error('data must be required');
        }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var passkey, aesKey, dataBuffer, resultBuffer, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(password && data)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.passkey(password)];
                    case 1:
                        passkey = _a.sent();
                        return [4 /*yield*/, this.aesKey(passkey)];
                    case 2:
                        aesKey = _a.sent();
                        dataBuffer = this.base64ToBuffer(data);
                        return [4 /*yield*/, this.aesDecrypt(aesKey, dataBuffer)];
                    case 3:
                        resultBuffer = _a.sent();
                        resolve(this.bufferToString(resultBuffer));
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        reject(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    //string to buffer
    PBKDF2JS.prototype.stringToBuffer = function (str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for (var i = 0; i < str.length; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };
    //fontend buffer to base64
    PBKDF2JS.prototype.bufferToBase64 = function (buf) {
        var bytes = new Uint8Array(buf);
        var len = bytes.byteLength;
        var base64 = '';
        for (var i = 0; i < len; i += 3) {
            base64 += String.fromCharCode(bytes[i]);
        }
        return typeof window !== 'undefined'
            ? window.btoa(base64)
            : Buffer.from(buf).toString('base64');
    };
    //decode bass64 to buffer
    PBKDF2JS.prototype.base64ToBuffer = function (base64) {
        var binaryString = typeof window !== 'undefined'
            ? window.atob(base64)
            : Buffer.from(base64, 'base64').toString('binary');
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    };
    //buffer to string
    PBKDF2JS.prototype.bufferToString = function (buf) {
        var bytes = new Uint8Array(buf);
        var len = bytes.byteLength;
        var str = '';
        for (var i = 0; i < len; i++) {
            str += String.fromCharCode(bytes[i]);
        }
        return str;
    };
    //passkey
    PBKDF2JS.prototype.passkey = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isCrypto.subtle.importKey('raw', this.stringToBuffer(password), { name: 'PBKDF2' }, false, ['deriveKey'])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //aesKey
    PBKDF2JS.prototype.aesKey = function (passkey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isCrypto.subtle.deriveKey({
                            name: 'PBKDF2',
                            salt: this.salt,
                            iterations: 1000,
                            hash: 'SHA-256',
                        }, passkey, { name: 'AES-CBC', length: 256 }, false, ['encrypt', 'decrypt'])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //aes encrypt
    PBKDF2JS.prototype.aesEncrypt = function (aesKey, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isCrypto.subtle.encrypt({ name: 'AES-CBC', iv: this.iv }, aesKey, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //aes decrypt
    PBKDF2JS.prototype.aesDecrypt = function (aesKey, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isCrypto.subtle.decrypt({ name: 'AES-CBC', iv: this.iv }, aesKey, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PBKDF2JS;
}());
exports.default = PBKDF2JS;
