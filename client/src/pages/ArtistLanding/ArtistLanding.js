import React, { PureComponent } from 'react';
import './ArtistLanding.css'
import ArtistThumbnail from '../../components/ArtistThumbnail';


class ArtistProfiles extends PureComponent {

    render () {
        return (
            <div>
                <ArtistThumbnail />
            </div>
        )
    }

}

export default ArtistProfiles;