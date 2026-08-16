import { defineCollection, defineConfig } from "@content-collections/core";
import {
	compileMDX,
	type Options as MdxOptions,
} from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";

// biome-ignore lint/suspicious/noExplicitAny: rehype visitor nodes are untyped
type HastNode = any;

const mdxOptions: MdxOptions = {
	remarkPlugins: [remarkGfm],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypePrettyCode,
			{
				theme: "github-dark",
				onVisitLine(node: HastNode) {
					// Prevent lines from collapsing in `display: grid` mode, and allow
					// empty lines to be copy/pasted
					if (node.children.length === 0) {
						node.children = [{ type: "text", value: " " }];
					}
				},
				onVisitHighlightedLine(node: HastNode) {
					node.properties.className ??= [];
					node.properties.className.push("line--highlighted");
				},
				// Renamed from `onVisitHighlightedWord` in rehype-pretty-code 0.13.
				// An unknown option key is ignored silently, so the old name would
				// have disabled word highlighting without any warning.
				onVisitHighlightedChars(node: HastNode) {
					node.properties.className = ["word--highlighted"];
				},
			},
		],
		[
			rehypeAutolinkHeadings,
			{
				properties: {
					className: ["subheading-anchor"],
					ariaLabel: "Link to section",
				},
			},
		],
	],
};

const projects = defineCollection({
	name: "projects",
	// `directory: "content"` + `include: "projects/**"` makes `_meta.path`
	// identical to contentlayer's `_raw.flattenedPath` ("projects/<slug>"), which
	// keeps the derived slug — and therefore the Redis key — byte-for-byte the
	// same as before.
	directory: "content",
	include: "projects/**/*.mdx",
	schema: z.object({
		// `content` is the raw MDX body. Declared explicitly because
		// content-collections deprecated adding it implicitly.
		content: z.string(),
		published: z.boolean().optional(),
		title: z.string(),
		description: z.string(),
		date: z.string().optional(),
		url: z.string().optional(),
		repository: z.string().optional(),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, mdxOptions);
		const flattenedPath = document._meta.path;
		// Drop the raw MDX source so documents aren't serialized twice.
		const { content, ...rest } = document;
		return {
			...rest,
			mdx,
			path: `/${flattenedPath}`,
			slug: flattenedPath.split("/").slice(1).join("/"),
		};
	},
});

export default defineConfig({
	content: [projects],
});
