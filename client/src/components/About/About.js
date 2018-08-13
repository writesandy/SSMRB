import React from "react"
import './About.css';
import Collage from '../Collage'
import FeaturedArtist from '../Featured Artist'


const About = props => (
    <div className="container pageContentWidth">
        <div className="row">
            <div className="col-lg-12">
                <h3>ABOUT US</h3>
            </div>
            <div className="about-us-1 col-lg-4 col-md-4 col-sm-12">
                <p className="about-paragraph">
                    Every artist dips his brush in his own soul and paints his own nature into his pictures. -Henry Ward Beecher
                    </p>
                <div className="about-image">
                    <img src="https://i.imgur.com/fUZx5Gz.jpg" className="img-fluid" alt="about us profile" />
                </div>
            </div>
            <div className="about-us-2 col-lg-4 col-md-12 col-sm-12">
                <p className="about-paragraph">
                    Artistic expression can be a powerful means of personal transformation and emotional and spiritual healing.
                </p>
                <p className="about-paragraph">
                Welcome to McMinneville, Oregon's finest Artist Community! We believe that art is the center of cultivating a positive community experience.
                Art heals, unifies, and spotlights the best aspects in of our human lives.
                </p>
                <p className="about-paragraph">
                We'd love to have you visit our galleries, join one of our featured educational opportunities, 
                and come to our demonstrations of our finest work examples.

                </p>
                <p className="about-paragraph">
                   " We have to continue to be jumping off cliffs and developing our wings
                    on the way down." - Kurt Vonnegut
                </p>
            </div>

            <div className="services-offerings col-lg-4 col-md-12 col-sm-12">
                <div className="transbox">
                    <span className="image-left">
                        <img src="https://i.imgur.com/QgEXqIW.png" className="icon-img img-fluid"alt="paint brush icon" />
                    </span>
                    <div className="offerings">
                        <p>"We Paint Together"</p>
                        <p>AMP has been together for over 10 years. The group includes people at all levels 
                        and all media types. We find growth in our art by sharing the practice of painting regularly 
                        together and sharing our insights.</p>
                    </div>
                    <br />
                    <span className="image-left">
                        <img src="https://i.imgur.com/b8owwlb.png" className="icon-img img-fluid" alt="canvas icon" />
                    </span>
                    <div className="offerings">
                    <p>"We Critique Our Work"</p>
                        <p>Once a month we set aside time to critique our work under the guidance of 
                        a local artist. The critique process gives us insight into our paintings and helps to refine our work.</p>
                    </div>
                    <br />
                    <span className="image-left">
                        <img src="https://i.imgur.com/qdaZxDH.png" className="icon-img" alt="art utensil icons  " />
                    </span>
                    <div className="offerings">
                        <p>"We Show Our Work"</p>
                        <p>Once or twice a year we have local shows to get feedback from our family, friends sand the community about out work.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Collage Tag Goes Here -- here this is where the flex grid goes */}  
      <Collage />
      <FeaturedArtist />
    </div>


)


export default About;