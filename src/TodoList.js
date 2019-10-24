import React, { Component } from 'react';
import { connect } from "react-redux";


const TodoList=(props)=>{
    console.log(props);
    const {inputValue,list,handleClick,changeInputValue,deleteItem}=props;
    return (
        <div>
            <div>
                <input type="text" value={inputValue} 
                onChange={changeInputValue}/>
                <button  onClick={handleClick}>提交</button>
                <ul>
                    {list.map((item,index)=>{
                        return <li key={index} onClick={deleteItem}>{item}</li>
                    })}
                    
                </ul>
            </div>
        </div>)
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        inputValue: state.inputValue,
        list:state.list,
    }
}

//store.dispath
const mapDispathToProps=(dispath)=>{
    return {
        changeInputValue(e){
            const action={
                type:'change_input_value',
                value:e.target.value
            }
            console.log(e,e.target.value);
            dispath(action);
        },
        handleClick(){
            const action={
                type:'add_item',
            }
            dispath(action);
        },
        deleteItem(index){
            const action={
                type:'delete_item',
                index:index
            }
            dispath(action);
        }
    }

}
export default connect(mapStateToProps, mapDispathToProps)(TodoList);