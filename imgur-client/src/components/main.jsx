var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

var main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				{this.content()}
			</div>
		);
	},
	content: function(){
		if(this.props.children)	{	// In case of URL form like api.imgur.com/#/1  --> details of topic 1
			return this.props.children;
		}else { 					//In case of URL form like api.imgur.com/#/  --> topic list
			return <TopicList />
		}
	} 
});

module.exports = main;