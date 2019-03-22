"use strict";

const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const attrs = require('markdown-it-attrs');
const container = require('markdown-it-container');
const { html5Media } = require('markdown-it-html5-media');

const defaults = {
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return `<pre><code class="hljs ${lang}">${
                hljs.highlight(lang, code).value
            }</code></pre>`;
        }

        return '';
    }
};

const md = new MarkdownIt(defaults);
['section', 'figure', 'figcaption', 'header', 'footer'].forEach(name => {
    md.use(container, name, {
        validate: params =>
            params.trim() === name || params.trim().startsWith(`${name} `),
        render: (tokens, idx, _options, env, self) => {
            tokens[idx].tag = name;
            return self.renderToken(tokens, idx, _options, env, self);
        }
    });
});
md.use(require('markdown-it-anchor'), {
  level: [2],
  permalink: false,
});
md.use(container, 'div');
md.use(attrs);
md.use(html5Media, {
  videoAttrs: 'controls',
  audioAttrs: 'controls'
});

const markdown = text => (text ? md.render(text) : '');
const markdownInline = text => (text ? md.renderInline(text) : '');

module.exports = (file, options) => {
  if (typeof options === 'function') {
      options(md);
  }
  file.contents = Buffer.from(md.render(file.contents.toString()));
  file.data.markdown = markdown;
  file.data.markdownInline = markdownInline;

  const filePath = file.path;
  file.path = filePath.substr(0, filePath.lastIndexOf(".")) + ".html";
};
