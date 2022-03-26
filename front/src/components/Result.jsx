
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import "../styles/Result.css"

const Result = ({codigos}) => {
    return (
        <div>
            <ul className='lista'>
                {codigos.map((item)=> {
                   return(
                       <li key={uuid()}>
                           <p>{item}</p>
                       </li>
                   ) 
                })}
            </ul>
        </div>
    );
};


const mapStateToProps = (state) => {
    var lista = [];
    if(state.codigos.codigo) {
        lista = state.codigos.codigo.split(",")
    }
    return {
    codigos: lista
    }
}

export default connect(mapStateToProps)(Result);