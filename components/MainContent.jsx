import {
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const MainContent = () => {
  const [textInput, setTextInput] = useState("");

  const makeItWrong = (input) => {
    if (input === "") return input;
    const lastNWords = getLastNthWords(input, 2);

    console.log(lastNWords);
    return lastNWords;
  };

  const getLastNthWords = (input, lastN) => {
    const words = input.match(/\b(\w+)\b/g);
    const lastNwords = words.slice(-lastN);
    return lastNwords;
  };

  return (
    <VStack gap={16} pt={"10vh"} w={"80%"}>
      <VStack gap={4} alignItems={"center"}>
        <Heading fontWeight={"medium"} size={"2xl"}>
          Brand new Autowrong. Typing made worse than ever.
        </Heading>
        <Text fontSize={"xl"} maxW="50%" textAlign={"justify"}>
          Powered by our state of the art iWrong
          <Text as={"sup"}>©</Text> technology, you can forget about
          grammatically correct and readable text messages.
        </Text>
      </VStack>

      <HStack w={"100%"} gap={10}>
        <Textarea
          borderWidth={3}
          minH={"200px"}
          placeholder={"Type something Bianka-style!..."}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />

        <Textarea
          borderWidth={3}
          minH={"200px"}
          value={makeItWrong(textInput)}
        />
      </HStack>
    </VStack>
  );
};

export default MainContent;
