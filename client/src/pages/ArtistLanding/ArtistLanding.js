import React, { PureComponent } from 'react';
import './ArtistLanding.css'
import ArtistThumbnail from '../../components/ArtistThumbnail';


class ArtistLanding extends PureComponent {

    render () {
        return (
            <div>
                <ArtistThumbnail />
            </div>
        )
    }

}

export default ArtistLanding;