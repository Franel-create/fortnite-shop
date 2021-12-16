import React from "react";

const GoodsItem = (props) => {
    const {mainId, displayName, displayDescription} = props;
    const price = props.price.regularPrice;

    return <div>
            <div className="card" id={mainId}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={props.displayAssets[0].full_background} alt={displayName}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{displayName}</span>
                    <div className='description'>{displayDescription}</div>
                    <p className='price-block'>
                        <button className='btn' onClick={() => props.addToCart({mainId, displayName, price})}>Купить</button>
                        <span className='price'>{price}</span>
                    </p>
                </div>
            </div>
    </div>
}

export default GoodsItem;


// src={props.displayAssets.full_background}