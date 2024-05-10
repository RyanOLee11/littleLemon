import { FaBiking } from "react-icons/fa";
const Specials = () => {
    return (
            <section id="specials" className="specials">
            <div className="container">
                <div className="header-container">
                    <h1 className="specials-title">Specials</h1>
                    <button className="button">Online Menu</button>
                </div>
                <div className="header-list">
                    <div className="food-card">
                    <div className="food-card-image">
                        <img
                        src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg"
                        alt="food"
                        height="200"
                        />
                    </div>
                    <div className="food-card-body">
                        <div className="food-card-body-header">
                        <div className="food-card-body-title-header">
                            <p className="food-card-title">Greek salad</p>
                            <p className="food-card-price">$12.99</p>
                        </div>
                        <p className="food-card-description">
                            The famous greek salad of crispy lettuce, peppers, olives and our
                            Chicago style feta cheese, garnished with crunchy garlic and
                            rosemary croutons.
                        </p>
                        </div>
                        <div className="food-card-delivery">
                        <p className="food-card-delivery-title">Order a delivery</p>
                        <FaBiking />
                        </div>
                    </div>
                    </div>
                    <div className="food-card">
                    <div className="food-card-image">
                        <img
                        src="https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&amp;resize=1200:*"
                        alt="food"
                        height="200"
                        />
                    </div>
                    <div className="food-card-body">
                        <div className="food-card-body-header">
                        <div className="food-card-body-title-header">
                            <p className="food-card-title">Bruschetta</p>
                            <p className="food-card-price">$ 5.99</p>
                        </div>
                        <p className="food-card-description">
                            Our Bruschetta is made from grilled bread that has been smeared with
                            garlic and seasoned with salt and olive oil.
                        </p>
                        </div>
                        <div className="food-card-delivery">
                        <p className="food-card-delivery-title">Order a delivery</p>
                        <FaBiking />
                        </div>
                    </div>
                    </div>
                    <div className="food-card">
                    <div className="food-card-image">
                        <img
                        src="https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg"
                        alt="food"
                        height="200"
                        />
                    </div>
                    <div className="food-card-body">
                        <div className="food-card-body-header">
                        <div className="food-card-body-title-header">
                            <p className="food-card-title">Lemon Dessert</p>
                            <p className="food-card-price">$ 5.00</p>
                        </div>
                        <p className="food-card-description">
                            This comes straight from grandma’s recipe book, every last
                            ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        </div>
                        <div className="food-card-delivery">
                        <p className="food-card-delivery-title">Order a delivery</p>
                        <FaBiking />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
            );
    }

export { Specials };