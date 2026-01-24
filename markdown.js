var mark = marked;

mark.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});


// 1. Extension for \( ... \) and \[ ... \]
var latexExtension = {
  name: 'latex',
  level: 'inline',
  // Replaces: src.match(...)?.index
  start: function(src) {
    var match = src.match(/\\(\[|\()/);
    return match ? match.index : undefined;
  },
  tokenizer: function(src, tokens) {
    // Regex matches starts with \( or \[ AND ends with \) or \]
    // [\s\S]+? is a non-greedy match for any character including newlines
    var rule = /^\\(\[|\()[\s\S]+?\\(\]|\))/;
    var match = rule.exec(src);

    if (match) {
      return {
        type: 'latex',
        raw: match[0],
        text: match[0]
      };
    }
  },
  renderer: function(token) {
    return token.text;
  }
};

// 2. Extension for $ ... $
var latexDollarExtension = {
  name: 'latex-dollar',
  level: 'inline',
  start: function(src) {
    return src.indexOf('$');
  },
  tokenizer: function(src, tokens) {
    // Regex matches $...$ but excludes newlines to prevent matching across paragraphs
    var rule = /^\$([^$\n]+)\$/;
    var match = rule.exec(src);

    if (match) {
      return {
        type: 'latex-dollar',
        raw: match[0],
        text: match[0]
      };
    }
  },
  renderer: function(token) {
    return token.text;
  }
};

mark.use({ extensions: [latexExtension, latexDollarExtension] });

Markdown = mark;
