import React from 'react'
// import { API_ROOT, HEADERS } from "../constants";import ActionCable from 'actioncable'
// import ActionCable from 'actioncable'

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
            clicked: false,
            bgColor: "white"
        };
    }

  handleChange = () => {

    this.setState({
      value: this.props.value
    });
    this.sub.send({ value: this.props.value });
  }

  updateValue = () => {
    this.setState({ value: this.props.value });
  }
  handleClick = () => {
      this.updateValue()
      this.props.handleChange(this.props.value);
      this.setState({clicked: true, bgColor: "green"})
  }
  
  render() {
    return (
      <button
        className="square"
        style={{ background: this.state.bgColor }}
        onClick={this.handleClick}
      
      >
        {/* { this.state.value } */}
      </button>
    );
  }
}

export default Square