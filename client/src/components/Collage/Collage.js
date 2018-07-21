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
            <div className="container">
                <div className="row">
                    <div className="collage-section col-lg-6 col-md-6 col-sm-12">
                        <h3>Our Art Defines Who We Are</h3>
                        
                            <p className="collage-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                            <p className="collage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus, purus lacinia gravida fermentum, nulla mauris ornare tortor, a pellentesque nibh enim non dui.
                                Aenean feugiat nec est eget blandit. Praesent ligula metus, fermentum vitae scelerisque porta, scelerisque id nulla.
                                Vivamus semper sapien nec metus convallis, id ornare risus ultrices.
                                Nullam pulvinar massa nec tellus porttitor, nec tincidunt mi accumsan.
                                Sed efficitur egestas sem, quis mollis odio pretium et.
                                Mauris tempor, erat eget blandit mollis, augue lectus tempor mauris, sit amet hendrerit dui ligula nec urna.
                                Maecenas nec venenatis velit, sit amet vulputate augue.
                                Mauris facilisis, lorem vel efficitur vulputate, sem nibh venenatis elit, vestibulum interdum lorem arcu at sem.
                        </p>
                        
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                            <div key="a"><img className="collage-layout" src="https://i.imgur.com/sUS0f6m.jpg" alt="collage 1" /></div>
                            <div key="b"><img className="collage-layout" src="https://i.imgur.com/5zW8jAN.jpg" alt="collage 2" /></div>
                            <div key="c"><img className="collage-layout" src="https://i.imgur.com/jpn6rlV.jpg" alt="collage 3" /></div>
                            <div key="d"><img className="collage-layout" src="https://i.imgur.com/hMRYWEy.jpg" alt="collage 4" /></div>
                            <div key="e"><img className="collage-layout" src="https://i.imgur.com/wGPySFn.jpg" alt="collage 5"/></div>
                            <div key="f"><img className="collage-layout" src="https://i.imgur.com/WYfUfmO.jpg" alt="collage 6"/></div>
                            <div key="g"><img className="collage-layout" src="https://i.imgur.com/0iWLz1p.jpg" alt="collage 7"/></div>
                            <div key="h"><img className="collage-layout" src="https://i.imgur.com/1U8AK1n.jpg" alt="collage 8"/></div>
                            <div key="j"><img className="collage-layout" src="https://i.imgur.com/fiyrPZb.jpg" alt="collage 9"/></div>
                        </GridLayout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collage;