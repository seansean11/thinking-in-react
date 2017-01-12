import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MusicCategoryRow from './MusicCategoryRow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import { filterOnlyActive, filterSearch } from '../reducers';

class FilterableTable extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
		this.onOnlyActive = this.onOnlyActive.bind(this);
	}

	componentDidMount() {
		this.props.actions.getMusic();
		console.log(this.props);
	}

	filterSearch(music) {
		return music.map((musicCat) => {
			const { category, items } = musicCat;

			return {
				category,
				items: items.filter(artist =>
					artist.name.indexOf(this.props.search) > -1)
			};
		});
	}

	filterOnlyActive(music) {
		if (!this.props.onlyActive) return music;

		return music.map((musicCat) => {
			const { category, items } = musicCat;

			return {
				category,
				items: items.filter(artist => artist.active)
			};
		});
	}

	onSearch(e) {
		this.props.actions.searchUpdate(e.target.value);
	}

	onOnlyActive(e) {
		this.props.actions.onlyActiveUpdate(e.target.checked);
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

const mapStateToProps = (state) => {
	const { music, onlyActive, search } = state;
	return {
		music,
		onlyActive,
		search
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterableTable);
