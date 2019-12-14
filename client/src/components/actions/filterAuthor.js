export let updateFilter = author => {
	return {
		type: 'FILTERAUTHOR',
		payload: author,
	};
};
