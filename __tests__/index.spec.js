(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.fsRead charset:gbk', function () {
      var str = nx.fsRead('./__tests__/E201.lrc', { charset: 'gbk' });
      console.log(str);
      expect(str.includes('私')).toBe(true);
    });
  });
})();
