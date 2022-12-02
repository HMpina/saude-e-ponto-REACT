import React from "react";
import styled from "styled-components";
import { Box } from "reflexbox";
import { Card } from "../../common-components/Card/Card";
import { Colors, Spaces } from "../../shared/DesignTokens";
import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne";

const InformationGrid = styled(Box)`
  display: flex;
  grid-template-columns: 100%;
  gap: ${Spaces.TWO};
`;

export function FoodCard({ name, size, sizeMeasure, ingredients, brand }) {
  return (
    <Card>
      <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
        <Box>
          <HeadingOne as="div" color={Colors.GRAY_600}>
            <strong>{name}</strong>
          </HeadingOne>
          <HeadingOne as="div" color={Colors.GRAY_700}>
            <strong>Marca: </strong> {brand}
          </HeadingOne>
          <HeadingOne as="div" color={Colors.GRAY_700}>
            <strong>1 porção = </strong> {size} {sizeMeasure}
          </HeadingOne>
          <HeadingOne as="div" color={Colors.GRAY_700}>
            <strong>Ingredientes: </strong> {ingredients}
          </HeadingOne>
        </Box>
      </InformationGrid>
    </Card>
  );
}
