import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/July-12-edit-banner4-kweruig9-banner4-web.jpg"
                  alt=""
              />

              {/* Product id, title, price, rating, image */}
              <div className="home__row">
              <Product 
                  id="12321341"
                  title="The Official Guide to the GRE General Test Paperback – 31 July 2017"
                  price={739}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/51p69DRYM4L._SX387_BO1,204,203,200_.jpg"
              />
              <Product 
                  id="12321341"
                  title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)"
                  price={42999}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg"
              />
              </div>

              <div className="home__row">
              <Product 
                  id="12321341"
                  title="Call of Duty: Ghosts (PS3)"
                  price={199}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/71p5A9Qgt4L._SL1385_.jpg"
              />
               <Product 
                  id="12321341"
                  title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Blue)"
                  price={9749}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61MVJyOfuBL._SL1000_.jpg"
              />
               <Product 
                  id="12321341"
                  title="Smily Creation Women's Taffeta Silk Embroidered Long Anarkali Gown for Women"
                  price={519}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/71DpZf6-WzL._UL1500_.jpg"
              />
              </div>

              <div className="home__row">
              <Product 
                  id="12321341"
                  title="Samsung 108 cm (43 Inches) Full HD LED Smart TV UA43N5470 (Black) (2019 model)"
                  price={36971}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/81VjtEmHh9L._SL1500_.jpg"
              />
              </div>
              {/* Product */}
        </div>
    )
}

export default Home
