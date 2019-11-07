import React, { Component } from 'react';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import List from './component/List';
import Write from './component/Write';
import './style.scss';

class Home extends Component {
    render() {
        return (
            <div className="homeWraper">
                <div className="homeLeft">
                    <Topic />
                    <List />

                </div>
                <div className="homeRight">
                    homeRight
                    <Recommend />
                    <Write />
                </div>
            </div>)
    }
}

export default Home;