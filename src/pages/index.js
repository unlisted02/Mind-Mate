import Image from "next/image";
import { Inter } from "@next/font/google";
import DrawerAppBar from "../components/DrawerAppBar";
import { Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#71C9CE",
    },
    secondary: {
      main: "#A6E3E9",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Card>Hello World</Card>
      </ThemeProvider>
    </>
  );
}
