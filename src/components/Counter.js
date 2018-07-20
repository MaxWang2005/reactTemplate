import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2>My Counter example with Redux</h2>
                <p>Counter: {this.props.count}</p>
                <button onClick={this.props.onInCreasementClick}>++</button>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    console.log(state);
    return {
        count: state.counter.count
    }
};

export function mapDispatchToProps(dispatch) {
    return {
        onInCreasementClick: () => {
            console.log('clickedin');
            const action = { type: 'INCREMENT'};
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);