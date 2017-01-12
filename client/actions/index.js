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
];

export const getMusic = () => {
	return {
		type: 'GET_MUSIC',
		music: data
	};
}

export const onlyActiveUpdate = (onlyActive) => {
	return {
		type: 'ONLY_ACTIVE_UPDATE',
		onlyActive
	};
};

export const searchUpdate = (search) => {
	return {
		type: 'SEARCH_UPDATE',
		search
	}
}
