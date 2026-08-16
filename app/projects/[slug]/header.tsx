"use client";
import { ArrowLeft, Eye, Keyboard } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin } from "@/app/components/brand-icons";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		date?: string;
	};

	views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	// Shared by every control in the fixed bar. Hovering used to change font
	// weight, which reflowed the flex row — including the view-counter digits.
	const navItem = `duration-200 ${
		isIntersecting
			? "text-zinc-400 hover:text-zinc-100"
			: "text-zinc-400 hover:text-white"
	}`;

	return (
		// The banner fades to transparent at the bottom so it dissolves into the
		// layout gradient instead of ending on a hard horizontal seam.
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-linear-to-b from-black via-black to-transparent"
		>
			{/* Once the hero has scrolled away this bar sits over article text, so
			    it needs a real surface. It previously cleared its own background,
			    blur and border at `lg`, leaving the icons on top of the copy. */}
			<div
				className={`fixed inset-x-0 top-0 z-50 duration-200 border-b ${
					isIntersecting
						? "bg-transparent border-transparent"
						: "bg-zinc-900/80 backdrop-blur border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex items-center justify-between gap-8">
						<span
							title="View counter for this page"
							className={`flex items-center gap-1 tabular-nums ${navItem}`}
						>
							<Eye className="w-5 h-5" />{" "}
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(
								views,
							)}
						</span>
						<Link
							target="_blank"
							aria-label="Upwork profile"
							href="https://www.upwork.com/freelancers/~01837562c4fa4017b2"
						>
							<Keyboard className={`w-6 h-6 ${navItem}`} />
						</Link>
						<Link
							target="_blank"
							aria-label="LinkedIn profile"
							href="https://www.linkedin.com/in/khanh-ndinh/"
						>
							<Linkedin className={`w-6 h-6 ${navItem}`} />
						</Link>
						<Link
							target="_blank"
							aria-label="GitHub profile"
							href="https://github.com/beiryu"
						>
							<Github className={`w-6 h-6 ${navItem}`} />
						</Link>
					</div>

					<Link
						href="/projects"
						aria-label="Back to projects"
						className={navItem}
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
				</div>
			</div>
			{/* Left-aligned at the same `max-w-2xl` measure as the article below, so
			    the hero and the body share one left edge. */}
			<div className="relative isolate max-w-2xl px-6 mx-auto pt-32 pb-16 sm:pt-40 sm:pb-24">
				{project.date ? (
					<time
						dateTime={new Date(project.date).toISOString()}
						className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500"
					>
						{Intl.DateTimeFormat("en-US", {
							month: "long",
							year: "numeric",
						}).format(new Date(project.date))}
					</time>
				) : null}

				<h1 className="mt-4 text-4xl tracking-tight text-white sm:text-5xl font-display">
					{project.title}
				</h1>

				<p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
					{project.description}
				</p>

				{links.length > 0 ? (
					<div className="flex flex-wrap gap-3 mt-8">
						{links.map((link) => (
							<Link
								target="_blank"
								rel="noreferrer"
								key={link.label}
								href={link.href}
								className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium duration-200 border rounded-full border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
							>
								{link.label}
								<span aria-hidden="true">&rarr;</span>
							</Link>
						))}
					</div>
				) : null}
			</div>
		</header>
	);
};
