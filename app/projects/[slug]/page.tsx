import { allProjects } from "content-collections";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { Redis } from "@upstash/redis";
import { ReportView } from "./view";

export const revalidate = 60;
// Next 15 changed the fetch default from force-cache to no-store, so the
// Upstash read below would otherwise opt this segment out of static rendering.
// force-static restores the pre-upgrade behaviour: all 23 pages prerendered,
// view counts refreshed every 60s by ISR.
export const dynamic = "force-static";

// Next 16 removed synchronous access to request-time APIs; `params` is a Promise.
type Props = {
	params: Promise<{ slug: string }>;
};

const redis = Redis.fromEnv();

// Returns the RESOLVED param shape, not Props["params"] — generateStaticParams
// still hands back plain objects.
export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const { slug } = await params;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<>
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			{/* The dark gradient comes from app/projects/layout.tsx — this page used
			    to paint `bg-zinc-50` over it, which is why the article read as a
			    white sheet dropped into a dark site. */}
			<article className="mdx-article max-w-2xl px-6 py-16 mx-auto prose prose-zinc prose-invert prose-quoteless sm:py-24">
				<Mdx code={project.mdx} />
			</article>
		</>
	);
}
