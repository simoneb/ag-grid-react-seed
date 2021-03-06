'use strict';

import React from "react";
import 'ag-grid-enterprise';
import {render} from "react-dom";
import 'react-select/dist/react-select.css';
import './styles.scss'

// pull in the ag-grid styles we're interested in
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";

// only necessary if you're using ag-Grid-Enterprise features
// import "ag-grid-enterprise";

// our application
import SimpleGridExample from "./SimpleGridExample";

document.addEventListener('DOMContentLoaded', () => {
    render(
        <SimpleGridExample/>,
        document.querySelector('#app')
    );
});

