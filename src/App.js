import React, { useEffect } from "react";
import { useFilters } from "./containers/Filters/reducer";
import { useResults, constants } from "./containers/Results/reducer";
import Filters from "./containers/Filters/components/Filters";
import { index } from './api';

export default () => {
    const { state: filters, dispatch: filterDispatch } = useFilters();
    const { state: results, dispatch: resultDispatch } = useResults();
    
    useEffect(() => {
        index(filters)
            .then(results => {
                resultDispatch({
                    type: constants.UPDATE_RESULTS,
                    payload: results
                })
            });
    }, [filters]);

    return (
        <div>
            <Filters state={filters} dispatch={filterDispatch} />
            {results.hotels.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    );
};
