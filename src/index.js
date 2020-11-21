(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fs = require('fs');
  var iconv = require('iconv-lite');

  var DEFAULT_OPTIONS = { charset: 'utf-8' };

  nx.fsRead = function (inFilename, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    switch (options.charset) {
      case 'gbk':
        var buf = fs.readFileSync(inFilename);
        return iconv.decode(buf, 'gbk');

      default:
        var buf = fs.readFileSync(inFilename);
        return buf.toString();
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fsRead;
  }
})();
