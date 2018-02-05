import React, { Component } from 'react';
import logo from './logo.svg';
import 'style-loader!./App.css';
import AppListBox from './appListBox';
import Header from './Header';
import InputArea from './InputArea';
var myStyle = {
  fontSize: 100,
  color: '#FF0000'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log(this.state);
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <h1 className="todo-time">{this.state.date.toLocaleTimeString()}
          </h1>
        </div>
        <InputArea />
        <AppListBox data={datalist} />
        <p className="App-intro">

        </p>
        {/*是*/}
        <h1 style={myStyle}>{1 == 2 ? 'True!' : 'False'}</h1>
      </div>
    );
  }
}
let datalist = [
  { id: 1, key: "have a class", finsh: true },
  { id: 2, key: "have a class2", finsh: true },
  { id: 3, key: "have a class3", finsh: true },
]

export default App;
