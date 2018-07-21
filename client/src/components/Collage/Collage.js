import React from "react"
import GridLayout from 'react-grid-layout';
//import '../../../node_modules/react-grid-layout/css/styles.css';
//import '../../../node_modules/react-resizable/css/styles.css';
import './Collage.css';


class Collage extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            { i: 'a', x: 0, y: 0, w: 2, h: 3, static: false },
            { i: 'b', x: 2, y: 0, w: 2, h: 3, minW: 1, maxW: 12 },
            { i: 'c', x: 4, y: 0, w: 2, h: 3 },
            { i: 'd', x: 0, y: 2, w: 2, h: 3 },
            { i: 'e', x: 2, y: 2, w: 2, h: 3 },
            { i: 'f', x: 4, y: 2, w: 2, h: 3 },
            { i: 'g', x: 0, y: 4, w: 2, h: 4 },
            { i: 'h', x: 2, y: 4, w: 2, h: 4 },
            { i: 'j', x: 4, y: 4, w: 2, h: 4 }

        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="collage-section col-lg-6 col-md-6 col-sm-12">
                        <h3>Our Art Defines Who We Are</h3>
                        
                            <p className="collage-text">Our artist work in oil painting on canvas. Paintings can be commissioned by the sitter. 
                            Every portrait that is painted with feeling is a portrait of the artist, not of the sitter.” 
                            </p>
                            <p className="collage-text">We have custom jewlers, sculptures, and found-art artists. Artists see the world differently. We notice things
                            that are often overlooked by others. As we learn to begin to see the world differently, we begin to see people in a different light and notice aspects about them that may have been overlooked previously.
                            If you're looking for artistic creations, know that Artists take risks. Artists aren't afraid to make mistakes.
                            </p>
                        
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                            <div key="a"><img className="collage-layout" src="https://i.imgur.com/sUS0f6m.jpg" alt="collage image 1" /></div>
                            <div key="b"><img className="collage-layout" src="https://i.imgur.com/5zW8jAN.jpg" alt="collage image 2" /></div>
                            <div key="c"><img className="collage-layout" src="https://i.imgur.com/jpn6rlV.jpg" alt="collage image 3" /></div>
                            <div key="d"><img className="collage-layout" src="https://i.imgur.com/hMRYWEy.jpg" alt="collage image 4" /></div>
                            <div key="e"><img className="collage-layout" src="https://i.imgur.com/wGPySFn.jpg" alt="collage image 5"/></div>
                            <div key="f"><img className="collage-layout" src="https://i.imgur.com/WYfUfmO.jpg" alt="collage image 6"/></div>
                            <div key="g"><img className="collage-layout" src="https://i.imgur.com/0iWLz1p.jpg" alt="collage image 7"/></div>
                            <div key="h"><img className="collage-layout" src="https://i.imgur.com/1U8AK1n.jpg" alt="collage image 8"/></div>
                            <div key="j"><img className="collage-layout" src="https://i.imgur.com/fiyrPZb.jpg" alt="collage image 9"/></div>
                        </GridLayout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collage;