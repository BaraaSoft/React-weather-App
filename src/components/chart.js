import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../containers/style/chart.css'





export default class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayType: 'label-hidden'
        }
    }

    calculateAverage() {
        return this.props.data.reduce((accum, currentValue) => {
            return accum + currentValue
        }) / this.props.data.length;
    }
    onMouseOver() {
        this.setState({ displayType: 'label-visible' })
    }

    onMouseOut() {
        this.setState({ displayType: 'label-hidden' })
    }

    render() {
        return (
            <td className='table-col'
                onMouseOut={this.onMouseOut.bind(this)}
                onMouseOver={this.onMouseOver.bind(this)}>
                <div className={`circle-shape ${this.state.displayType}`}>
                    {Math.round(this.calculateAverage()) + this.props.unit}
                </div>
                <div className={this.state.displayType}>
                </div>
                <Sparklines width={180} height={120} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                </Sparklines>
            </td >
        );
    }
}
