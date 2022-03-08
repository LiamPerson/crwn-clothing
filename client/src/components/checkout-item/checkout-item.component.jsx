import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainerContainer, ImageContainer, 
    NameContainer, PriceContainer, QuantityContainer, ArrowContainer, 
    CountContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainerContainer>
                <ImageContainer src={imageUrl} alt="item" />
            </ImageContainerContainer>
            <NameContainer>{name}</NameContainer>
            <CountContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <QuantityContainer>{quantity}</QuantityContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </CountContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)} >&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);