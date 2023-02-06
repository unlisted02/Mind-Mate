import * as React from 'react';
import Image from 'next/image';
import MindMateLogo from '../../public/mindmate-logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import { ListItemIcon } from '@mui/material';

const drawerWidth = '100%';

const navItems = [
  { name: 'Home', icon: <HomeIcon />, url: '/' },
  { name: 'Talk With MindMate', icon: <ChatIcon />, url: '/chat' },
  { name: 'Blog', icon: <LibraryBooksIcon />, url: '/blog' },
  { name: 'About', icon: <InfoIcon />, url: '/about' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', height: '100vh' }}>
      <Typography
        variant='h6'
        sx={{
          display: 'flex',
          backgroundColor: '#2196f3',
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          fontSize: '1.5rem',
          height: '3.5rem',
          marginLeft: { xs: '-3rem', sm: 'auto' },
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          aria-label='open drawer'
          edge='start'
          sx={{ display: { sm: 'none' }, left: '-2.45rem' }}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <Image src={MindMateLogo} alt='logo' width='40' height='40' />
        MindMate
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.url}>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon sx={{ minWidth: 0, marginRight: '1rem' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              gap: 1,
              fontSize: '1.5rem',
              display: {
                xs: 'flex',
                sm: 'flex',
                alignItems: 'center',
              },
              justifyContent: { xs: 'center', sm: 'left' },
              marginLeft: { xs: '-2.5rem', sm: 'auto' },
            }}
          >
            <Image src={MindMateLogo} alt='logo' width='40' height='40' />
            MindMate
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <Button
                  variant='contained'
                  key={item.name}
                  sx={{ color: '#fff', fontSize: '1rem', mx: 1 }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3.5 }}></Box>
    </Box>
  );
}

export default DrawerAppBar;
