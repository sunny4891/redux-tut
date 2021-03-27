import React from 'react';

function Home(props) {

    return (
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://fems.fusionbposervices.com/fems/assets/home_bgimages/fusion-original-transparent.png?1616860646" />
                </div>
                <div className="text-wrapper item">
                    <span>New WebSite  </span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
