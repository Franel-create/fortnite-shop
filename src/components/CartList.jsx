import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
    const totalPrice = props.order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0); 

    return <ul className="collection cart-list">
        <li className="collection-item active">Корзина</li>
            {
                props.order.length ? props.order.map(item => 
                <CartItem key={item.id} {...item} removeProductFromCart={props.removeProductFromCart}
                                                plusAmount={props.plusAmount}
                                                minusAmount={props.minusAmount}
                                               />) 
                :  <li className="collection-item">Корзина пуста</li>
            }
        <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        <button className='secondary-content btn-small btn-buy'>Оформить заказ</button>
        <i className='material-icons cart-close' onClick={props.handleCartShow}>close</i>
      </ul>
}
 
export default CartList;