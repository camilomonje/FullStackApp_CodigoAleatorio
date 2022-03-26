
const initialState = {
    codigos: null,
    cargando: false
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OBTENER_CODIGOS" :
            return {...state, cargando: true};

        case "OBTENER_CODIGOS_EXITOSAMENTE" :
            return {...state,codigos: action.payload, cargando: false}
    }
}

export default reducer;