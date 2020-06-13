import React from 'react'
import {withRouter} from 'react-router-dom';
function Room({props}) {

    return (
      <div className="room">

        <h1 className="room__name">ROOM NAME:</h1>
          <div className="video_display">


          </div>
          <div className="video__details">
              <div>

          <img draggable={false} src="https://img.icons8.com/color/48/000000/video.png"/>
              </div>
              <h1>People 6</h1>
              <ul>
                  <li>John Smith</li>
                  <li>Jason Born</li>
              </ul>
              <div className="exit">
                  <button>Exit</button>
              </div>
          </div>
      </div>
    )

}
export default withRouter(Room)