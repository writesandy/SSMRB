import React from 'react';
import './Home.css';


// Components
    import About from '../../components/About';
    import Carousel from '../../components/Carousel';

const Home = props => (
            <div>
                <Carousel />
                <About />
            </div>
        )

export default Home;