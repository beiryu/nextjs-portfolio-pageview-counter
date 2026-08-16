"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type PropsWithChildren } from "react";

/**
 * Shared motion primitives.
 *
 * Two jobs only:
 *  - `PageIn`  — entrance when the page mounts (above-the-fold content)
 *  - `Reveal`  — entrance when the element scrolls into view (everything below)
 *
 * Both collapse to a plain fade when the visitor asks for reduced motion, and
 * `Reveal` fires once so content never re-animates on the way back up.
 *
 * These wrap children in a `div`. Where an extra element would change layout or
 * break a CSS selector, use `motion.<tag>` directly instead.
 */

const DISTANCE = 16;
const DURATION = 0.5;
// Standard ease-out: quick to start, settles gently. Matches the site's
// existing long `duration-700` hover transitions rather than fighting them.
const EASE = [0.22, 1, 0.36, 1] as const;

type Props = PropsWithChildren<{
	className?: string;
	/** Seconds to wait before starting. Use to sequence sibling blocks. */
	delay?: number;
}>;

export function PageIn({ children, className, delay = 0 }: Props) {
	const reduced = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: reduced ? 0 : DISTANCE }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: DURATION, delay, ease: EASE }}
		>
			{children}
		</motion.div>
	);
}

export function Reveal({ children, className, delay = 0 }: Props) {
	const reduced = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: reduced ? 0 : DISTANCE }}
			whileInView={{ opacity: 1, y: 0 }}
			// `once` keeps it a reveal rather than a effect that replays on every
			// pass. The negative bottom margin holds the animation back until the
			// element is properly on screen instead of firing at the very edge.
			viewport={{ once: true, margin: "0px 0px -80px 0px" }}
			transition={{ duration: DURATION, delay, ease: EASE }}
		>
			{children}
		</motion.div>
	);
}

/**
 * Container that walks its children in one after another. Pair with
 * `StaggerItem`; the parent owns the timing, the children own the movement.
 */
export function Stagger({
	children,
	className,
	delay = 0,
	stagger = 0.08,
	/** Start on mount instead of waiting for the container to scroll into view. */
	onMount = false,
}: Props & { stagger?: number; onMount?: boolean }) {
	const variants = {
		hidden: {},
		visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
	};

	return (
		<motion.div
			className={className}
			variants={variants}
			initial="hidden"
			{...(onMount
				? { animate: "visible" }
				: {
						whileInView: "visible",
						viewport: { once: true, margin: "0px 0px -80px 0px" },
					})}
		>
			{children}
		</motion.div>
	);
}

/**
 * Reveals each direct child independently as it scrolls in, keeping the
 * container's own classes. Use for a long list of sibling blocks where a single
 * `Reveal` around the whole thing would fire once at the top and leave
 * everything below already visible.
 *
 * Children keep their own DOM element — this only adds a wrapper around each.
 */
export function RevealEach({ children, className }: Props) {
	return (
		<div className={className}>
			{Children.map(children, (child) => (
				<Reveal>{child}</Reveal>
			))}
		</div>
	);
}

export function StaggerItem({ children, className }: Props) {
	const reduced = useReducedMotion();

	const variants = {
		hidden: { opacity: 0, y: reduced ? 0 : DISTANCE },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: DURATION, ease: EASE },
		},
	};

	return (
		<motion.div className={className} variants={variants}>
			{children}
		</motion.div>
	);
}
