import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CrownSVG from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_eDE3S2MoYCEj8gJ0s5YyO1HT00wpYVDoFt';

    const onToken = token => {
        console.log(token);
        alert("Payment successfully processed!");
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='(Demo) CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image={CrownSVG}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;