/**
 * @import {Extension, TokenizeContext, Tokenizer, State, Construct, Code} from "micromark-util-types"
 */

import { ok as assert } from "devlop";
import { codes } from "micromark-util-symbol";
import {
	asciiAlphanumeric,
	markdownLineEnding,
	markdownLineEndingOrSpace,
} from "micromark-util-character";

/**
 * Creates an extension for `micromark` to enable hashtag syntax
 *
 * @param {Code[]} allowed - Non-alphanumeric codes to allow in a hashtag.
 *
 * @returns {Extension}
 *   Extension for the `micromark` package that can be passed in `extensions` to enable
 *   hashtag syntax.
 */
export function hashtag(...allowed) {
	/** @type {Construct} */
	const construct = {
		name: "hashtag",
		tokenize: hashtagTokenize,
	};

	return {
		text: {
			[codes.numberSign]: construct,
		},
	};

	/**
	 * @this {TokenizeContext}
	 * @type {Tokenizer}
	 */
	function hashtagTokenize(effects, ok, nok) {
		let empty = true;
		return start;

		/**
		 * Start of hashtag
		 *
		 * ```markdown
		 * > | a #b c
		 *       ^
		 * ```
		 *
		 * @type {State}
		 */
		function start(code) {
			assert(code === codes.numberSign, "expected `#`");
			effects.enter("hashtag");
			effects.enter("hashtagMarker");
			effects.consume(code);
			effects.exit("hashtagMarker");
			effects.enter("hashtagString");
			effects.enter("chunkString", { contentType: "string" });

			return content;
		}

		/**
		 * After `#` at hashtag
		 *
		 * ```markdown
		 * > | a #b c
		 *        ^
		 * ```
		 *
		 * @type {State}
		 */
		function content(code) {
			if (asciiAlphanumeric(code) || allowed.includes(code)) {
				effects.consume(code);
				empty = false;
				return content;
			} else if (!empty) {
				effects.exit("chunkString");
				effects.exit("hashtagString");
				effects.exit("hashtag");
				return ok(code);
			}
		}
	}
}
