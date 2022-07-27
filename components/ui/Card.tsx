import { ReactNode } from 'react';
import styled from 'styled-components';

type CardProps = {
	children: ReactNode;
};

const Container = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

const Card = ({ children }: CardProps) => {
	return <Container>{children}</Container>;
};

export default Card;
