import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import NewsDetail from '../../components/news/NewsDetail';
import { getDetail } from '../../services/api/news';
import { NewsType } from '../../types/news.type';

type NewsDetailProps = {
	newsData: NewsType;
};

const NewsDetails = ({ newsData }: NewsDetailProps) => {
	return (
		<Fragment>
			<Head>
				<title>{newsData.title.rendered}</title>
				<meta name="description" content={newsData.content.rendered} />
			</Head>
			<NewsDetail {...newsData} />
		</Fragment>
	);
};

export async function getServerSideProps(context: any) {
	const newsId = context.params.newsId;
	const result = await getDetail(newsId);
	return {
		props: {
			newsData: result,
		},
	};
}

export default NewsDetails;
