var React = require('react');
var Button = require('./button');
var ListItem = require('./listItem');

module.exports = React.createClass({
	getInitialState : function(){
		return {open:false}	
	},
	clickFunction : function(){
		this.setState({ open: !this.state.open});
	},
	itemClickFunction: function(item){
		this.setState({
			open: this.state.open,
			btnTitle: item,  
		});
	},
	render: function(){
		var list=this.props.items.map(function(item){
			return <ListItem item={item} clickFunc={this.itemClickFunction} className={this.state.btnTitle === item? "active": ""}/>
		}.bind(this)); 
		return <div className="dropdown">
		<Button title={this.state.btnTitle?this.state.btnTitle:this.props.title} subtitleClassName="caret" className="btn-default" clickFunc={this.clickFunction}/>
		<ul	className={"dropdown-menu " + (this.state.open ? "show" : "")}>{list}</ul>
		</div>
	}
});
