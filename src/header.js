import React,{Component} from "react";
import 'style-loader!./Header.css';
class Header extends Component {
    render(){
        return (
            <header className="header">
                <div className="header-tit">
                  TODO
                </div>
                <div className="header-type">
                <span></span>
                 <span> 全部</span>
                </div>
                <div className="header-type">
                <span></span>
                 <span> 未完成</span>
                </div>
                <div className="header-type">
                <span></span>
                 <span> 已完成</span>
                </div>
                <div className="header-user">
                </div>
            </header>
        )
    }
}

export default Header;