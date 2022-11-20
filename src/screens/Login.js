import React from "react";
import { LoginCard } from "../common-components/LoginCard/LoginCard";
import { Flex, Box } from "reflexbox";
import { Spaces, Colors } from "../shared/DesignTokens";


const Login = () => (
  <>
        <Flex
        width={["100%", "240px"]}
        mx={[Spaces.None, "auto"]}
        mt={[Spaces.THREE, Spaces.FIVE]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
        bg={[Colors.GRAY_200]}
      >
        <Box>
      <LoginCard />
        </Box>
      </Flex>
  </>
);

export default Login;