import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer, HeaderContainer, HeaderBlock, TotalContainer, 
        CustomStripeCheckoutButton, WarningText } from './checkout.styles';  

const CheckoutPage = ({ cartItems, total }) => {
    // Write the date 7 years away to always keep this up to date.
    const sevenYearsAway = new Date();
    sevenYearsAway.setFullYear(sevenYearsAway.getFullYear() + 7);

    return (
        <CheckoutPageContainer>
            <HeaderContainer>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </HeaderContainer>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>
            <WarningText>
                * Please use the following test credit card for payments
                <br />
                4242 4242 4242 4242 - Exp: 01/{sevenYearsAway.getFullYear()} - CVC: 123
            </WarningText>
            <CustomStripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);