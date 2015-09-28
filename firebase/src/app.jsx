var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://radiant-torch-5552.firebaseio.com/';

var App = React.createClass({
	mixins: [ReactFire],
	componentWillMount: function(){
		this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');	//firebase API와 this.state.items를 bind --> API data가 update되면 아래 render function도 다시 호출
	},
	render: function() {
		console.log(this.state);
		return <h1 >
			Hello, React!
			< /h1>
	}
});


var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));