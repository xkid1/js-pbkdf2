class Base {
  constructor() {
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter(
        (method) =>
          method !== 'constructor' && typeof this[method] === 'function'
      )
      .forEach((method) => {
        this[method] = this[method].bind(this);
      });
  }
}

export default Base;
