import React from "react"
import GridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
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
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <p>Some Text Goes Here</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                            <div key="a"><img className="collage-layout" src="https://i.imgur.com/sUS0f6m.jpg" /></div>
                            <div key="b"><img className="collage-layout" src="https://i.imgur.com/5zW8jAN.jpg" /></div>
                            <div key="c"><img className="collage-layout" src="https://i.imgur.com/jpn6rlV.jpg" /></div>
                            <div key="d"><img className="collage-layout" src="https://i.imgur.com/hMRYWEy.jpg" /></div>
                            <div key="e"><img className="collage-layout" src="https://i.imgur.com/wGPySFn.jpg" /></div>
                            <div key="f"><img className="collage-layout" src="https://i.imgur.com/WYfUfmO.jpg" /></div>
                            <div key="g"><img className="collage-layout" src="https://i.imgur.com/0iWLz1p.jpg" /></div>
                            <div key="h"><img className="collage-layout" src="https://i.imgur.com/1U8AK1n.jpg" /></div>
                            <div key="j"><img className="collage-layout" src="https://i.imgur.com/fiyrPZb.jpg" /></div>
                        </GridLayout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collage;