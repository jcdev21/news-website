/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['jid.storage.googleapis.com'],
	},
};

module.exports = nextConfig;
