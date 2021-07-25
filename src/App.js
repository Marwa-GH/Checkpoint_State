import React from 'react'
import './App.css';

class App extends React.Component {
  
  state = {
    Person: {
      fullName: "Marwa Ghazouani",
      bio: "LAIAG",
      imgSrc: "./picture.jpg",
      profession: "etudiante"
    },
    show: true,
    date: new Date()
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <div className="Marwa">
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="picture"/>
            <h1>{this.state.Person.profession}</h1>
            </div>
          </>
        )}
          <div className="ghazouani">
        <button onClick={this.handleShowPerson}>click here</button>
        </div>
      </>
    );
  }
}


export default App;