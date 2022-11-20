import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const LoginSubtitle = styled.span`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.ONE_HALF};
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
`;
LoginSubtitle.defaultProps = {
	color: Colors.GREEN_400,
};