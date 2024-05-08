import BreadImg from '../assets/4_breads.jpg';

import { NavLink } from 'react-router-dom';

const Welcome = () => {
  return (
    <section id="home" className="welcome">
      <div className="container">
        <div className="welcome-text">
          <h1>Little Lemon</h1>
          <h2>California</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore excepturi non explicabo vitae. Cupiditate praesentium in distinctio maiores ipsam ea.</p>
          <NavLink to="/reservations">
            <button>Reserve a table</button>
          </NavLink>
        </div>
        <div className="welcome-image">
          <img src={BreadImg} alt="Restaurant dish" />
        </div>
      </div>
    </section>
  );
}

export { Welcome };