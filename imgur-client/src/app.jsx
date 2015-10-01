var React = require('react');
var Routes = require('./routes');
var Api = require('./utils/api');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
    	{this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
	render: function() {
		return (
			<h1> I am child1. 
    	{this.props.children}
    	</h1>
		);
	}
});

var Child2 = React.createClass({
	render: function() {
		return (
			<h1> I am the other child, child2. </h1>
		);
	}
});

//module.exports = Hello;
// var element = React.createElement(Hello, {});
React.render(Routes, document.querySelector('.container'));
