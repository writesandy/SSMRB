import React from "react"
import './About.css';
import Collage from '../Collage'


const About = props => (
    <div className="container">
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
                <p className="about-paragraph">
                    We are an artist-owned and artist-run community. We cultivate our community of artists and feature a new artist profile each month.
                    Our mission is to provide a space for each artist to practice their craft and present to the public.
                    Artists will be available for commissioned pieces. 
                    </p>
                <div className="about-image">
                    <img src="https://i.imgur.com/9lJaU1c.jpg" className="img-fluid" alt="Responsive" />
                </div>
            </div>
            <div className="about-us-2 col-lg-4 col-md-4 col-sm-12">
                <p className="about-paragraph">
                    Art, freedom and creativity will change society faster than politics. - Victor Pinchuk
                </p>
                <p className="about-paragraph">
                "It was the possibility of darkness that made the day seem so bright." - Stephen King
                </p>
                <p className="about-paragraph">
                I urge you to please notice when you are happy, 
                and exclaim or murmur or think at some point, 
                “If this isn’t nice, I don’t know what is.” - Kurt Vonnegut
                </p>
                <p className="about-paragraph">
                   " We have to continue to be jumping off cliffs and developing our wings
                    on the way down." - Kurt Vonnegut
                </p>
            </div>

            <div className="services-offerings col-lg-4 col-md-4 col-sm-12">
                <div className="transbox">
                    <span className="image-left">
                        <img src="https://i.imgur.com/QgEXqIW.png" className="icon-img" alt="paint brush icon" />
                    </span>
                    <p className="offerings"><i className="icon-large icon-search"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tristique vel turpis ut ullamcorper.
                        Integer ante elit, tempor et ante in, elementum sagittis nunc.
                        Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
                    <br />
                    <span className="image-left">
                        <img src="https://i.imgur.com/b8owwlb.png" className="icon-img" alt="canvas icon" />
                    </span>
                    <p className="offerings"><i className="icon-large icon-search"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tristique vel turpis ut ullamcorper.
                        Integer ante elit, tempor et ante in, elementum sagittis nunc.
                        Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
                    <br />
                    <span className="image-left">
                        <img src="https://i.imgur.com/qdaZxDH.png" className="icon-img" alt="art utensil icons  " />
                    </span>
                    <p className="offerings"><i className="icon-large icon-search"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tristique vel turpis ut ullamcorper.
                        Integer ante elit, tempor et ante in, elementum sagittis nunc.
                        Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
                </div>
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
        <Collage />
    </div>


)


export default About;