import type { Project } from "content-collections";
import { Eye } from "lucide-react";
import Link from "next/link";

type Props = {
	project: Project;
	views: number;
};

/**
 * One project card. Every card in the grid is the same shape:
 *
 *   meta row (date · views)
 *   title       — clamped to 2 lines
 *   description — clamped to 3 lines
 *   "Read more" — pushed to the bottom with `mt-auto`
 *
 * The clamps stop a long description from making one card twice the height of
 * its neighbours, and `mt-auto` keeps the footer on a single line across the
 * row no matter how much text sits above it.
 */
export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="flex flex-col h-full p-6"
		>
			<div className="flex items-center justify-between gap-2">
				<span className="text-xs duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.date ? (
						<time dateTime={new Date(project.date).toISOString()}>
							{Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
								new Date(project.date),
							)}
						</time>
					) : (
						<span className="px-2 py-1 text-white font-bold rounded-md bg-linear-to-r from-amber-600 to-rose-700 shadow-xs">
							SOON
						</span>
					)}
				</span>
				<span className="flex items-center gap-1 text-xs text-zinc-500 tabular-nums">
					<Eye className="w-4 h-4" />
					{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
				</span>
			</div>

			{/* `min-h-14` reserves the two lines the clamp allows (2 × 1.75rem), so a
			    one-line title doesn't pull its whole card shorter than the rest. */}
			<h2 className="mt-5 min-h-14 text-xl duration-1000 text-zinc-200 group-hover:text-white font-display line-clamp-2">
				{project.title}
			</h2>

			{/* Same idea as the title: reserve the three lines the clamp allows
			    (3 × 1.5rem) so a short description can't shrink its card. Without
			    this, card height depends on which projects happen to share a row. */}
			<p className="mt-3 min-h-18 text-sm leading-6 duration-1000 text-zinc-400 group-hover:text-zinc-300 line-clamp-3">
				{project.description}
			</p>

			<span className="flex items-center gap-1 pt-6 mt-auto text-sm duration-1000 text-zinc-500 group-hover:text-zinc-200">
				Read more <span aria-hidden="true">&rarr;</span>
			</span>
		</Link>
	);
};
