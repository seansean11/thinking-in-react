import React, { Component } from 'react';
import { render } from 'react-dom';
import FilterableTable from './components/FilterableTable';
import './styles/style.css';

const data = [
	{
		category: 'Rock',
		items: [
			{ name: 'Sublime', active: false },
			{ name: 'Nirvana', active: false },
			{ name: 'Pearl Jam', active: true }
		]
	},
	{
		category: 'Hip-Hop',
		items: [
			{ name: 'Jay-Z', active: false },
			{ name: 'Digable Planets', active: false },
			{ name: 'A Tribe Called Quest', active: true }
		]
	},
	{
		category: 'Jazz',
		items: [
			{ name: 'John Scofield', active: true },
			{ name: 'MMW', active: true },
			{ name: 'Herbie Hancock', active: false }
		]
	}
]

render(
	<FilterableTable music={data} />,
	document.getElementById('app')
);
