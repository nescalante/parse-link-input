const assert = require('assert');
const parseLinkInput = require('../index');

describe('parse-link-input', () => {
  it('parses without protocol', () => {
    const result = parseLinkInput('foo');
    assert.equal(result.href, 'http://foo');
    assert.equal(result.title, null);
  });

  it('parses with protocol', () => {
    const result = parseLinkInput('ftp://foo');
    assert.equal(result.href, 'ftp://foo');
    assert.equal(result.title, null);
  });

  it('parses with title', () => {
    const result = parseLinkInput('ftp://foo "bar"');
    assert.equal(result.href, 'ftp://foo');
    assert.equal(result.title, 'bar');
  });

  it('parses data', () => {
    const result = parseLinkInput('data:foo;bar');
    assert.equal(result.href, 'data:foo;bar');
    assert.equal(result.title, undefined);
  });
});
