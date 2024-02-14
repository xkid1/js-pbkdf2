import PBKDF2BE from './js-pbkdf2-be';
// import JSPBKDF2FE from './js-pbkdf2-fe';

const be = new PBKDF2BE();
// const fe = new JSPBKDF2FE();
// const encryptFE = fe.encrypt;
// const decryptFE = fe.decrypt;
const encryptBE = be.encrypt;
const decryptBE = be.decrypt;

module.exports = {
  //   encryptFE,
  //   decryptFE,
  encryptBE,
  decryptBE,
};
