markdown
========

GitHub flavored markdown parser for Meteor based on marked.js v0.3.3

GFM tables and linebreaks are enabled by default.


Usage
-----

Anywhere inside your template add markdown block and write markdown inside.

Example:

```
{{#markdown}}

...markdown text here...

{{/markdown}}
```

That's it!


Thanks to:
----------

- Christopher Jeffrey for <a href="https://github.com/chjj/marked" target="_blank">marked.js</a>

- Bozhao Yu for original <a href="https://github.com/yubozhao/meteor-markdown" target="_blank">meteor-markdown</a> package (I just made this package compatible with Meteor 0.9+)


License
-------
MIT
