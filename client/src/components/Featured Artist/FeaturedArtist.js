import React from "react"
import './FeaturedArtist.css';


const FeaturedArtist = props => (
    <div className="container featured-container">
        <div className="row">
            <div className="featured-artist-section col-lg-12">
                <h3>FEATURED ARTIST</h3>
            </div>
        </div>
        <div className="row">
            <div className="featured-artist-1 col-lg-4 col-md-12 col-sm-12">
                <div className="featured-content">
                    <img src="https://i.imgur.com/ekcZt2e.jpg" className="img-fluid" alt="about us profile" />
                    <h4 className="featured-artist-name">Paula Picasso</h4>
                    <p className="featured-bio">We are an artist-owned and artist-run community. We cultivate our community of artists and feature a new artist profile each month.
                    Our mission is to provide a space for each artist to practice their craft and present to the public.
                    Artists will be available for commissioned pieces.
                    </p>

                </div>
            </div>
            <div className="featured-artist-2 col-lg-4 col-md-12 col-sm-12">
                <div className="featured-content">
                    <img src="https://i.imgur.com/XqqiEPv.jpg" className="img-fluid" alt="about us profile" />
                    <h4 className="featured-artist-name">Leonardo Davincci</h4>
                    <p className="featured-bio">We are an artist-owned and artist-run community. We cultivate our community of artists and feature a new artist profile each month.
                    Our mission is to provide a space for each artist to practice their craft and present to the public.
                    Artists will be available for commissioned pieces.
                    </p>

                </div>
            </div>
            <div className="featured-artist-3 col-lg-4 col-md-12 col-sm-12">
                <div className="featured-content">
                    <img src="https://i.imgur.com/qnujUKa.jpg" className="img-fluid" alt="about us profile" />
                    <h4 className="featured-artist-name">Polix </h4>
                    <p className="featured-bio">We are an artist-owned and artist-run community. We cultivate our community of artists and feature a new artist profile each month.
                    Our mission is to provide a space for each artist to practice their craft and present to the public.
                    Artists will be available for commissioned pieces.
                    </p>

                </div>
            </div>

        </div>
    </div>


)


export default FeaturedArtist;