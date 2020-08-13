import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                  className="home__image"
                  src="https://ditsolutions.net/wp-content/uploads/2019/09/Jupiter_19_Banner_1._CB1198675309_.jpg"
                  alt=""
              />

              {/* Product id, title, price, rating, image */}
              <Product 
                  id="12321341"
                  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  price={11.56}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61zIwprkyhL._SX522_.jpg"
              />
              {/* Product */}
        </div>
    )
}

export default Home
