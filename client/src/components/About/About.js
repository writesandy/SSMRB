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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper. Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                    liquam blandit vulputate libero at posuere.
                    Nunc varius orci sed leo dapibus, sit amet facilisis nunc viverra.
                    Duis sit amet ullamcorper mi. Cras faucibus congue nibh, ac suscipit justo laoreet sed.
                    Etiam euismod leo eu tellus rutrum, a mollis mauris venenatis. In in facilisis dolor. Praesent id iaculis massa. Donec non maximus neque.
                    </p>
                <p className="about-image">
                    <img src="https://i.imgur.com/fUZx5Gz.jpg" className="img-fluid" alt="about us profile image" />
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
                <p className="about-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper.
                    Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                </p>
                <p className="about-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper.
                    Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
                </p>
                <p className="about-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tristique vel turpis ut ullamcorper.
                    Integer ante elit, tempor et ante in, elementum sagittis nunc.
                    Donec lobortis massa et nunc placerat, at mattis nisi sollicitudin.
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
            </div>
        </div>
        <Collage />
    </div>


)


export default About;