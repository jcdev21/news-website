import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Homepage - News Website</title>
				<meta name="description" content="Browse and read the news" />
			</Head>
			<h1>OKE Bro</h1>
		</Fragment>
	);
};

export default Home;
