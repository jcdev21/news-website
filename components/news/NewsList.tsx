import styled from 'styled-components';
import { NewsType } from '../../types/news.type';
import NewsItem from './NewsItem';

type NewsListProps = {
	news: NewsType[];
};

const Container = styled.div`
	padding: 2rem 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
`;

const NewsList = ({ news }: NewsListProps) => {
	return (
		<Container>
			{news.map((nw: NewsType) => (
				<NewsItem
					key={nw.id}
					id={nw.id}
					date={nw.date}
					slug={nw.slug}
					status={nw.status}
					excerpt={nw.excerpt}
					title={nw.title}
					jetpack_featured_media_url={nw.jetpack_featured_media_url}
				/>
			))}
		</Container>
	);
};

export default NewsList;
