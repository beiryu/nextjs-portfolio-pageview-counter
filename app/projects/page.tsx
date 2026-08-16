import { Redis } from "@upstash/redis";
import { allProjects } from "content-collections";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { PageIn, Reveal, Stagger, StaggerItem } from "../components/motion";
import { Navigation } from "../components/nav";
import { Article } from "./article";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce(
		(acc, v, i) => {
			acc[allProjects[i].slug] = v ?? 0;
			return acc;
		},
		{} as Record<string, number>,
	);

	const featured = allProjects.find(
		(project) => project.slug === "sketchpad-ai",
	)!;
	const sortedAllProjectsByViews = allProjects.sort(
		(a, b) => views[b.slug] - views[a.slug],
	);
	const top2 = sortedAllProjectsByViews[1]!;
	const top3 = sortedAllProjectsByViews[2]!;

	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<PageIn className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from my own time.
					</p>
				</PageIn>
				<div className="w-full h-px bg-zinc-800" />

				<Stagger
					onMount
					delay={0.15}
					className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 "
				>
					{/* `h-full` on both the item and the Card it wraps: the Card used to
					    be the grid child and stretched to the row height on its own. */}
					<StaggerItem className="h-full [&>div]:h-full">
						<Card>
							<Link href={`/projects/${featured.slug}`}>
								<article className="relative w-full h-full p-4 md:p-8">
									<div className="flex items-center justify-between gap-2">
										<div className="text-xs text-zinc-100">
											{featured.date ? (
												<time dateTime={new Date(featured.date).toISOString()}>
													{Intl.DateTimeFormat(undefined, {
														dateStyle: "medium",
													}).format(new Date(featured.date))}
												</time>
											) : (
												<span className="bg-linear-to-r from-amber-600 to-rose-700 rounded-md px-2 py-1 text-white font-bold shadow-xs">
													SOON
												</span>
											)}
										</div>
										<span className="flex items-center gap-1 text-xs text-zinc-500">
											<Eye className="w-4 h-4" />{" "}
											{Intl.NumberFormat("en-US", {
												notation: "compact",
											}).format(views[featured.slug] ?? 0)}
										</span>
									</div>

									<h2
										id="featured-post"
										className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
									>
										{featured.title}
									</h2>
									<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
										{featured.description}
									</p>
									<div className="absolute bottom-4 md:bottom-8">
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Read more <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								</article>
							</Link>
						</Card>
					</StaggerItem>

					<StaggerItem className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} views={views[project.slug] ?? 0} />
							</Card>
						))}
					</StaggerItem>
				</Stagger>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					{[0, 1, 2].map((column) => (
						<div key={column} className="grid grid-cols-1 gap-4">
							{sorted
								.filter((_, i) => i % 3 === column)
								.map((project) => (
									// Each card reveals on its own as it scrolls in, so the three
									// columns stay independent rather than firing as one block.
									<Reveal key={project.slug}>
										<Card>
											<Article
												project={project}
												views={views[project.slug] ?? 0}
											/>
										</Card>
									</Reveal>
								))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
