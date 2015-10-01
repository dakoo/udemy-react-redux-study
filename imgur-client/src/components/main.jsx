var React = require('react');
var Header = require('./header');

var main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
					{this.props.children}
			</div>
		);
	}

});

module.exports = main;