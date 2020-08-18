import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout_ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Bank/August/CITI/V236199847_CITI_Bank-EMIFest_August_Mobile_1500x300.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, click 
                        "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                   <h2 className="checkout__title">Your Shopping Basket</h2>

                   {/* List out all of the Checkout Products */}
                   {basket?.map(item => (
                       <CheckoutProduct
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                        />
                   ))}
                   
                </div>
            )}
        </div>
    )
}

export default Checkout
