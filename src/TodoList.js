import React, { Component } from 'react';
import { connect } from "react-redux";
import store from './store';

class TodoList extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.props.inputValue} />
                    <button>提交</button>
                    <ul>
                        <li>dell </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        input: state.inputValue,
    }

}
export default connect(mapStateToProps, null)(TodoList);