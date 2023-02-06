// components/Layout.js
import DrawerAppBar from '@/components/DrawerAppBar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
});

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <DrawerAppBar />
    {children}
  </ThemeProvider>
);

export default MainLayout;
