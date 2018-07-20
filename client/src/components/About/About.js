import React from "react";
import './About.css';

const About = props => (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>ABOUT US</h3>
            </div>
            <div className="about-us-1 col-lg-4 col-md-4 col-sm-12">
                <p className="about-paragraph">
                    We are an artist-owned and artist-run community. We cultivate our community of artists and feature a new artist profile each month.
                    Our mission is to provide a space for each artist to practice their craft and present to the public.
                    Artists will be available for commissioned pieces. 
                    </p>
                <p className="about-image">
                    <img src="https://i.imgur.com/9lJaU1c.jpg" className="img-fluid" alt="Responsive" />

                </p>



            </div>
            <div className="about-us-2 col-lg-4 col-md-4 col-sm-12">
                <p className="about-paragraph">
                    Welcome to McMinneville, Oregon's finest Artist Community! We believe that art is the center of cultivating a positive community experience. 
                    Art heals, unifies, and spotlights the best aspects in of our human lives. 
                    </p>
                <p>
                    We'd love to have you visit our galleries, join one of our featured educational opportunities, and come to our demonstrations of our finest work examples.
                    </p>
            </div>

            <div className="services-offerings col-lg-5 col-md-5 col-sm-12">
              Artistic expression can be a powerful means of personal transformation and emotional and spiritual healing.
            </div>
        </div>
    </div>


)

export default About;