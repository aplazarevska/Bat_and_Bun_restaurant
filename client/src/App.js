import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AuthProvider } from './contexts/AuthContext';
import { ItemProvider } from './contexts/ItemContext';
import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import LoginView from './views/LoginView';
import PrivateRoute from './components/PrivateRoute';
import DashboardView from './views/DashboardView';
import AdminMenuList from './components/DashboardView/AdminMenuList';
import AdminOrderList from './components/DashboardView/AdminOrderList';
import AddNewItem from './components/DashboardView/AddNewItem';
import EditItem from './components/DashboardView/EditItem';
import OrderRecord from './components/DashboardView/OrderRecord';
import CartView from './views/CartView';
import OrderConfirmationView from './views/OrderConfirmationView';
import ThankYouView from './views/ThankYouView';
import TrackOrderView from './views/TrackOrderView';

// Stripe integration
import { loadStripe } from '@stripe/stripe-js';
import { Elements as StripeElementsProvider } from '@stripe/react-stripe-js';

// IMPORTANT: Do this outside render method otherwise performance sucks!
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISH_KEY}`);

// For website theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3162ae',
      light: '#698fe0',
      dark: '#00397e',
    },
  },
  typography: {
    color: '#3c3c3c',
  },
});

function App() {
  return (
    <StripeElementsProvider stripe={stripePromise}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AuthProvider>
              <ItemProvider>
                <CartProvider>
                  <OrderProvider>
                    <Header />
                    <main>
                      <Routes>
                        <Route exact path='/' element={<HomeView />} />
                        <Route exact path='/about' element={<AboutView />} />
                        <Route exact path='/admin-login' element={<LoginView />} />
                        <Route exact path='/dashboard/*' element={
                            <PrivateRoute>
                              <DashboardView>
                                <Routes>
                                  <Route exact path='/' element={<AdminOrderList />} />
                                  <Route exact path='/menu' element={<AdminMenuList />} />
                                  <Route exact path='/menu/new' element={<AddNewItem />} />
                                  <Route exact path='/menu/edit/:id' element={<EditItem />} />
                                  <Route exact path='/order-record' element={<OrderRecord />} />
                                </Routes>
                              </DashboardView>
                            </PrivateRoute>
                          }
                        />
                        <Route exact path='/cart' element={<CartView />} />
                        <Route exact path='/order-confirmation' element={<OrderConfirmationView />} />
                        <Route exact path='/thank-you' element={<ThankYouView />} />
                        <Route exact path='/track-order' element={<TrackOrderView />} />
                      </Routes>
                    </main>
                    <Footer />
                  </OrderProvider>
                </CartProvider>
              </ItemProvider>
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
    </StripeElementsProvider>
  );
}

export default App;
