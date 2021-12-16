import React from "react";
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
    const {goods = [], addToCart = Function.prototype} = props;

    if (!goods.length) {
        return <h3>Try again</h3>
    } 

    return <div className='goods grid-cards'>
     {goods.map(item => (
         <GoodsItem key={item.id} {...item} addToCart={addToCart}/>
     ))}
    </div>

    
}

export default GoodsList;