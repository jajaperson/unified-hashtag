# mdast-util-hashtag

[mdast][] extensions to parse [Obsidian]-hashtags as literal nodes.
Intended to be used with [micromark-extension-hashtag][].

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-extension-hashtag mdast-util-hashtag
```

In Deno with [`esm.sh`][esmsh]:

```js
import { blockIdFromMarkdown } from "https://esm.sh/mdast-util-hashtag@1";
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
	import { blockIdFromMarkdown } from "https://esm.sh/mdast-util-hashtag12?bundle";
</script>
```

## API

This package exports the identifiers
[`blockIdFromMarkdown`][api-frommarkdown].
There is no default export.

### `blockIdFromMarkdown()`

Create an extension for
[`mdast-util-from-markdown`][mdast-util-from-markdown]
to enable block ids in markdown.

###### Returns

Extension for `mdast-util-from-markdown`
([`FromMarkdownExtension`][frommarkdownextension]).

[Obsidian]: https://obsidian.md
[mdast-util-from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown
[micromark]: https://github.com/micromark/micromark
[mdast-util-hashtag]: https://github.com/jajaperson/unified-hashtag/tree/main/packages/mdast-util-hashtag
[esmsh]: https://esm.sh
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[micromark-extension]: https://github.com/micromark/micromark#syntaxextension
[mdast]: https://github.com/syntax-tree/mdast
[gfm-footnote]: https://github.com/syntax-tree/mdast-util-gfm-footnote
[npm]: https://docs.npmjs.com/cli/install
[api-frommarkdown]: #blockidfrommarkdown
[frommarkdownextension]: https://github.com/syntax-tree/mdast-util-from-markdown#extension
[api-togfm]: #inlinefootnotetogfm
[micromark-extension-hashtag]: https://github.com/jajaperson/unified-hashtag/tree/main/packages/micromark-extension-hashtag
[micromark-extension-hashtag]: https://github.com/jajaperson/unified-hashtag/tree/main/packages/micromark-extension-hashtag
