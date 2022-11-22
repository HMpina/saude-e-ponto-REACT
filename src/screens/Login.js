import React from "react";
import { LoginCard } from "../common-components/LoginCard/LoginCard";
// import { Flex, Box } from "reflexbox";
// import { Spaces, Colors } from "../shared/DesignTokens";
import styled from "styled-components";
import imgBg from "./../assets/images/background.png"


const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
`;



export function Login() {
  return (
    <div>
      <Body>
        <LoginCard />
      </Body>
    </div>
  );
}






// const Login = () => (
//   <>
//         <Flex
//         width={["100%", "2040px"]}
//         mx={[Spaces.None, "auto"]}
//         mt={[Spaces.THREE, Spaces.FIVE]}
//         px={[Spaces.ONE, Spaces.NONE]}
//         mb={[Spaces.TWO, Spaces.FOUR]}
//         bg={[Colors.GRAY_200]}
//       >
//         <Box>
//       <LoginCard />
//         </Box>
//       </Flex>
//   </>
// );

// export default Login;