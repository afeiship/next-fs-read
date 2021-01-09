(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fs = require('fs');
  var iconv = require('iconv-lite');
  var UTF8 = 'utf8';
  var DEFAULT_OPTIONS = { charset: UTF8, responseType: 'string' };

  nx.fsRead = function (inFilename, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var charset = options.charset;
    var buf = fs.readFileSync(inFilename);
    var response = charset === UTF8 ? buf.toString() : iconv.decode(buf, charset);
    switch (options.responseType) {
      case 'json':
        return JSON.parse(response);
      case 'buffer':
        return buf;
      case 'array':
        return response.split('\n');
      default:
        return response;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fsRead;
  }
})();
