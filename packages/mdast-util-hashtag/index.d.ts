import { Literal } from "mdast";
export { hashtagFromMarkdown } from "./lib/index.js";

export interface Hashtag extends Literal {
	type: "hashtag";
}

declare module "mdast" {
	interface RootContentMap {
		hashtag: Hashtag;
	}
}
