import { FaBiking } from "react-icons/fa";
const Specials = () => {
    return (
            <section id="specials" class="specials">
            <div class="container">
                <div class="header-container">
                    <h1 class="specials-title">Specials</h1>
                    <button class="button">Online Menu</button>
                </div>
                <div class="header-list">
                    <div class="food-card">
                    <div class="food-card-image">
                        <img
                        src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg"
                        alt="food"
                        height="200"
                        />
                    </div>
                    <div class="food-card-body">
                        <div class="food-card-body-header">
                        <div class="food-card-body-title-header">
                            <p class="food-card-title">Greek salad</p>
                            <p class="food-card-price">$12.99</p>
                        </div>
                        <p class="food-card-description">
                            The famous greek salad of crispy lettuce, peppers, olives and our
                            Chicago style feta cheese, garnished with crunchy garlic and
                            rosemary croutons.
                        </p>
                        </div>
                        <div class="food-card-delivery">
                        <p class="food-card-delivery-title">Order a delivery</p>
                        <FaBiking />
                        </div>
                    </div>
                    </div>
                    <div class="food-card">
                    <div class="food-card-image">
                        <img
                        src="https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&amp;resize=1200:*"
                        alt="food"
                        height="200"
                        />
                    </div>
                    <div class="food-card-body">
                        <div class="food-card-body-header">
                        <div class="food-card-body-title-header">
                            <p class="food-card-title">Bruschetta</p>
                            <p class="food-card-price">$ 5.99</p>
                        </div>
                        <p class="food-card-description">
                            Our Bruschetta is made from grilled bread that has been smeared with
                            garlic and seasoned with salt and olive oil.
                        </p>
                        </div>
                        <div class="food-card-delivery">
                        <p class="food-card-delivery-title">Order a delivery</p>
                        <FaBiking />
                        </div>
                    </div>
                    </div>
                    <div class="food-card">
                    <div class="food-card-image">
                        <img
                        src="https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg"
                        alt="food"
                        height="200"
                        />
                    </div>
                    <div class="food-card-body">
                        <div class="food-card-body-header">
                        <div class="food-card-body-title-header">
                            <p class="food-card-title">Lemon Dessert</p>
                            <p class="food-card-price">$ 5.00</p>
                        </div>
                        <p class="food-card-description">
                            This comes straight from grandma’s recipe book, every last
                            ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        </div>
                        <div class="food-card-delivery">
                        <p class="food-card-delivery-title">Order a delivery</p>
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