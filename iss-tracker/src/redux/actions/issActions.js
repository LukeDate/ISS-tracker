import fetch from 'cross-fetch';


export const GET_ISS_COORDS = 'GET_ISS_COORDS';
function getCoords(data){
    return {
        type: GET_ISS_COORDS,
        data
    }
}

export function getServerData() {
    return function(dispatch) {
        return fetch('http://localhost:9000/data').then(res => res.json()).then(json => dispatch(getCoords(json))).catch(err => console.log(err));
    }
}

