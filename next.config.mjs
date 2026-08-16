import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
