import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import NewsList from '../components/news/NewsList';
import { getNews } from '../services/api/news';
import styles from '../styles/Home.module.css';
import { NewsType } from '../types/news.type';

type HomePageProps = {
	news: NewsType[];
};

const Home = (props: HomePageProps) => {
	console.log(props.news);

	return (
		<Fragment>
			<Head>
				<title>Homepage - News Website</title>
				<meta name="description" content="Browse and read the news" />
			</Head>
			<NewsList news={props.news} />
		</Fragment>
	);
};

export async function getServerSideProps(context: GetServerSideProps) {
	const result = await getNews();
	return {
		props: {
			news: result,
		},
	};
}

export default Home;
