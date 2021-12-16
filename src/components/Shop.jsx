import React, {useState, useEffect} from "react";
import { API_KEY, API_URL } from "../config";
import Alert from "./Alert";
import Cart from "./Cart";
import CartList from "./CartList";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [alertDisplayName, setAlertDisplayName] = useState('');

    const addToCart = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

        if ( itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });
        setOrder(newOrder);
        }
        setAlertDisplayName(item.displayName);
    }

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    }

    const removeProductFromCart = (itemId) => {
        const filteredItems = order.filter((el) => el.mainId !== itemId);
        setOrder(filteredItems);
      }

    const plusAmount = (mainId) => {
        const newOrder = order.map(orderItem => {
            if (orderItem.mainId === mainId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                } 
            } else {
                return orderItem;
            }
        });
        setOrder(newOrder);
    }

    const minusAmount = (mainId) => {
        const newOrder = order.map(orderItem => {
            const newQuantity = orderItem.quantity - 1;
            if (orderItem.mainId === mainId) {
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                } 
            } else {
                return orderItem;
            }
        });
        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertDisplayName('');
    }
 
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(response => response.json())
        .then(
            (data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} 
                handleCartShow={handleCartShow}/>
            {loading ? <Preloader/> : <GoodsList goods={goods} 
                                                addToCart={addToCart}/>}
            {isCartShow && <CartList order={order} 
                                    handleCartShow={handleCartShow} 
                                    removeProductFromCart={removeProductFromCart}
                                    plusAmount={plusAmount}
                                    minusAmount={minusAmount}/>}
            {
                alertDisplayName && <Alert displayName={alertDisplayName}
                                        closeAlert={closeAlert}/>
            }
        </main>
    )
}

export default Shop;