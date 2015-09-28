var React = require('react');

module.exports = React.createClass({
	render: function(){
		return <button type="button" className={"btn " + this.props.className} onClick={this.props.clickFunc}>{this.props.title}
		    <span className={this.props.subtitleClassName}></span>
		</button> 
	}
});