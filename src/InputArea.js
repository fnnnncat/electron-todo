import React,{Component} from 'react';
import 'style-loader!./InputArea.css';
class InputArea extends Component{
    render(){
        return (
        <div className="input-area">
          <textarea className="input-textarea">
          </textarea>
          <button className="input-btn">
           Todo
          </button>
        </div>
        );
    }
}
export default InputArea;