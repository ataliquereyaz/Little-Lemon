import React from 'react';
import {Link} from 'react-router-dom';
import bannerImg from '../assets/restauranfood.jpg';
const Header=()=>{


    return(
        <header className='header'>
          <section>
              {/* banner text  */}
              <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are family owned Mediterraneran restaurant, focused on traditional recipes served 
                    with a modern twist.</p>
                    <Link to="/BookingForm">
                   <button aria-Label='On Click'>Reserve Table</button> </Link>
              </div>
              {/* banner image */}
              <div className='banner-img'>
                <img src={bannerImg} alt='banner'/>
              </div>
          </section>
        </header>
    );
}
export default Header;
