import React from "react"
// import GridLayout from 'react-grid-layout';
import DraggableContainer from '../../components/Draggable'
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './Collage.css';
// import Draggable from "react-draggable";


class Collage extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        // var layout = [
        //     { i: 'a', x: 0, y: 0, w: 2, h: 3, static: false },
        //     { i: 'b', x: 2, y: 0, w: 2, h: 3, minW: 1, maxW: 12 },
        //     { i: 'c', x: 4, y: 0, w: 2, h: 3 },
        //     { i: 'd', x: 0, y: 2, w: 2, h: 3 },
        //     { i: 'e', x: 2, y: 2, w: 2, h: 3 },
        //     { i: 'f', x: 4, y: 2, w: 2, h: 3 },
        //     { i: 'g', x: 0, y: 4, w: 2, h: 4 },
        //     { i: 'h', x: 2, y: 4, w: 2, h: 4 },
        //     { i: 'j', x: 4, y: 4, w: 2, h: 4 }

        // ];
        return (
            <div className="container collage-container draggable-artboard">
                <div className="row">

                    {/* <div className="collage-about col-lg-4 col-md-12 col-sm-12">
                        <DraggableContainer>
                            <div className="collage-text">
                                <h3>CUSTOMIZABLE ARTBOARD</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                   Double click and rearrange the image gallery. Hold images in the sidebar as you rearrange images.</p>
                            </div>
                        </DraggableContainer>

                        <div className="customizable-artboard">

                        </div>

                    </div> */}
                    <div className="collage-about col-lg-12 col-md-12 col-sm-12">
                        {/*1st Row in Collage Grid */}
                        <div className="row">
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/2fCAwFr.jpg" alt="collage 1" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/kPvKSmi.jpg" alt="collage 2" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/krCI7iM.jpg" alt="collage 3" />
                                </DraggableContainer>
                            </div>
                        </div>

                        {/* 2nd Row in Collage Grid */}
                        <div className="row">
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/nYR5uCB.jpg" alt="collage 4" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/ROyXWl5.jpg" alt="collage 5" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/gnANVZO.jpg" alt="collage 6" />
                                </DraggableContainer>
                            </div>
                        </div>

                        {/* 3rd Row in Collage Grid */}
                        <div className="row">
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/9zGeotG.jpg" alt="collage 7" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/R7WXT9g.jpg" alt="collage 8" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout img-fluid" src="https://i.imgur.com/dRtxs1h.jpg" alt="collage 9" />
                                </DraggableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collage;