import React from "react";
import styled from "styled-components";
import { Box } from "reflexbox";
import { Card } from "../../common-components/Card/Card";
import { Colors, Spaces } from "../../shared/DesignTokens";
import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne";
import Skeleton from 'react-loading-skeleton';

const InformationGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 70px;
  gap: ${Spaces.TWO};
`;

export function FoodCardLoader() {
  return (
    <Card>
      <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
        <Box>
          <HeadingOne as="div" color={Colors.BLUE_500}>
            <Skeleton />
          </HeadingOne>
          <HeadingOne as="div" color={Colors.BLUE_500}>
          <Skeleton />
          </HeadingOne>
          <HeadingOne as="div" color={Colors.BLUE_500}>
          <Skeleton />
          </HeadingOne>
          <HeadingOne as="div" color={Colors.BLUE_500}>
          <Skeleton />
          </HeadingOne>
        </Box>
      </InformationGrid>
    </Card>
  );
}