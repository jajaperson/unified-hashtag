/** @import {Extension as FromMarkdownExtension, CompileContext, Handle as FromMarkdownHandle} from "mdast-util-from-markdown" */
/** @import {Root, FootnoteDefinition, FootnoteReference} from "mdast" */
import { ok as assert } from "devlop";

/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM footnotes
 * in markdown.
 *
 * @returns {FromMarkdownExtension}
 *   Extension for `mdast-util-from-markdown`.
 */
export function hashtagFromMarkdown() {
	return {
		enter: {
			hashtag: enterhashtag,
			hashtagString: enterhashtagString,
		},
		exit: {
			hashtagString: exithashtagString,
			hashtag: exithashtag,
		},
	};
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterhashtag(token) {
	this.enter({ type: "hashtag", value: "" }, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterhashtagString(token) {
	this.buffer();
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exithashtagString(token) {
	const id = this.resume();
	const node = this.stack[this.stack.length - 1];
	assert(node.type === "hashtag", "expected hashtag on top of stack");
	node.value = id;
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exithashtag(token) {
	this.exit(token);
}
