import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import LoginView from './views/LoginView';
import PrivateRoute from './components/PrivateRoute';
import DashboardView from './views/DashboardView';

// For testing display of sub-pages
import CartView from './views/CartView';
import OrderConfirmationView from './views/OrderConfirmationView';
import ThankYouView from './views/ThankYouView';
import TrackOrderView from './views/TrackOrderView';


// image upload
import { useState } from 'react'
import axios from 'axios'

// image upload
async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart//form-data'}})
  return result.data
}

import './App.css'

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
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description})
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    // <ThemeProvider theme={theme}>
    //   <BrowserRouter>
    //     <AuthProvider>
    //       <CartProvider>
    //         <Header />
    //         <main>
    //             <Routes>
    //               <Route exact path='/' element={<HomeView />} />
    //               <Route exact path='/about' element={<AboutView />} />
    //               <Route exact path='/admin-login' element={<LoginView />} />
    //               <Route exact path='/dashboard' element={
    //                 <PrivateRoute>
    //                   <DashboardView />
    //                 </PrivateRoute>
    //               } />

    //               {/* For testing display of sub-pages */}
    //               <Route exact path='/cart' element={<CartView />} />
    //               <Route exact path='/order-confirmation' element={<OrderConfirmationView />} />
    //               <Route exact path='/thank-you' element={<ThankYouView />} />
    //               <Route exact path='/track-order' element={<TrackOrderView />} />
    //             </Routes>
    //         </main>
    //         <Footer />
    //       </CartProvider>
    //     </AuthProvider>
    //   </BrowserRouter>
    // </ThemeProvider>

    <div className="App">
    <form onSubmit={submit}>
      <input onChange={fileSelected} type="file" accept="image/*"></input>
      <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
      <button type="submit">Submit</button>
    </form>

    { images.map( image => (
      <div key={image}>
        <img src={image}></img>
      </div>
    ))}

    <img src="/images/9fa06d3c5da7aec7f932beb5b3e60f1d"></img>

  </div>
  );
}

export default App;