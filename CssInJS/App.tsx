import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components/native";
import light from "./src/theme/light";
import dark from "./src/theme/dark";
import natal from "./src/theme/natal";


export default function App() {
  return (
    <ThemeProvider theme={natal}>
      <Home />
    </ThemeProvider>  
  );
} 