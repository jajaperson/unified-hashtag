# micromark-extension-gfm-strikethrough

Syntax-only [micromark][] extension
for parsing hashtags.

```md
Sentence.^[Footnote]
```

Note this extension does not extend the html compiler.
Instead, this is intended to be used together with [mdast-util-hashtag][]
which includes a utility for converting inline footnotes to GFM footnote reference/definition pairs.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-extension-hashtag
```

In Deno with [`esm.sh`][esmsh]:

```js
import { hashtag } from "https://esm.sh/micromark-extension-hashtag@1";
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
	import { hashtag } from "https://esm.sh/micromark-extension-hashtag@1?bundle";
</script>
```

## API

This package exports the identifier [`hashtag`][api-hashtag].
There is no default export.

The export map supports the [`development` condition][development].
Run `node --conditions development module.js` to get instrumented dev code.
Without this condition, production code is loaded.

### `hashtag()`

Create an extension for `micromark` to enable hashtag syntax.

###### Returns

Extension for `micromark` that can be passed in `extensions`,
to enable hashtags ([`Extension`][micromark-extension]).

## Security

This package is safe.

[micromark]: https://github.com/micromark/micromark
[mdast-util-hashtag]: https://github.com/jajaperson/unified-hashtag/tree/main/packages/mdast-util-hashtag
[esmsh]: https://esm.sh
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[micromark-extension]: https://github.com/micromark/micromark#syntaxextension
[development]: https://nodejs.org/api/packages.html#packages_resolving_user_conditions
[api-hashtag]: #hashtag
[npm]: https://docs.npmjs.com/cli/install
[Obsidian]: https://obsidian.md
