import React, { PureComponent } from 'react';
import './Dropzone.css';
import Dropzone from 'react-dropzone';
 
class Dropzone extends React.PureComponent {
    constructor() {
        super()
        this.state = { 
            accepted: [],
            rejected:[] 
        }
      }
    
      render() {
        return (
          <section>
            <div className="dropzone">
              <Dropzone 
                accept="image/jpeg, image/png"
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </Dropzone>
            </div>
            <aside>
              <h2>Images to upload</h2>
              <ul>
                {
                  this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </section>
        );
      }
    }
export default Dropzone;