import React from 'react'
import ReactDOM from "react-dom";
import Square from './Square'

class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares: Array(9),
    //     };
    // }
    renderSquare(i) {
      return <Square value={i} handleChange={this.props.handleChange} />;
        //TODO: do I need to save value as state??? => it doesn't change after a click...
        // return <Square value={i} clicked={i} />;
    }

    render() {
        // const status = '';

        return <div>
            
            {/* <div className="status">{status}</div> */}
            <div className="board-row">
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
            </div>
            <div className="board-row">
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
            </div>
            <div className="board-row">
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
            </div>
          </div>;
    }
}




export default Board