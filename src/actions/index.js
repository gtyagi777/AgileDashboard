import jsonPlaceholder from "../apis/jsonPlaceholder";
//Action Creator
export const fetchuser = (id) =>  async dispatch => {
    
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };

  