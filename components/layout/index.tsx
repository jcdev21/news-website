import { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
	children: ReactNode;
};

const Container = styled.div`
	background-color: #ffffff;
`;

const Main = styled.main`
	min-height: calc(100vh - 100px);
	padding: 0 6em;
`;

const Layout = (props: LayoutProps) => {
	return (
		<Container>
			<Header />
			<Main>{props.children}</Main>
			<Footer />
		</Container>
	);
};

export default Layout;
