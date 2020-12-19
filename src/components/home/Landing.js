import React, { Component } from 'react';

import { connect } from "react-redux";
import Spinner from '../layout/Spinner';

import Searchform from "./Searchform";
import MoviesContainer from "./MoviesContainer.js";
export class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
                <Searchform/>
                {loading ? <Spinner/> : <MoviesContainer/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStateToProps)(Landing);
