import React from 'react';
import PropTypes from "prop-types";

export default function Item(props) {

    const { items } = props


    let high = "item-quantity level-high",
        medium = "item-quantity level-medium",
        low = "item-quantity level-low";


    return (
        <>
            {items.map(i => (i.MainImage) ? (<div className="item" key={i.listing_id}>
                <div className="item-image">
                    <a href={i.url}>
                        <img src={i.MainImage ? i.MainImage.url_570xN : null} alt='img'></img>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">
                        {(i.title ? ((i.title.length < 50) ? i.title : i.title.slice(0, 51) + "...") : null)}
                    </p>
                    <p className="item-price">{
                        (i.currency_code !== "USD") ? (i.currency_code !== "EUR" ? i.currency_code : "€") : "$"
                    }
                        {" " + i.price}
                    </p>
                    <p className={
                        (i.quantity > 20) ? high : ((i.quantity > 10) ? medium : low)}>
                        {i.quantity + " left"}
                    </p>
                </div>
            </div>) : null
            )}
        </>
    )
}

Item.propTypes = {
    MainImage: PropTypes.object.isRequired
}

Item.defaultProps = []
