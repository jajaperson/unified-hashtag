/**
 * @import {Extension, TokenizeContext, Tokenizer, State, Construct, Code} from "micromark-util-types"
 */

import { ok as assert } from "devlop";
import { codes } from "micromark-util-symbol";
import { asciiAlphanumeric } from "micromark-util-character";

/**
 * @callback Predicate
 * @param {Code} code
 * @returns {boolean}
 */

/**
 * Creates an extension for `micromark` to enable hashtag syntax
 *
 * @param {Predicate} [allowedPredicate=asciiAlphanumeric]
 *   Codes allowed in a hashtag string. Defaults to ascii alphanumeric codes.
 * @returns {Extension}
 *   Extension for the `micromark` package that can be passed in `extensions`
 *   to enable hashtag syntax.
 */
export function hashtag(allowedPredicate) {
	const allowed = allowedPredicate ?? asciiAlphanumeric;

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
			if (allowed(code)) {
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
