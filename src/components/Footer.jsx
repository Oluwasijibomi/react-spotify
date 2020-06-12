import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
    <div className="container-fluid">
      <div className="d-flex justify-content-between pt-3">


        <div className="media-player">
          <div>

            <i className="fas fa-random fa-xs mx-3"></i>
            <i className="fas fa-backward fa-xs mx-3"></i>
            <i className="far fa-play-circle fa-lg mx-3"></i>
            <i className="fas fa-forward fa-xs mx-3"></i>
            <i className="fas fa-redo fa-xs mx-3"></i>
          </div>




          <div>
            <input className="range mr-4" type="range" id="formControlRange" style={{width: "250px",    height: "0.097px"}}/>
          </div>
        </div>

        <div className="volume mt-2">
          <div className="col d-flex flex-row">
            <div className="mr-2">
              <i className="fas fa-volume-up fa-xs"></i>
            </div>
            <div>
              <input className="mt-1" type="range" />
            </div>
          </div>

        </div>



      </div>
    </div>

  </div>

    )
  }
}

export default Footer