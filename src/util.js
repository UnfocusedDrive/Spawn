export default {
  /**
   * Convert camelCase to kebab-case.
   * @param {string} str - input string
   * @returns {string} converted to kebab-case.
   */
  camel2Kebab(str) {
    return str.split('').map(s => s === s.toUpperCase() ? `-${s.toLowerCase()}` : s).join('')
  },
  /**
   * Split input into array of even sized chunks
   * @param {string|array} input - input to chunk
   * @param {number} chunkSize - chunk input by every n size
   * @returns {array} of chunks from source input
   */
  splitToChunks: (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i+=chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  },
  /**
   * Split input into array of even sized chunks starting from the last value
   * @param {string|array} input - input to chunk
   * @param {number} chunkSize - chunk input by every n size
   * @returns {array} of chunks from source input
   */
  splitToChunksRight: (arr, chunkSize) => {
    const chunks = [];
    for (let i = arr.length; i > 0; i-=chunkSize) {
      chunks.unshift(arr.slice(Math.max(0, i - chunkSize), i));
    }

    return chunks;
  },
  // REMOVE
  getLabel: arr => {
    return 'null';
  },
  getStyleName(name) {
    if (name.charAt(0) === '-') {
      return name;
    }
    return this.camel2Kebab(name);
  },
  isNode: val => {
    return typeof val === 'object' ? Boolean(val.nodeType === 1) : false;
  },
  /**
   * Check if value is number
   * @param {*} value - value to check
   * @returns {boolean} true if number
   */
  isNumber: value => typeof value === 'number',
  isPxImpliedValue(value, key) {
    if (this.isNumber(value) && (key !== 'opacity' && key !== 'zIndex')) {
      return true;
    }

    return false;
  },
  num2Str: val => `${parseInt(val, 10)}`,
  toPx: num => `${num}px`,
  toStr: val => `${val}`,
  trimLeadingZeroes: string => {
    return string.split('.').map(s => {
      if (s.length > 1) {
        const fm = s.replace(/^0+/, '');
        return fm === '' ? DEFAULT_VALUE : fm;
      }
      return s;
    }).join('.');
  }
}
