import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { actionCreates } from './store';
import './style.scss';




class Header extends Component {
    constructor(props) {
        super(props);
    }
    getListArea() {
        if (this.props.focused) {
            return (
                <div className="searchInfo">
                    <span className="searchInfo-title">热门搜索</span>
                    <span className="searchInfo-switch">换一批</span>
                    <div className="searchInfo-list">
                        <ul>
                            {
                                this.props.list.map((item) => {
                                    return <li key={item}>
                                        <a className="searchInfo-item">{item}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        } else {

            return null;
        }
    }
    render() {
        console.log('this.props', this.props);

        return (
            <div className="headerWrapper" >
                <a className="logo" href='/'></a>
                <div className="nav">

                    <span className="left active">首页</span>
                    <span className="left">下载APP</span>
                    <span className="right">登录</span>
                    <span className="right" > <i className="iconfont iconAa"></i></span>

                    <div className="searchwrapper">
                        <CSSTransition
                            in={this.props.focused}
                            timeout={600}
                            classNames="slide"
                        >
                            <input
                                onBlur={this.props.handleInputBlur}
                                onFocus={this.props.handleInputFocus}
                                className={this.props.focused ? "navSearch focused" : "navSearch"}
                                placeholder="搜索">
                            </input>
                        </CSSTransition>
                        <i
                            className={this.props.focused ? "iconfont iconMagnifier focused" : "iconfont iconMagnifier"}
                        ></i>
                        {this.getListArea(this.props.focused)}
                    </div>

                    <div className="addition">
                        <button className="button writting">
                            <i className="iconfont iconiconset0137"></i>写文章
                            </button>
                        <button className="button reg">注册</button>
                    </div>

                </div>
            </div >)
    }

}




const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocus: function () {

            dispatch(actionCreates.getList());
            const action = actionCreates.searchFocus();
            dispatch(action)
        },
        handleInputBlur: function () {
            const action = actionCreates.searchBlur();
            dispatch(action)
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
