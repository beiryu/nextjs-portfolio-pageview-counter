// @ts-nocheck
"use client";

import { useMDXComponent } from "@content-collections/mdx/react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type * as React from "react";

function clsx(...args: any) {
	return args.filter(Boolean).join(" ");
}

// Typography for the rendered article lives in app/projects/[slug]/mdx.css,
// scoped to `.mdx-article`. Utilities set here would land in a later cascade
// layer than @tailwindcss/typography's `:where()` rules and only half-override
// them — which is what previously left paragraphs with a 24px top margin and a
// 20px bottom one, and pushed list markers outside the text column.
//
// This map is for structure, behaviour and motion — not styling.

const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Turns a block-level tag into its motion equivalent so it fades up as it
 * scrolls into view. Deliberately `motion.<tag>` rather than a wrapper element:
 * an extra div would change the DOM shape and break selectors like
 * `.mdx-article h2:first-child` and `.mdx-article ul > li`.
 */
function revealed(Tag: string) {
	const Motion = motion[Tag];

	return ({ className, ...props }) => {
		const reduced = useReducedMotion();

		return (
			<Motion
				className={className}
				initial={{ opacity: 0, y: reduced ? 0 : 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={VIEWPORT}
				transition={{ duration: 0.45, ease: EASE }}
				{...props}
			/>
		);
	};
}

const components = {
	h2: revealed("h2"),
	h3: revealed("h3"),
	p: revealed("p"),
	ul: revealed("ul"),
	ol: revealed("ol"),
	blockquote: revealed("blockquote"),
	pre: revealed("pre"),

	a: ({ className, href = "", ...props }) => {
		const isExternal = /^https?:\/\//.test(href);
		if (isExternal) {
			return (
				<a
					className={className}
					href={href}
					target="_blank"
					rel="noreferrer"
					{...props}
				/>
			);
		}
		return <Link className={className} href={href} {...props} />;
	},
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={clsx("rounded-md border border-zinc-800", className)}
			alt={alt}
			{...props}
		/>
	),
	// Wide tables scroll inside their own container instead of widening the page.
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="w-full my-6 overflow-x-auto">
			<table className={clsx("w-full", className)} {...props} />
		</div>
	),
	Image,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	// Rendered without a wrapper element: an extra div between `.prose` and the
	// content makes prose's `> :first-child`/`> :last-child` margin resets apply
	// to the wrapper instead of the real first and last blocks.
	return <Component components={components} />;
}
