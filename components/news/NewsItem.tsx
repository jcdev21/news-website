import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { NewsType } from '../../types/news.type';
import Card from '../ui/Card';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const WrapperImage = styled.div`
	position: relative;
	width: 100%;
	height: 20rem;
	overflow: hidden;
	border-top-right-radius: 6px;
	border-top-left-radius: 6px;
`;

const WrapperContent = styled.div`
	padding: 1em;

	span {
		color: #3ad688;
	}

	h3.title {
		font-size: 1.2em;
		margin: 5px 0 10px;
		cursor: pointer;

		:hover {
			color: #555555;
		}
	}
`;

const NewsItem = (props: Omit<NewsType, 'content'>) => {
	const date = new Date(props.date).toISOString().slice(0, 19);
	const renderDate = date.split('T').join(' ');

	const router = useRouter();

	function showDetail() {
		router.push('/' + props.id);
	}

	return (
		<Container>
			<Card>
				<WrapperImage>
					<Image
						src={props.jetpack_featured_media_url}
						alt={props.title.rendered}
						layout="fill"
						objectFit="cover"
					/>
				</WrapperImage>
				<WrapperContent>
					<div>
						<span>{renderDate}</span>
					</div>
					<h3 className="title" onClick={showDetail}>
						{props.title.rendered}
					</h3>
					<div
						dangerouslySetInnerHTML={{
							__html: props.excerpt.rendered,
						}}
					/>
				</WrapperContent>
			</Card>
		</Container>
	);
};

export default NewsItem;
