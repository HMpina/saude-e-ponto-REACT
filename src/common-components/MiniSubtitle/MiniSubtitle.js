import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const MiniSubtitle = styled.h2`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.ONE_HALF};
    justify-content: center;
	color: ${(props) => props.color};
	margin: 0;
	padding: 0 10 10 10;
`;
MiniSubtitle.defaultProps = {
	color: Colors.NEUTRAL_GRAY,
};