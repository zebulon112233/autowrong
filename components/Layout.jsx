import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} minH={"100vh"}>
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
