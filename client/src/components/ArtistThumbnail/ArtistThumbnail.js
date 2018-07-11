import React from "react";
import "./ArtistThumbnail.css";

const ArtistThumbnail = () => (
        <div className="col-md-3 artist_thumbnail_container">
            <div className="col-md-3 artist_thumbnail">
                <img className="artist_thumbnail_image" src="https://images.pexels.com/photos/556069/pexels-photo-556069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Nature" />
                {/* <div className="artist_thumbnail_text-block"> */}
                    <h4>Paula Picasso</h4>
                    <h6>CO-FOUNDER &amp; CTO</h6>
                    <div className="artist_thumbnail_social">
                        <a href="https://www.instagram.com/?hl=en" class="fa fa-instagram"></a>
                        <a href="https://twitter.com/" class="fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/" class="fa fa-linkedin"></a>
                        <a href="https://www.squarespace.com/tour/portfolio-website/?channel=pnb&subchannel=go&campaign=consumer-art-united-states&subcampaign=(search-us-consumer-pnb_artist-websites_e)&source=us_art&gclid=CjwKCAjwspHaBRBFEiwA0eM3kRKF6hhj1QGI7XD3u-Gnjnd6p4YdIlvUA7aYWoiLW4BrIt5pHQR16RoCQcQQAvD_BwE" class="fa fa-globe"></a>
                </div>
            </div>
        </div>
    );

export default ArtistThumbnail;