import axios from 'axios';
import { NewsType } from '../../types/news.type';

type GetNewsResponse = {
	data: NewsType[];
};

export const getNews = async (page = 1, perPage = 8) => {
	try {
		const { data } = await axios.get<GetNewsResponse>(
			`https://internal.jurnalistika.id/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
};

export const getDetail = async (id: number) => {
	try {
		const { data } = await axios.get<{ data: NewsType }>(
			`https://internal.jurnalistika.id/wp-json/wp/v2/posts/${id}`
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
};
