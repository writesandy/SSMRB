import React, {Component} from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import './Draggable.css';

 
class DraggableContainer extends Component {
 
  // eventLogger = (e: MouseEvent, data: Object) => {
  //   console.log('Event: ', e);
  //   console.log('Data: ', data);
  // };
 
  render() {
    return (
      <Draggable
        
        axis="both"
        handle=".handle"
        defaultPosition={{x: 1, y: 0}}
        position={null}
        grid={[1, 1]}
        onStart={this.handleStart}  
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">{this.props.children}</div>
         
        </div>
      </Draggable>
    );
  }
}
 
export default DraggableContainer;