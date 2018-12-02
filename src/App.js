import React, { Component } from "react";
import { constants, useFilters } from './containers/FIlters/reducer';
import Filters from "./containers/FIlters/components/Filters";

export default () => {
    const { state, dispatch } = useFilters();

    console.log(state);

    return (
        <div>
            <Filters state={state} dispatch={dispatch} />
        </div>
    )
}

