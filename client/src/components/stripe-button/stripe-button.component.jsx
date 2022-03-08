import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import CrownSVG from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_eDE3S2MoYCEj8gJ0s5YyO1HT00wpYVDoFt';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        }).then(response => { alert("Payment successful!") })
          .catch(error => { 
              console.error("Payment error: ", JSON.parse(error));
              alert('There was an issue with your payment. Please ensure you are using the provided credit card details.');
            });
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