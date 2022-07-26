import styled from 'styled-components';

const Container = styled.header`
	width: 100%;
	height: 50px;
	background-color: #ffffff;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	padding: 0 6em;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer = () => {
	return (
		<Container>
			<p>
				Copyright &copy; {new Date().getFullYear()} 💚 Muhammad Jundur
				Rahman
			</p>
		</Container>
	);
};

export default Footer;
