import styled from 'styled-components';

const Container = styled.header`
	width: 100%;
	height: 50px;
	background-color: #ffffff;
	border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
	padding: 0 6em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 1.3em;
`;

const Navigation = styled.nav`
	display: flex;

	ul {
		display: inherit;
		gap: 15px;
		list-style-type: none;
	}

	li {
		cursor: pointer;
		font-size: 0.9em;
		/* active */
		/* background-color: #3ad688;
		color: #fafafa;
		padding: 0.35em 0.7em;
		border-radius: 15px; */
	}
`;

const Header = () => {
	return (
		<Container>
			<Title>News</Title>
			<Navigation>
				<ul>
					<li>Category</li>
					<li>Category</li>
					<li>Category</li>
				</ul>
			</Navigation>
		</Container>
	);
};

export default Header;
