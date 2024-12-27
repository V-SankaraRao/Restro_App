require('dotenv').config();
const data=require('../../data.js');
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.getData= async (req,res)=>{
   res.json(data);
}

exports.checkout = async (req, res) => {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.name,
                images: [product.imageUrl],
            },
            unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send('Internal Server Error');
    }
};

















// exports.checkout = async (req, res) => {
//    const {products}=req.body;
//    const lineItems = products.map((product) => ({
//      price_data: {
//        currency: 'usd',
//        product_data: {
//          name: product.name,
//          images: [product.imageUrl],
//        },
//        unit_amount:Math.round( product.price * 100),
//       },
//      quanity:1
//    }));

//    const session = await stripe.checkout.sessions.create({
//      payment_method_types: ['card'],
//      line_items: lineItems,
//      mode: 'payment',
//      success_url: 'http://localhost:3000/success',
//      cancel_url: 'http://localhost:3000/cancel',
//    });
//    console.log(session);
//    res.json({ url: session.url });
// }
