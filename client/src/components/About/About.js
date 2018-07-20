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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper. Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    liquam blandit vulputate libero at posuere.
                    Nunc varius orci sed leo dapibus, sit amet facilisis nunc viverra.
                    Duis sit amet ullamcorper mi. Cras faucibus congue nibh, ac suscipit justo laoreet sed.
                    Etiam euismod leo eu tellus rutrum, a mollis mauris venenatis. In in facilisis dolor. Praesent id iaculis massa. Donec non maximus neque.
                    </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper.
                    Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    </p>
            </div>

            <div className="services-offerings col-lg-5 col-md-5 col-sm-12">
                One of two columns
                </div>
        </div>
    </div>


)

export default About;