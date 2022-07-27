import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsList from '../components/news/NewsList';
import { getNews } from '../services/api/news';
import { NewsType } from '../types/news.type';

type HomePageProps = {
	news: NewsType[];
};

const WrapperNavigation = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;

	button {
		padding: 0.9em;
		cursor: pointer;
	}
`;

const Home = (props: HomePageProps) => {
	const router = useRouter();
	const [newsData, setNewsData] = useState<NewsType[]>([]);
	const [page, setPage] = useState<number>(1);

	const onSetNewsData = useCallback(
		(data: NewsType[]) => {
			setNewsData(data);
		},
		[setNewsData]
	);

	useEffect(() => {
		router.replace(`/?page=${page}`);
		onSetNewsData(props.news);
	}, [page, onSetNewsData]);

	return (
		<Fragment>
			<Head>
				<title>Homepage - News Website</title>
				<meta name="description" content="Browse and read the news" />
			</Head>
			<NewsList news={props.news} />
			<WrapperNavigation>
				<button
					disabled={page === 1}
					onClick={() => setPage((page) => page - 1)}
				>
					Prev
				</button>
				<button onClick={() => setPage((page) => page + 1)}>
					Next
				</button>
			</WrapperNavigation>
		</Fragment>
	);
};

export async function getServerSideProps(context: any) {
	const page = context.query?.page || 1;

	const result = await getNews(page);
	return {
		props: {
			news: result,
		},
	};
}

export default Home;
