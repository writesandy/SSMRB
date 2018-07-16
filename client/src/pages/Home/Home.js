import React from 'react';
import './Home.css'

// Components
    import About from '../../components/About'
    import Carousel from "../../components/Carousel"

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                {/* <Carousel fluid={true}/> */}
                <About />
            </div>    
        )
    }
}

export default Home;