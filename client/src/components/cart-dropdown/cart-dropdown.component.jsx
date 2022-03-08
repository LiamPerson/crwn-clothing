import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer } from './cart-dropdown.styles';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length
                    ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButtonContainer onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
            }>GO TO CHECKOUT</CustomButtonContainer>
        </CartDropdownContainer>
    )
};

export default CartDropdown;