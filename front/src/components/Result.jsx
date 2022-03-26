
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'react-uuid';

const Result = ({codigos}) => {
    return (
        <div>
            <ul>
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
        console.log(lista)
    }
    return {
    codigos: lista
    }
}

export default connect(mapStateToProps)(Result);