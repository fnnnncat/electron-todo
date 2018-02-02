import React, {Component} from 'react';

class AppListBox extends Component{
	constructor(props) {
    super(props);
    console.log(this.props)
    this.state={
    	list:this.props.data
    }
    
   }
   addItems(newItem){
   	let itemList=this.props.data.push(newItem);
    this.setState({
    	list:this.props.data
    })
    }
   deleteItems(id){
    this.state.list.forEach((item)=>{
    	if(id==item.id){
    		item.finish="ss";
    	}
    })
   }
	render(){
      var taskList=this.state.list.map(appItem=>

       <AppItem id={appItem.id} removeItem={this.deleteItems.bind(this)} data={appItem}/>
      
       )
	return(
			
            <div>
            <div>
            {taskList}
            </div>
            <AppFooter len={this.state.list.length} addItems={this.addItems.bind(this)}/>
            </div>
			)
	}
}


class AppItem extends Component {
   constructor(props){
		super(props);
		console.log(this.props.data)
	}
	remove(){
       this.props.removeItem(this.props.id)
	}
	render() {
		return(
			<div >
			<p id={this.props.id}  ><input type="checkbox"/> <a onClick={this.remove.bind(this)}>删除{this.props.finish}</a>{this.props.data.key}</p>
             </div>
			);
	}

}
class AppFooter extends Component{
	constructor(props){
		super(props);
		console.log(this.props)
		this.state = {date: new Date()};
	}
	componentDidMount(){
      this.timerID = setInterval(
      () => this.tick(),
      1000
    );
	}
	tick() {
    this.setState({
      date: new Date()
    });
    }
    addItem(){
    	let len=this.props.len;
    	let value=this.refs.mytext.value;
    	let item={
    		id:len,
    		key:value,
    		finish:true,
    	}
    	this.refs.mytext.value="";
    	this.props.addItems(item);
      
    }
	componentWillUnmount(){
      clearInterval(this.timerID);
	}
	render(){
		return(
		<div>
		{this.state.date.toLocaleTimeString()}
          <div><input  ref="mytext"/></div>
          <input id="submit" type="button" onClick={this.addItem.bind(this)}/>
          </div>
			)
	}
}




export default AppListBox;
