import React, { Component } from 'react';

import BandRow from './BandRow';

class MusicCategoryRow extends Component {
	render() {
		const { musicCat } = this.props;
		return (
			<div>
				<h3>{musicCat.items.length ? musicCat.category : ''}</h3>
				<ul>
					{musicCat.items.map((artist, i) =>
						<BandRow key={i} artist={artist} />
					)}
				</ul>
			</div>
		);
	}
}

export default MusicCategoryRow;
