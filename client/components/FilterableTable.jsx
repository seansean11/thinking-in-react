import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MusicCategoryRow from './MusicCategoryRow';

class FilterableTable extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
		this.onOnlyActive = this.onOnlyActive.bind(this);
		this.state = {
			search: '',
			onlyActive: false
		};
	}

	onSearch(e) {
		this.setState({
			search: e.target.value
		});
	}

	onOnlyActive(e) {
		this.setState({
			onlyActive: e.target.checked
		});
	}

	filterSearch(music) {
		return music.map((musicCat) => {
			const { category, items } = musicCat;

			return {
				category,
				items: items.filter(artist =>
					artist.name.indexOf(this.state.search) > -1)
			};
		});
	}

	filterOnlyActive(music) {
		if (!this.state.onlyActive) return music;

		return music.map((musicCat) => {
			const { category, items } = musicCat;

			return {
				category,
				items: items.filter(artist => artist.active)
			};
		});
	}

	render() {
		const { music } = this.props;
		const filteredMusic = this.filterSearch(this.filterOnlyActive(music));

		return (
			<div>
				<SearchBar
					onSearch={this.onSearch}
					onOnlyActive={this.onOnlyActive}
				/>
				{filteredMusic.map((musicCat, i) =>
					<MusicCategoryRow key={i} musicCat={musicCat} />
				)}
			</div>
		);
	}
};

export default FilterableTable;
