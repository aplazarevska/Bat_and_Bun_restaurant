import React, { useContext, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

import RightDrawer from './RightDrawer';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(.5),
  paddingBottom: theme.spacing(.5),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 64,
  },
}));

const Header = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const { currentUser } = useAuth();
  const { cartItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (cartItems.length === 0) {
      setTotalItems(0);
    }
    if (cartItems.length > 1) {
      setTotalItems(0);
      cartItems.map(item => setTotalItems(t => t + item.qty));
    }
    if (cartItems.length === 1) {
      setTotalItems(cartItems[0].qty);
    }
  }, [cartItems]);
  
  // Menu Items
  const menuItems = [
    {
      menuName: 'Home',
      menuLink: '/'
    },
    {
      menuName: 'About',
      menuLink: '/about'
    },
    {
      menuName: currentUser && currentUser ? 'Dashboard' : 'Admin Log In',
      menuLink: currentUser && currentUser ? '/dashboard' : '/admin-login'
    },
    {
      menuName: 'Track Order',
      menuLink: '/track-order'
    }
  ];

  return (
    <AppBar position="static">
      <StyledToolbar>
        <div>
          <img
            src="/img/bat-bun-logo.png"
            alt="Bat + Bun Logo"
            className="logo"
            onClick={e => window.location.href='/'}
          />
        </div>
        <div>
          {matches &&
            <Box className="main-menu">
              {menuItems.map(menu => (
                <Link
                  key={menu.menuName}
                  href={`${menu.menuLink}`}
                >
                  {menu.menuName}
                </Link>
              ))}
            </Box>
          }
        </div>
        <div>
          <MenuItem disableRipple>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              disableRipple
              onClick={e => window.location.href='/cart'}
            >
              <Badge
                badgeContent={totalItems}
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          {!matches &&
            <RightDrawer menuItems={menuItems} />
          }
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
