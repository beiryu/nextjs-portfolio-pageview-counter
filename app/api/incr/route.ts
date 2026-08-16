import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

// Default Node.js runtime (Fluid Compute on Vercel). Stated explicitly.
export const runtime = "nodejs";

function getClientIp(req: Request): string | undefined {
	// On Vercel, x-forwarded-for is always set for external requests. The
	// left-most entry is the original client; x-real-ip is the fallback.
	const forwarded = req.headers.get("x-forwarded-for");
	if (forwarded) {
		const first = forwarded.split(",")[0]?.trim();
		if (first) return first;
	}
	return req.headers.get("x-real-ip") ?? undefined;
}

export async function POST(req: Request): Promise<Response> {
	if (req.headers.get("Content-Type") !== "application/json") {
		return new Response("must be json", { status: 400 });
	}

	const body = await req.json();
	let slug: string | undefined;
	if ("slug" in body) {
		slug = body.slug;
	}
	if (!slug) {
		return new Response("Slug not found", { status: 400 });
	}

	const ip = getClientIp(req);
	if (ip) {
		// Hash the IP in order to not store it directly in your db.
		const buf = await crypto.subtle.digest(
			"SHA-256",
			new TextEncoder().encode(ip),
		);
		const hash = Array.from(new Uint8Array(buf))
			.map((b) => b.toString(16).padStart(2, "0"))
			.join("");

		// deduplicate the ip for each slug
		const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
			nx: true,
			ex: 24 * 60 * 60,
		});
		if (!isNew) {
			// FIXME: missing `return` — the dedupe early-exit never fires, so every
			// request increments. Preserved verbatim in this commit so the runtime
			// move can be verified against existing counter behaviour. Fixed next.
			new Response(null, { status: 202 });
		}
	}

	await redis.incr(["pageviews", "projects", slug].join(":"));
	return new Response(null, { status: 202 });
}
