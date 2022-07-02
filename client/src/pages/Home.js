import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
    const style =     {backgroundImage: "url(/assets/images/background-slider.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center"}
    return <div>
        <Announcement/>
        <div style={style}>
        <NavBar/>
        <Slider/>
        </div>
        <Categories/>  
        <Products/> 
        <Newsletter/>
        <Footer/>
    </div>;
}

export default Home;