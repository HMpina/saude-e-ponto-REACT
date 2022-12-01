import React from 'react';
import useAxios from 'axios-hooks';

export function useFood(searchValue) {
    const [{ data: food, loading: isLoadingFood }, searchFood] = useAxios(
        `search?query=${searchValue}&requireAllWords=true&numberOfResultsPerPage=1&pageSize=1&api_key=kxd1dCxDe2hM7vnralysUOalzijPSQxZnTLfvFHS`,
        { manual: true }
	);

	React.useEffect(() => {
		searchFood();
	}, []);

	return { food, isLoadingFood, searchFood };
}