/*!
 * name: @jswork/next-fs-read
 * description: Read file with fs for next.
 * homepage: https://github.com/afeiship/next-fs-read
 * version: 1.0.0
 * date: 2020-11-21 15:03:10
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fs = require('fs');
  var iconv = require('iconv-lite');
  var DEFAULT_OPTIONS = { charset: 'utf-8', responseType: 'string' };

  nx.fsRead = function (inFilename, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var charset = options.charset;
    var buf = fs.readFileSync(inFilename);
    var response = charset === 'utf-8' ? buf.toString() : iconv.decode(buf, charset);
    switch (options.responseType) {
      case 'json':
        return JSON.parse(response);
      case 'buffer':
        return buf;
      default:
        return response;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fsRead;
  }
})();
