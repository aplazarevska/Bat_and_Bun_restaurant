import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Alert, TextField, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { subtotal, placeOrder } from '../../utils/cartOrderUtils';
import { CART_REMOVE_ALL } from '../../reducers/constants.js';
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CustomerDetailsForm = ({ cartItems }) => {
    const { dispatch } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const totalCost = subtotal(cartItems);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        // Validate user details
        if (!name) {
            setError('Please provide your name');
            return false;
        }

        if (!phone) {
            setError('Please provide your phone');
            return false;
        }

        if (!email) {
            setError('Please provide your email');
            return false;
        }

        // Generate simple order reference number
        const currentDate = new Date();
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const time = String(currentDate.getTime());
        const genOrderRef =
            dd +
            time.substring(time.length - 3) +
            Math.floor(Math.random() * 9); // dd000r

        const incomingOrder = {
            orderRef: genOrderRef,
            cartItems: cartItems,
            totalCost: totalCost,
            customerName: name,
            customerPhone: phone.trim().split('').filter(n => !n.match(/[^0-9]/g)).join(''),
            customerEmail: email,
            orderStatus: 'Processing...',
        };

        /**
         * Overview
         *
         * To make payments with Stripe we need to do a bunch of stuff
         *
         * 1. Create a payment intent so we can get that stripe secret key
         * 2. Create a payment method to connect billing details to transaction
         * 3. Finally confirm payment
         */

        const billingDetails = {
            name: name,
            email: email,
        };

        // Step 1: Create payment intent
        const paymentIntentReq = await axios.post('/payments/payment_intents', {
            amount: totalCost * 100,
        });

        // const cardElement = elements.getElement(CardElement);
        const cardElement = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);

        // Step 2: Create payment method

        const paymentMethodReq = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails,
        });

        if (!paymentMethodReq.error) {
            //Step 4: Confirm card paymeny
            const confirmedCardPayment = await stripe.confirmCardPayment(
                paymentIntentReq.data.clientSecret,
                {
                    payment_method: paymentMethodReq.paymentMethod.id,
                }
            );

            if (!confirmedCardPayment.error) {
                // Mark as paid
                incomingOrder.orderStatus = 'Processing...';

                // FINAL STEP: Send order to our API
                await placeOrder(incomingOrder);

                setError('');

                dispatch({ type: CART_REMOVE_ALL, payload: [] });
                setLoading(false);
                navigate('/thank-you', { state: genOrderRef });
            } else {
                setError(paymentMethodReq.error.message);
            }
        } else {
            setError(paymentMethodReq.error.message);
        }
    };

    return (
        <Container>
            <Typography
                variant='h2'
                sx={{ fontSize: '1.75em', textAlign: 'center' }}
            >
                Your Details
            </Typography>
            <br />
            <br />
            <div
                style={{
                    padding: 50,
                    border: 'solid gray 2px',
                    backgroundColor: 'whitesmoke',
                }}
            >
                <strong>Payment Details</strong>
                <div className="card-details">
                  <p>Card Number: <CardNumberElement /></p>
                  <p>Exp: <CardExpiryElement /></p>
                  <p>CVC: <CardCvcElement /></p>
                </div>
            </div>

            {/* Show error */}
            {error && <Alert severity='error'>{error}</Alert>}

            <div className='customer-details-form'>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <TextField
                        variant='standard'
                        label='Name'
                        name='name'
                        fullWidth
                        margin='normal'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant='standard'
                        label='Phone number'
                        name='phone'
                        fullWidth
                        margin='normal'
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        variant='standard'
                        label='Email address'
                        name='email'
                        fullWidth
                        margin='normal'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        margin='normal'
                        endIcon={<KeyboardArrowRightIcon />}
                        disabled={loading}
                    >
                        Pay ${totalCost.toFixed(2)}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default CustomerDetailsForm;
