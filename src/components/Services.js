import React from 'react'
import CardOffer from '../components/CardOffer'

export default function Services() {
    return (
        <div className="row">
                <CardOffer
                img = "images/offer3.png"
                title = "Delivery"
                extra = "extra"
                />
                <CardOffer
                img = "images/offer14.png"
                title = "24/7 Support"
                />
                <CardOffer
                img = "images/offer2.png"
                title = "Delivery"
                />
                <CardOffer
                img = "images/offer1.png"
                title = "24/7 Support"
                />
            </div>
    )
}
