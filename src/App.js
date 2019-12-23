import React, {Component} from 'react';
import Clock from './Components/Clock'

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            <div className="text-center">
              <h1>Clock</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Clock size={400} hourFormat="standard" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
