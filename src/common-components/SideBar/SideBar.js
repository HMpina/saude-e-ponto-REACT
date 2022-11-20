import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

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
	height: 100vh;
	max-width: 240px;
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
    const navigate = useNavigate();
	return (
		<Wrapper>
			<Icon />
			<TitleIcon />
            <SideBarTextOne>
                - Home
            </SideBarTextOne>
            <SideBarTextOne>
                - Em Breve...
            </SideBarTextOne>
            <SideBarTextOne>
                - Em Breve...
            </SideBarTextOne>
            <SideBarTextTwo>
                Sair da conta
            </SideBarTextTwo>
            <SideBarTextTwo>
                Um projeto de estudo:
            </SideBarTextTwo>
            <SideBarTextOne>
                SISTEMAS PARA INTERNET
            </SideBarTextOne>
            <SideBarTextTwo>
                2TINOR-2022
            </SideBarTextTwo>
		</Wrapper>
	);
}
