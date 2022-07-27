/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['jid.storage.googleapis.com', 'internal.jurnalistika.id'],
	},
};

module.exports = nextConfig;
