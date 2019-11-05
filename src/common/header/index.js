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
        const {
            focused,
            list,
            page,
            totalPage,
            mouseIn,
            handleMouseLeave,
            handleMouseEnter,
            handleChangePage
        } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length) {
            let showList = jsList.slice((page - 1) * 10, page * 10 - 1);
            showList.forEach((item, index) => {
                pageList.push(
                    <li key={item + "_" + index}>
                        <a className="searchInfo-item">{item}</a>
                    </li>
                )
            })

        }



        if (focused || mouseIn) {
            return (
                <div className="searchInfo"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                >
                    <span className="searchInfo-title">热门搜索</span>
                    <span className="searchInfo-switch"
                        onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}
                    ><i ref={(icon) => { this.spinIcon = icon }}
                        className="iconfont iconshuaxin serchInfo_refresh" /> 换一批</span>
                    <div className="searchInfo-list">
                        <ul>
                            {pageList}
                        </ul>
                    </div>
                </div>
            )
        } else {

            return null;
        }
    }
    render() {
        const {
            focused,
            list,
            handleInputBlur,
            handleInputFocus
        } = this.props;
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
                            in={focused}
                            timeout={600}
                            classNames="slide"
                        >
                            <input

                                onBlur={handleInputBlur}
                                onFocus={() => { handleInputFocus(list) }}
                                className={focused ? "navSearch focused" : "navSearch"}
                                placeholder="搜索">
                            </input>
                        </CSSTransition>
                        <i
                            className={focused ? "iconfont iconMagnifier focused" : "iconfont iconMagnifier"}
                        ></i>
                        {this.getListArea(focused)}
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', "page"]),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocus: function (list) {

            console.log('list', list);
            if (list.size == 0) {
                dispatch(actionCreates.getList());
            }
            const action = actionCreates.searchFocus();
            dispatch(action)
        },
        handleInputBlur: function () {
            const action = actionCreates.searchBlur();
            dispatch(action)
        },
        handleMouseEnter: function () {
            const action = actionCreates.mouseEnter();
            dispatch(action)
        },
        handleMouseLeave: function () {
            const action = actionCreates.mouseLeave();
            dispatch(action);
        },
        handleChangePage: function (page, totalPage, spinIcon) {
            let originAngel = spinIcon.style.transform.replace(/[^0-9]/ig, "");
            if (originAngel) {
                originAngel = parseInt(originAngel, 10);
            } else {
                originAngel = 0;
            }
            spinIcon.style.transform = "rotate(" + (originAngel + 360) + "deg)";
            if (page < totalPage - 1) {
                dispatch(actionCreates.changePage(page + 1));
            } else {
                dispatch(actionCreates.changePage(0));
            }

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
