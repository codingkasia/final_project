import React, { Component } from "react";
import $ from "jquery";
import './App.css'; 
import Navigation from './components/Navigation'
import Board from './components/Board'
import ActionCable from "actioncable"
const url = 'http://localhost:3000/guesses'




class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedButtons: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/guesses.json").then(data => {
      data.json().then(res => {
        this.setState({ clickedButtons: res });
        console.log(this.state.clickedButtons);
      });
    });

    const cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    this.sub = cable.subscriptions.create("GuessesChannel", {
      received: this.handleReceiveNewGuess
    });
  }

  handleReceiveNewGuess = ({ value }) => {
    if (value !== this.state.value) {
      this.setState({ value });
    }
  };

  // handleChange = () => {
   
  //   // this.setState({
  //   //   value: this.props.value
  //   // });
  //   this.sub.send({ value: this.props.value});
  // }

  
 
  postGuess = (data) => {
    
    console.log(this.props.value);
    fetch("http://localhost:3000/api/v1/guesses", {
      method: "POST",
      body: JSON.stringify({value: data}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }
  
  test = () => {
  console.log("Testing...")
  }

  

  render() {

    return <div className="App">
        <div className="App-header">
          <Navigation />
        <Board handleChange={this.postGuess} />
        </div>
        <div className="App-intro">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>;
  }
}


export default App;

















// handleClick = () => {
//   this.setState({
//     clicked: true,
//     bgColor: "green",
//     value: this.props.value
//   });
//   this.sub.send({ value: this.props.value });

//   var value = this.state.value;

//   $.ajax({
//     url: "/api/v1/guesses",
//     type: "POST",
//     data: { guess: { value: value } },
//     success: response => {
//       console.log("it worked!", response);
//     }
//   })
// }