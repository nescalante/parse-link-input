var rinput = /^\s*(.*?)(?:\s+"(.+)")?\s*$/;
var rfull = /^(?:https?|ftp):\/\//;

module.exports = parseLinkInput

function queryUnencodedReplacer(query) {
  return query.replace(/\+/g, ' ');
}

function queryEncodedReplacer(query) {
  return query.replace(/\+/g, '%2b');
}

function formatTitle(title) {
  if (!title) {
    return null;
  }

  return title
    .replace(/^\s+|\s+$/g, '')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatHref(url) {
  var href = url.replace(/^\s+|\s+$/g, '');

  if (href.length && href[0] !== '/' && !rfull.test(href)) {
    return 'http://' + href;
  }

  return href;
}

function parseLinkInput(input) {
  if (/data:/.test(input)) {
    return {
      href: input
    }
  }

  return parser.apply(null, input.match(rinput));

  function parser(all, link, title) {
    var href = link.replace(/\?.*$/, queryUnencodedReplacer);

    href = decodeURIComponent(href);
    href = encodeURI(href)
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29');
    href = href.replace(/\?.*$/, queryEncodedReplacer);

    return {
      href: formatHref(href),
      title: formatTitle(title)
    };
  }
}
