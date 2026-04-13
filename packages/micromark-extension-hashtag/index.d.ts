export { hashtag } from "./lib/index.js";

/**
 * Augment.
 */
declare module "micromark-util-types" {
	/**
	 * Token types.
	 */
	interface TokenTypeMap {
		hashtag: "hashtag";
		hashtagMarker: "hashtagMarker";
		hashtagString: "hashtagString";
	}
}
