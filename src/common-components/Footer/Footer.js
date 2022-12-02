import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
import { Colors, Spaces } from '../../shared/DesignTokens';

const Wrapper = styled.footer`
	width: 100%;
	height: 100px;
	background-color: ${Colors.BG_BLACK};
	padding: ${Spaces.TWO};
	display: flex-end;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 140px;
	}
`;


export function Footer() {
	return (
		<>
					
				<Flex
				width={['100%', 'auto']}
				px={[Spaces.ONE, Spaces.NONE]}
			>
			<Wrapper>
			</Wrapper>
			</Flex>
		</>
	);
}