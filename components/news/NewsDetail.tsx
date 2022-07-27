import Image from 'next/image';
import styled from 'styled-components';
import { NewsType } from '../../types/news.type';

const Container = styled.section`
	padding: 2em 0;
`;

const WrapperImage = styled.div`
	position: relative;
	width: 100%;
	height: 20rem;
	overflow: hidden;

	img {
		width: 100%;
	}
`;

const WrapperDate = styled.div`
	margin: 20px 0;
`;

const Title = styled.h1`
	font-size: 2em;
	margin-bottom: 20px;
`;

const NewsDetail = (props: NewsType) => {
	const date = new Date(props.date).toISOString().slice(0, 19);
	const renderDate = date.split('T').join(' ');

	return (
		<Container>
			<WrapperImage>
				<Image
					src={props.jetpack_featured_media_url}
					alt={props.title.rendered}
					layout="fill"
					objectFit="cover"
				/>
			</WrapperImage>
			<WrapperDate>
				<span>{renderDate}</span>
			</WrapperDate>
			<Title>{props.title.rendered}</Title>
			<div
				dangerouslySetInnerHTML={{
					__html: props.content.rendered,
				}}
			/>
		</Container>
	);
};

export default NewsDetail;
