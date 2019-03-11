import React, { Component } from 'react';
import { RingLoader, ScaleLoader } from 'react-spinners';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='sweet-loading'>
                <ScaleLoader
                    color={'#000'}
                    loading={this.state.loading}
                />
                <h3>Loading...</h3>
            </div>
        )
    }
}

export default Spinner;