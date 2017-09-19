import React, {Component} from 'react'
import Select from 'react-select'

export default class ReactSelectEditor extends Component {
    constructor (props) {
        super(props)

        this.state = {
            value: props.value
        }
    }

    onChange = ({value}) => {
        console.log("Selected: " + JSON.stringify(value));
        this.setState({value})
    }


    render() {
        const {options} = this.props
        const {value} = this.state

        return <Select
            name="form-field-name"
            value={value}
            options={options}
            onChange={this.onChange}
        />
    }

    isPopup() {
        return true
    }

    getValue() {
        return this.state.value
    }
}