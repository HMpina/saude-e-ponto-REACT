import React, { useState } from "react";
import { SideBar } from "../common-components/SideBar/SideBar";
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
    grid-template-columns: 0.5fr;
    gap: ${Spaces.TWO};
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
        mx={[Spaces.None, "auto"]}
        mt={[Spaces.None, Spaces.None]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
        bg={[Colors.GRAY_200]}
      >
        <Box sx={{ display: "flex" }}>
          <SideBar />
        </Box>
        <Box>
            <HeadingOne>Bom dia, Username!</HeadingOne>
            <HeadingOne>Cards</HeadingOne>
            <HeadingOne>informe de saude</HeadingOne>
            <HeadingOne>data</HeadingOne>
            <HeadingOne>imagem</HeadingOne>
          </Box>

        <Box>
          <HeadingOne>Sugestão de lanche que tenha:</HeadingOne>
          <Box sx={{ display: "flex" }}>
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
