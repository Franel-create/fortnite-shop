import React from "react";

const CartItem = (props) => {
    const {mainId, quantity, displayName, removeProductFromCart = Function.prototype} = props;
    const price = props.price;

    return <div>
        <li className="collection-item">
            {displayName} x 
            <button className='btn-amount' onClick={() => {props.minusAmount(mainId)}}>-</button>
                {quantity}
            <button className='btn-amount' onClick={() => {props.plusAmount(mainId)}}>+</button>
            = {price * quantity} руб
            <span class="secondary-content" onClick={() => {removeProductFromCart(mainId)}}>
                <i class="material-icons item-close">close</i>
            </span>
        </li>
    </div>
}

export default CartItem;