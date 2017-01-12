import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		const { onSearch, onOnlyActive } = this.props;

		return (
			<form>
				<input type="search" placeholder="Search..." onChange={onSearch} />
				<label>
						<input type="checkbox" onChange={onOnlyActive}/>
						Only show active artists
				</label>
			</form>
		);
	}
};

export default SearchBar;
