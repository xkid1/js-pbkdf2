import PBKDF2BE from './js-pbkdf2-be';
import JSPBKDF2FE from './js-pbkdf2-fe';

interface InterfaceModulePackage {
  encryptFE: Function;
  decryptFE: Function;
  encryptBE: Function;
  decryptBE: Function;
}

const modulePackage = {} as InterfaceModulePackage;

if (typeof window !== 'undefined') {
  const fe = new JSPBKDF2FE();
  modulePackage.encryptFE = fe.encrypt;
  modulePackage.decryptFE = fe.decrypt;
} else {
  const be = new PBKDF2BE();
  modulePackage.encryptBE = be.encrypt;
  modulePackage.decryptBE = be.decrypt;
}

console.log('Module Package: ', modulePackage);

module.exports = modulePackage;
