import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
    Spaces,
} from '../../shared/DesignTokens';
export const LoginHeadingOne = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.FOUR};
	color: ${(props) => props.color};
	margin: 0;
	padding: ${Spaces.THREE} ${Spaces.ONE} ${Spaces.ONE} ${Spaces.ONE};
`;
LoginHeadingOne.defaultProps = {
	color: Colors.NEUTRAL_WHITE,
};