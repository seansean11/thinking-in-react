import React, { Component } from 'react';

class BandRow extends Component {
	render() {
		return <li>{this.props.artist.name}</li>;
	}
}

export default BandRow;
