import BreadImg from '../assets/4_breads.jpg';
import RestaurantImg from '../assets/restaurant.jpg';

const About = () => {
    return (
<section id="about" >
 <div className='about container'>
  <div>
    <h1 class="about-title">Little Lemon</h1>
    <h2 class="about-subtitle">California</h2>
    <p class="about-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta mollitia voluptatem beatae autem neque. Magnam commodi, illum eius a ducimus iusto qui perferendis architecto, numquam pariatur libero, quam dicta.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta mollitia voluptatem beatae autem neque. Magnam commodi, illum eius a ducimus iusto qui perferendis architecto, numquam pariatur libero, quam dicta.
    </p>
  </div>
  <img
    class="about-image-bruchetta"
    src={RestaurantImg}
    alt="Restarurant"
    height="200"
    width="200"
  /><img
    class="about-image-restaurant"
    src={BreadImg}
    alt="Restarurant food"
    height="200"
    width="200"
  />
</div>
</section>
    );
}   

export {About};