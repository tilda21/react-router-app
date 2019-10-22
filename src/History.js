import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class History extends Component {
    render() {
        return (
            <div className='App'>
                <h1 className='App-header'>Our Story</h1>
                <div className='App-link'>
                    <Link to="/"> Back to homepage </Link>
                    {this.props.match.params.productNumber}
                </div>
              

            </div>
        );
    }
}

export default History;