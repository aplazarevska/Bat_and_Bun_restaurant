const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET);

const createPaymentIntent = async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'aud',
        });

        const result = {
            clientSecret: paymentIntent.client_secret,
        };

        res.status(201).json(result);
    } catch (err) {
        res.status(500);
        throw new Error(`Error: ${err}`);
    }
};

module.exports = {
    createPaymentIntent,
};
