(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.fsRead charset:gbk', function () {
      const target = nx.fsRead('./__tests__/fixtures/E201.lrc', { charset: 'utf8' });
      expect(target.includes('第一单元')).toBe(true);
    });

    test('nx.fsRead response: array', () => {
      const target = nx.fsRead('./__tests__/fixtures/E201.lrc', { responseType: 'array' });
      expect(Array.isArray(target)).toBe(true);
    });

    test('nx.fsRead response: json', () => {
      const target = nx.fsRead('./__tests__/fixtures/res.json', { responseType: 'json' });
      expect(target).toEqual({ username: 'afeiship', homepage: 'https://js.work' });
    });
  });
})();
