import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  Divider,
  IconButton
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from '../contexts/AuthContext';

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MuiDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DashboardView = ({ children }) => {
  const { logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    try {
      await logout();
      navigate('/admin-login');
    } catch (err) {
      console.log(err);
    }
  }

  const menuItems = [
    {
      text: 'Orders',
      icon: <ListAltIcon />,
      path: ""
    },
    {
      text: 'Menu List',
      icon: <LocalDiningIcon />,
      path: "menu"
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box id="DashboardView" sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiDrawer variant="permanent" open={open} className="admin-menu-drawer">
        <DrawerHeader>
          {open
            ? (
              <IconButton onClick={handleDrawerClose} sx={{cursor: 'pointer', justifySelf: 'flex-end'}}>
                <ChevronLeftIcon />
              </IconButton>
            )
            : (
              <IconButton onClick={handleDrawerOpen} sx={{cursor: 'pointer'}}>
                <ChevronRightIcon />
              </IconButton>
            )
          }
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(menu => (
            <ListItem
              button key={menu.text}
              onClick={() => navigate(menu.path)}
              className={location.pathname === `/dashboard${menu.path !== '' ? `/${menu.path}`:menu.path}` ? 'list-active' : null}
            >
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={handleLogout}
          >
            <ListItemIcon>
              <LogoutIcon color={'error'} />
            </ListItemIcon>
            <ListItemText sx={{color: '#d32f2f'}} primary="Log Out" />
          </ListItem>
        </List>
      </MuiDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export default DashboardView;
