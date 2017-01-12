import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import FilterableTable from './components/FilterableTable';
import './styles/style.css';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<FilterableTable />
	</Provider>,
	document.getElementById('app')
);
