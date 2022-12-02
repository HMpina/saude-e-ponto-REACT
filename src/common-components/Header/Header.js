import React from 'react';
import styled from 'styled-components';
import { Colors, Spaces } from '../../shared/DesignTokens';
import saudeEPontoLogo from '../../assets/images/saudeEPontoLogo.svg';
import { NavMenu } from '../NavMenu/NavMenu';
const Wrapper = styled.header`
	width: 100%;
	height: 120px;
	background-color: ${Colors.BG_BLACK};
	padding: ${Spaces.TWO} ${Spaces.SIX} ${Spaces.TWO} ${Spaces.TWO};
	display: flex;
	justify-content: left;
	align-items: left;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;
const Logo = styled.img.attrs({
	src: saudeEPontoLogo,
	alt: 'Logo escrito "Saúde e Ponto!"',
})`
	height: 60%;
    @media (min-width: 1024px) {
		height: 90%;
	}
`;


export function Header() {
	return (
		<Wrapper>
			<Logo />
			<NavMenu />
		</Wrapper>
	);
}