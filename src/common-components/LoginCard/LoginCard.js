import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import {
	BorderRadiuses,
	Colors,
	FontFamilies,
	FontLetterSpacings,
	FontSizes,
	Spaces,
} from '../../shared/DesignTokens';
import saudeEPontoLogo from '../../assets/images/saudeEPontoLogo.svg';
import saudeEPontoTitle from '../../assets/images/saudeEPontoTitle.svg';
import { LoginButton } from '../LoginButton/LoginButton';
import { LoginHeadingOne } from '../LoginHeadingOne/LoginHeadingOne';
import { LoginSubtitle } from '../LoginSubtitle/LoginSubtitle';

const Wrapper = styled.div`
	display: flex;
    flex-direction: column ;
	align-items: center;
	gap: ${Spaces.TWO};
	padding: ${Spaces.THREE} ${Spaces.TWO};
	background-color: ${Colors.BG_BLACK};
	border-radius: ${BorderRadiuses.TWO};
	height: 400px;
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

const Input = styled.input`
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.PRIMARY};
    width: 90%;
	outline: none;
	padding: ${Spaces.ONE};
	color: ${Colors.GRAY_400};
	background: none;
	border-radius: ${BorderRadiuses.ONE};
	border: 1px solid ${Colors.GRAY_400};
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	&amp;::placeholder {
		color: ${Colors.GRAY_600};
		opacity: 1;
	}
	&amp;:-ms-input-placeholder {
		color: ${Colors.GRAY_600};
	}
	&amp;::-ms-input-placeholder {
		color: ${Colors.GRAY_600};
	}
`;


export function LoginCard() {
    const navigate = useNavigate();
	return (
		<Wrapper>
			<Icon />
			<TitleIcon />
            <LoginHeadingOne>
                Login
            </LoginHeadingOne>
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
            <LoginButton onClick={() => navigate("/Home")}>
                login
            </LoginButton>
            <LoginSubtitle>
                Forgot your Password?
            </LoginSubtitle>
		</Wrapper>
	);
}
