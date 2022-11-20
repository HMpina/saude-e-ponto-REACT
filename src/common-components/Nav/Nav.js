import React from 'react';
import styled from 'styled-components';
import { Colors, Spaces } from '../../shared/DesignTokens';
import saudeEPontoLogo from '../../assets/images/saudeEPontoLogo.png';
const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${Colors.RED_800};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;
const Logo = styled.img.attrs({
	src: saudeEPontoLogo,
	alt: 'Logo do "Rate the Hero!"',
})`
	height: 100%;
`;
export function Nav() {
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	);
}