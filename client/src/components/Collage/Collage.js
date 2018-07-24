import React from "react"
import GridLayout from 'react-grid-layout';
import DraggableContainer from '../../components/Draggable'
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './Collage.css';
import Draggable from "react-draggable";


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
            <div className="container collage-container draggable-artboard">
                <div className="row">

                    <div className="collage-about col-lg-4 col-md-4 col-sm-12">
                        <DraggableContainer>
                            <div className="collage-text">
                                <h3>CUSTOMIZABLE ARTBOARD</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                   Double click and rearrange the image gallery. Hold images in the sidebar as you rearrange images.</p>
                            </div>
                        </DraggableContainer>

                        <div className="customizable-artboard">

                        </div>

                    </div>
                    <div className="collage-about col-lg-8 col-md-8 col-sm-12">
                        {/*1st Row in Collage Grid */}
                        <div className="row">
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/DUYDX7Z.jpg" alt="collage image 1" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/IXfqGpA.jpg" alt="collage image 2" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/JsBSLGN.jpg" alt="collage image 3" />
                                </DraggableContainer>
                            </div>
                        </div>

                        {/* 2nd Row in Collage Grid */}
                        <div className="row">
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/7AGpYER.jpg" alt="collage image 4" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/A9gvtfm.jpg" alt="collage image 5" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/ISGTE29.jpg" alt="collage image 6" />
                                </DraggableContainer>
                            </div>
                        </div>

                        {/* 3rd Row in Collage Grid */}
                        <div className="row">
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/lQVI3Ua.jpg" alt="collage image 7" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/1rRglIP.jpg" alt="collage image 8" />
                                </DraggableContainer>
                            </div>
                            <div className="collage-image col-lg-4">
                                <DraggableContainer>
                                    <img className="collage-layout" class="img-fluid" src="https://i.imgur.com/81s5GHr.jpg" alt="collage image 9" />
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