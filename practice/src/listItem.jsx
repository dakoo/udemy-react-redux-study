var React = require('react');

module.exports = React.createClass({
	btnClickFunc: function(){
		this.props.clickFunc(this.props.item);	
	},
	render: function(){
		return <li className={this.props.className}><a href="#" onClick={this.btnClickFunc}>{this.props.item}</a></li>
	}	
});
