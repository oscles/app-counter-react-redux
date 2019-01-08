import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1}
                })
                break;
            case 'dec':
                this.setState((prevState) => {
                    return {counter: prevState.counter - 1}
                })
                break;
            case 'add':
                this.setState((prevState) => {
                    return {counter: prevState.counter + value}
                })
                break;
            case 'sub':
                this.setState((prevState) => {
                    return {counter: prevState.counter - value}
                })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}/>
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}/>
                <CounterControl
                    label="Add 5"
                    clicked={this.props.onAddCounter}/>
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSubstractCounter}/>
                <hr/>
                <CounterControl
                    label="Store Result"
                    clicked={this.props.onStoreResult}/>
                <ul>
                    { this.props.results.map(item =>
                        <li
                            key={item.id}
                            onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubstractCounter: () => dispatch({type: actionTypes.SUBSTRACT, value: 5}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, selectedElement: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);