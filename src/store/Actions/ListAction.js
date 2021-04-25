// export const fetchingTo = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch('https://reqres.in/api/users');
//       const data = await res.json();
//       dispatch({ type: FETCH_DATA, payload: data.data });
//     } catch (error) {
//       alert(error);
//     }
//   };
// };

import {ADD_LIST} from "../types";

export  function addList(title) {
    return{
        type:ADD_LIST,
        payload:title
    }
}