import React, { Component } from 'react';
import logo from './logo.svg';
import 'style-loader!./App.css';
import  AppListBox from './appListBox';
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to sdsdsReassct</h1>

        </header>
        <AppListBox data={datalist}/>
        <p className="App-intro">
          To get started, easdasdasdit <code>src/App.js</code> and save to reload.
        </p>
       {/*是*/}
         <h1 style = {myStyle}>{1 == 1 ? 'True!' : 'False'}</h1>
      </div>
    );
  }
}
let datalist=[
  {id:1,key:"have a class",finsh:true},
  {id:2,key:"have a class2",finsh:true},
  {id:3,key:"have a class3",finsh:true},
]

export default App;
