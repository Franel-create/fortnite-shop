import React from "react";

const Cart = (props) => {
    const {quantity = 0} = props;

    return <div className='cart purple lighten-2' onClick={props.handleCartShow}>
        <i class="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null }
    </div>
}

export default Cart;