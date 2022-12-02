import React from 'react';
import styled from 'styled-components';

import {
	BorderRadiuses,
	Colors,
	Spaces,
} from '../../shared/DesignTokens';
import saudeEPontoLogo from '../../assets/images/saudeEPontoLogo.svg';
import saudeEPontoTitle from '../../assets/images/saudeEPontoTitle.svg';
import { SideBarTextOne } from '../SideBarTextOne/SideBarTextOne';
import { SideBarTextTwo } from '../SideBarTextTwo/SideBarTextTwo';

const Wrapper = styled.div`
	display: flex;
    flex-direction: column ;
	align-items: start;
	gap: ${Spaces.TWO};
	padding: ${Spaces.THREE} ${Spaces.TWO};
	background-color: ${Colors.BG_BLACK};
	border-radius: ${BorderRadiuses.ONE};
	height: 65vh;
	max-width: 375px;
    @media (min-width: 1024px) {
        display: grid;
        gap: ${Spaces.TWO};
        height: 100vh;
        max-width: 240px;
        flexDirection: row;
      }
    `;

    const Icon = styled.img.attrs({
	src: saudeEPontoLogo,
})`
	width: 70px;
	height: 63px;
`;

const TitleIcon = styled.img.attrs({
src: saudeEPontoTitle,
})`
width: 163x;
height: 20px;
`;




export function SideBar() {
	return (
		<Wrapper>
			<Icon />
			<TitleIcon />
            <SideBarTextOne>
                Um projeto de estudo FIAP
            </SideBarTextOne>
            <SideBarTextOne>
                SISTEMAS PARA INTERNET
            </SideBarTextOne>
            <SideBarTextTwo>
                2TINOR-2022
            </SideBarTextTwo>
            <SideBarTextOne>
                - Henrique Aslan Marques Pina (RM92542)
            </SideBarTextOne>
            <SideBarTextOne>
                - Eduardo Zimmermann (RM92197)
            </SideBarTextOne>
            <SideBarTextOne>
                - Luca Campilongo (RM92042)
            </SideBarTextOne>
		</Wrapper>

	);
}
