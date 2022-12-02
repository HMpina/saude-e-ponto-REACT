import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../shared/DesignTokens";
import { Flex, Box } from "reflexbox";
import { Spaces } from "../shared/DesignTokens";
import { HeadingOne } from "../common-components/HeadingOne/HeadingOne";
import { SearchField } from "../common-components/SearchFields/SerachFields";
import { LoginButton } from "../common-components/LoginButton/LoginButton";
import { FoodCard } from "../components/FoodCard/FoodCard";
import { FoodCardLoader } from "../components/FoodCardLoader/FoodCardLoader";
import { Alert } from "../common-components/Alert/Alert";
import { useFood } from "../hooks/useFood";

const FoodGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};
  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${Spaces.ONE};
  }
`;

export default function Home() {
  const [search, setSearch] = useState({
    value: null,
    doSearch: false,
  });

  const { food, isLoadingFood, searchFood } = useFood(search.value);

  React.useEffect(() => {
    if (search.doSearch) {
      searchFood().then(() => {
        setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
      });
    }
  }, [search]);

  function handleUpdateSearchValue({ target: { value } }) {
    setSearch((prevValue) => ({ ...prevValue, value }));
  }

  function handleSearch() {
    setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
  }

  return (
    <>
      <Flex
        width={["100%", "auto"]}
        height={["100%", "auto"]}
        mx={[Spaces.None, Spaces.None]}
        mt={[Spaces.None, Spaces.None]}
        mb={[Spaces.NONE, Spaces.NONE]}
        bg={[Colors.GRAY_200]}
        col={3}
      >
        <Box col={2} px={4}>
        <Box py={4}>
            <HeadingOne>Bom dia, Username!</HeadingOne>
            <HeadingOne>Hoje é FERIADO, aproiveite para preparar um alimento saudável</HeadingOne>
          </Box>
          <HeadingOne>Buscar sugestão de lanche que tenha:</HeadingOne>
          <Box py={3} sx={{ display: "flex" }}>
            <Box>
              <SearchField
                onKeyUp={handleUpdateSearchValue}
                placeholder="Cheddar..."
              />
            </Box>
            <Box>
              <LoginButton onClick={handleSearch}>Buscar</LoginButton>
            </Box>
          </Box>

          {!isLoadingFood && food && food.cancel ? (
            <Box px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
              <Alert type="info">Nenhum registro foi encontrado.</Alert>
            </Box>
          ) : (
            <FoodGrid
              px={[Spaces.ONE, Spaces.TWO]}
              pb={[Spaces.ONE, Spaces.TWO]}
            >
              {isLoadingFood && (
                <>
                  <FoodCardLoader />
                </>
              )}
              {!isLoadingFood &&
                food &&
                food.foods.map((snack) => (
                  <FoodCard
                    name={snack.description}
                    size={snack.servingSize}
                    sizeMeasure={snack.servingSizeUnit}
                    ingredients={snack.ingredients}
                    brand={snack.brandName}
                  />
                ))}
            </FoodGrid>
          )}
        </Box>
      </Flex>
    </>
  );
}
