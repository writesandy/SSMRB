import React from "react"
import './About.css';
import Collage from '../Collage'
import FeaturedArtist from '../Featured Artist'


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
                <div className="about-image">
                    <img src="https://i.imgur.com/fUZx5Gz.jpg" className="img-fluid" alt="about us profile image" />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper.
                    Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                </p>
            </div>

            <div className="services-offerings col-lg-4 col-md-12 col-sm-12">
                <div className="transbox">
                    <span className="image-left">
                        <img src="https://i.imgur.com/QgEXqIW.png" className="icon-img" class="img-fluid" alt="paint brush icon" />
                    </span>
                    <p className="offerings">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tristique vel turpis ut ullamcorper.
                        Integer ante elit, tempor et ante in, elementum sagittis nunc.
                        Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
                    <br />
                    <span className="image-left">
                        <img src="https://i.imgur.com/b8owwlb.png" className="icon-img" class="img-fluid" alt="canvas icon" />
                    </span>
                    <p className="offerings">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tristique vel turpis ut ullamcorper.
                        Integer ante elit, tempor et ante in, elementum sagittis nunc.
                        Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
                    <br />
                    <span className="image-left">
                        <img src="https://i.imgur.com/qdaZxDH.png" className="icon-img" class="img-fluid" alt="art utensil icons  " />
                    </span>
                    <p className="offerings">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tristique vel turpis ut ullamcorper.
                        Integer ante elit, tempor et ante in, elementum sagittis nunc.
                        Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
                </div>
            </div>
        </div>
        {/* Collage Tag Goes Here -- here this is where the flex grid goes */}  
      <Collage />
      <FeaturedArtist />
    </div>


)


export default About;