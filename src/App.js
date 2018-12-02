import React, { Component } from "react";
import { constants, useFilters } from './containers/Filters/reducer';
import Filters from "./containers/Filters/components/Filters";

export default () => {
    const { state, dispatch } = useFilters();

    console.log(state);

    return (
        <div>
            <Filters state={state} dispatch={dispatch} />
        </div>
    )
}

