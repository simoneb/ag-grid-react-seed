import React, {Component} from 'react'
import {AgGridReact} from 'ag-grid-react'
import ReactSelectEditor from './ReactSelectEditor'

export default class extends Component {
    constructor (props) {
        super(props)

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        }
    }

    onGridReady (params) {
        this.gridApi = params.api
        this.columnApi = params.columnApi

        this.gridApi.sizeColumnsToFit()
    }

    createColumnDefs () {
        return [
            {headerName: 'Make', field: 'make'},
            {
                headerName: 'Model',
                field: 'model',
                editable: true,
                cellEditorFramework: ReactSelectEditor,
                cellEditorParams: {
                    options: this.createRowData().map(({model}) => ({label: model, value: model}))
                }
            },
            {headerName: 'Price', field: 'price'}
        ]
    }

    createRowData () {
        return [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ]
    }

    render () {
        let containerStyle = {
            height: 115,
            width: 500
        }

        return (
            <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
