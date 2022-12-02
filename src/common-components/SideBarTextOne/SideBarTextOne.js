import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const SideBarTextOne = styled.span`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.ONE_QUARTER};
	color: ${(props) => props.color};
	margin: 0;
	padding: 10px;
`;
SideBarTextOne.defaultProps = {
	color: Colors.NEUTRAL_WHITE,
};