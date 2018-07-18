import React from "react"
import GridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './Collage.css';


class Collage extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 1, static: true},
      {i: 'b', x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 1},
      {i: 'd', x: 4, y: 0, w: 1, h: 1}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a"><img className="collage-layout" src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" /></div>
        <div key="b"><img className="collage-layout"  src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" /></div>
        <div key="c"><img className="collage-layout"  src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" /></div>
        <div key="d"><img className="collage-layout"  src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" /></div>

      </GridLayout>
    )
  }
}

export default Collage;