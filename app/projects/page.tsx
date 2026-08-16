import { Redis } from "@upstash/redis";
import { allProjects } from "content-collections";
import { Card } from "../components/card";
import { PageIn, Reveal } from "../components/motion";
import { Navigation } from "../components/nav";
import { Article } from "./article";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function ProjectsPage() {
	// `.filter()` returns a new array, so the following `.sort()` no longer
	// mutates the `allProjects` module export in place.
	const projects = allProjects
		.filter((p) => p.published)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	const counts = projects.length
		? await redis.mget<number[]>(
				...projects.map((p) => ["pageviews", "projects", p.slug].join(":")),
			)
		: [];

	const views = projects.reduce(
		(acc, project, i) => {
			acc[project.slug] = counts[i] ?? 0;
			return acc;
		},
		{} as Record<string, number>,
	);

	return (
		<div className="relative pb-24">
			<Navigation />
			<div className="max-w-6xl px-6 pt-24 mx-auto lg:px-8 md:pt-32">
				<PageIn className="max-w-2xl">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h1>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from my own time.
					</p>
				</PageIn>

				<div className="w-full h-px my-12 bg-zinc-800 md:my-16" />

				{/* One uniform grid — every project gets the same card. Rows stretch,
				    so all cards in a row share a height regardless of text length. */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, i) => (
						// A small per-column delay gives each row a left-to-right cascade
						// instead of every card in view popping at once.
						<Reveal
							key={project.slug}
							delay={(i % 3) * 0.06}
							className="h-full"
						>
							<Card className="h-full">
								<Article project={project} views={views[project.slug] ?? 0} />
							</Card>
						</Reveal>
					))}
				</div>
			</div>
		</div>
	);
}
