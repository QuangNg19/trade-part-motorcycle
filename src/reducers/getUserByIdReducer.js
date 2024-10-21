const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const getUserByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_USER_SUCCESS':
        return { ...state, loading: false, user: action.payload };
      case 'FETCH_USER_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default getUserByIdReducer;