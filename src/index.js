import React from "react";
import ReactDOM from "react-dom";
import HookForm from "./HookForm";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <HookForm />
      </Box>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
