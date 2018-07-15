import React, { PureComponent } from 'react';
import './Home.css'
import Carousel from '../../components/Carousel'
import About from '../../components/About'


class Home extends PureComponent {

    render () {
        return(
            <div>
                <Carousel fluid="true" />
                <About />
            </div>
        )        
    }

}

export default Home;