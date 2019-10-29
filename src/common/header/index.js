import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import './style.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
        return (
            <div className="headerWrapper">
                <a className="logo" href='/'></a>
                <div className="nav">
                    <span className="left active">首页</span>
                    <span className="left">下载APP</span>
                    <span className="right">登录</span>
                    <span className="right" > <i className="iconfont iconAa"></i></span>

                    <div className="searchwrapper">
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <input
                                onBlur={this.handleInputBlur}
                                onFocus={this.handleInputFocus}
                                className={this.state.focused ? "navSearch focused" : "navSearch"}
                                placeholder="搜索">
                            </input>
                            <i
                                className={this.state.focused ? "iconfont iconMagnifier focused" : "iconfont iconMagnifier"}
                            ></i>
                        </CSSTransition>
                    </div>

                    <div className="addition">
                        <button className="button writting">
                            <i className="iconfont iconiconset0137"></i>写文章
                            </button>
                        <button className="button reg">注册</button>
                    </div>

                </div>
            </div>
        )
    }
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

}

export default Header;