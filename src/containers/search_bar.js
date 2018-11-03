import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './style/search_bar.css'
import fetchWeather from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            term: ""
        }
    }
    onChange(e) {
        this.setState({ term: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
    }
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onSubmit}>
                    <input type="search" className="input-search" value={this.state.term}
                        onChange={this.onChange.bind(this)}
                        placeholder="search city" />
                    <button type="submit" className="btn btn-full">Search</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)