"use client";
import { Keyboard } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin } from "../components/brand-icons";
import { Card } from "../components/card";
import { Stagger, StaggerItem } from "../components/motion";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/khanh-ndinh/",
		label: "Linkedin",
		handle: "Khanh Dinh",
	},
	{
		icon: <Keyboard size={20} />,
		href: "https://www.upwork.com/freelancers/~01837562c4fa4017b2",
		label: "Upwork",
		handle: "Nguyen Khanh D.",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/beiryu",
		label: "Github",
		handle: "@beiryu",
	},
];

export default function Example() {
	return (
		<div className=" bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<Stagger
					onMount
					stagger={0.1}
					className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16"
				>
					{socials.map((s) => (
						<StaggerItem key={s.href} className="h-full [&>div]:h-full">
							<Card>
								<Link
									href={s.href}
									target="_blank"
									className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
								>
									<span
										className="absolute w-px h-2/3 bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										{s.icon}
									</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
											{s.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</Link>
							</Card>
						</StaggerItem>
					))}
				</Stagger>
			</div>
		</div>
	);
}
