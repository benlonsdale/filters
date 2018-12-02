import React, { useEffect } from "react";
import styled from 'styled-components';
import { useFilters } from "./containers/Filters/reducer";
import { useResults, constants } from "./containers/Results/reducer";
import Filters from "./containers/Filters/components/Filters";
import { index } from "./api";

export default () => {
    const { state: filters, dispatch: filterDispatch } = useFilters();
    const { state: results, dispatch: resultDispatch } = useResults();

    useEffect(
        () => {
            index(filters).then(results => {
                resultDispatch({
                    type: constants.UPDATE_RESULTS,
                    payload: results
                });
            });
        },
        [filters]
    );

    return (
        <App>
            <div id="filters">
                <Filters state={filters} dispatch={filterDispatch} />
            </div>
            <div>
                <h2>Results</h2>
                {results.hotels.map((item, index) => (
                    <Result key={index}>
                        <span>{item.name}</span>
                        <code>{JSON.stringify(item)}</code>
                    </Result>
                ))}
            </div>
        </App>
    );
};

const App = styled.div`
    display: flex;
    #filters {
        width: 200px;
    }
`

const Result = styled.div`
    span {
        display: block;
    }
    code {
        font-size: 10px;
    }
`