import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topic extends Component {

    render() {
        return (
            <div className="topicWraper">
                <span className="topicItem">
                    <img src="" />
                    社会热点
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.topicList
    }
}

export default connect(mapStateToProps)(Topic);