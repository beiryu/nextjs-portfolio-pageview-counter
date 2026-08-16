// @ts-nocheck

import { useMDXComponent } from "@content-collections/mdx/react";
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
// This map is for structure and behaviour that CSS cannot express.
const components = {
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
