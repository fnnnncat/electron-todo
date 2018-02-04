import React,{Component} from "react";
import 'style-loader!./Header.css';
class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="header-tit">
                  清单
                </div>
                <div className="header-type">
                  未完成
                </div>
                <div>
                  我的
                </div>
            </div>
        )
    }
}

export default Header;