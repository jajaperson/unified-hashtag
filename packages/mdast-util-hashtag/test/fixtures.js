import { fromMarkdown } from "mdast-util-from-markdown";
import { hashtag } from "micromark-extension-hashtag";
import { hashtagFromMarkdown } from "../index.js";
import { codes } from "micromark-util-symbol";
import { unicodeWhitespace, unicodePunctuation } from "micromark-util-character";

export const inputDir = new URL("../../../examples/", import.meta.url);
export const outputDir = new URL("fixture/", import.meta.url);

/**
 * @type {Array<{description: string, input: string, output: string, process: (inp: Buffer) => string}>}
 */
export const fixtures = [
	{
		description: "Should handle a basic hashtag",
		input: "basic.md",
		output: "basic.json",
		process(md) {
			const ast = fromMarkdown(md, {
				extensions: [hashtag()],
				mdastExtensions: [hashtagFromMarkdown()],
			});
			return JSON.stringify(ast, null, "\t");
		},
	},
	{
		description: "Should handle a custom hashtag",
		input: "custom.md",
		output: "custom.json",
		process(md) {
			const ast = fromMarkdown(md, {
				extensions: [
					hashtag(
						(code) =>
							!(unicodeWhitespace(code) || unicodePunctuation(code)) ||
							code === codes.slash ||
							code === codes.underscore ||
							code === codes.dash,
					),
				],
				mdastExtensions: [hashtagFromMarkdown()],
			});
			return JSON.stringify(ast, null, "\t");
		},
	},
];
