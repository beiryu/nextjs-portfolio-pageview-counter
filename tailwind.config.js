const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "content/**/*.mdx"],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						// Width is owned by the `max-w-2xl` on the <article>, not by
						// prose's own 65ch — two competing constraints made the measure
						// unpredictable across breakpoints.
						maxWidth: "none",
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				// Project pages render on the dark layout gradient, so `prose-invert`
				// is the active palette. Stock invert defaults are too high-contrast
				// against zinc; these track the rest of the site's zinc ramp.
				invert: {
					css: {
						"--tw-prose-invert-body": "var(--color-zinc-400)",
						"--tw-prose-invert-headings": "var(--color-zinc-100)",
						"--tw-prose-invert-lead": "var(--color-zinc-400)",
						"--tw-prose-invert-links": "var(--color-zinc-100)",
						"--tw-prose-invert-bold": "var(--color-zinc-100)",
						"--tw-prose-invert-counters": "var(--color-zinc-500)",
						"--tw-prose-invert-bullets": "var(--color-zinc-700)",
						"--tw-prose-invert-hr": "var(--color-zinc-800)",
						"--tw-prose-invert-quotes": "var(--color-zinc-300)",
						"--tw-prose-invert-quote-borders": "var(--color-zinc-700)",
						"--tw-prose-invert-captions": "var(--color-zinc-500)",
						"--tw-prose-invert-code": "var(--color-zinc-200)",
						"--tw-prose-invert-pre-code": "var(--color-zinc-300)",
						"--tw-prose-invert-pre-bg": "var(--color-zinc-900)",
						"--tw-prose-invert-th-borders": "var(--color-zinc-700)",
						"--tw-prose-invert-td-borders": "var(--color-zinc-800)",
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
