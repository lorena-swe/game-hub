import { HStack, Icon, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* <Text whiteSpace="nowrap">Dark Mode</Text> */}
      {colorMode === "dark" ? (
        <Icon as={FaMoon} color="gray.200" />
      ) : (
        <Icon as={FaSun} color="#ebb917" />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
