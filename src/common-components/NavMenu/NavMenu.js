import React from 'react';
import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
import { SideBarTextTwo } from '../SideBarTextTwo/SideBarTextTwo';
import { SideBarTextOne } from '../SideBarTextOne/SideBarTextOne';
const BoxNavMenu = styled.h2`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.FOUR};
	justify-content: right;
	align-items: right;
	color: ${(props) => props.color};
	margin: 0;
	padding: 100;
`;
BoxNavMenu.defaultProps = {
	color: Colors.NEUTRAL_WHITE,
};



export function NavMenu() {
	return (
		<>
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
                Henrique Aslan Marques Pina (RM92542)
            </SideBarTextOne>
            <SideBarTextOne>
                Eduardo Zimmermann (RM92197)
            </SideBarTextOne>
            <SideBarTextOne>
                Luca Campilongo (RM92042)
            </SideBarTextOne>
		</>
	);
}