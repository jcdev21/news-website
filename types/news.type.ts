export type NewsType = {
	id: number;
	date: Date;
	slug: string;
	status: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	jetpack_featured_media_url: string;
};
