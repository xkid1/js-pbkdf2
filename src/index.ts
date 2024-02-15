import PBKDF2BE from './js-pbkdf2-be';
import JSPBKDF2FE from './js-pbkdf2-fe';

interface InterfaceModulePackage {
  encrypt: Function;
  decrypt: Function;
}

const modulePackage = {} as InterfaceModulePackage;

if (typeof window !== 'undefined') {
  const fe = new JSPBKDF2FE();
  modulePackage.encrypt = fe.encrypt;
  modulePackage.decrypt = fe.decrypt;
} else {
  const be = new PBKDF2BE();
  modulePackage.encrypt = be.encrypt;
  modulePackage.decrypt = be.decrypt;
}

module.exports = modulePackage;
