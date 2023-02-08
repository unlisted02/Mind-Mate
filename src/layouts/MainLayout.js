// components/Layout.js
import DrawerAppBar from '@/components/DrawerAppBar';
import Head from 'next/head';
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
    <Head>
      <meta name='title' content='MindMate' />
      <meta
        name='description'
        content='Get personalized mental health support through our AI-powered web app. Overcome negative thoughts, vanish your problems, and lead a happier life.'
      />
      <meta
        name='keywords'
        content='Mental Health, Personalized Support, Web App, Negative Thoughts, Solutions, Happier Life, Therapy, Chatbot, Depression, Anxiety, Stress, Mental Health Support, Emotional Well-being, Mindfulness'
      />
      <meta name='robots' content='index, follow' />
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='author' content='Lakshan Rukantha' />

    </Head>
    <DrawerAppBar />
    {children}
  </ThemeProvider>
);

export default MainLayout;
