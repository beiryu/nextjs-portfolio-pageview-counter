"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";

export const Navigation: React.FC = () => {
	const [isScrolled, setScrolled] = useState(false);

	// A scroll offset rather than an IntersectionObserver on a sentinel, to match
	// the project header and keep the behaviour deterministic.
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);

		onScroll(); // the page can load already scrolled
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header>
			<div
				// `bg-zinc-900/500` was here: opacity modifiers only go up to 100, so
				// the class emitted nothing and the scrolled bar had no background at
				// all — its links sat directly on top of the page content.
				className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
					isScrolled
						? "bg-zinc-900/80 backdrop-blur-sm border-zinc-800"
						: "bg-transparent border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/portfolio"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Portfolio
						</Link>
						<Link
							href="https://blog.beiryu.io.vn/"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							target="_blank"
							rel="noopener noreferrer"
						>
							Blog
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
