const initialState = {
  isLoading: false,
  isError: false,
  adressSuccess: false,
  isSuccess: false,
  alertMsg: '',
  deleted: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'CREATE_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.data.data,
      };
    }
    case 'CREATE_CART_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'GET_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,

        alertMsg: 'Login ...',
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        alertMsg: action.payload.data.message,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isError: true,

        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'DELETE_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        deleted: false,
        alertMsg: 'Login ...',
      };
    }
    case 'DELETE_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        deleted: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'DELETE_CART_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        deleted: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        adressSuccess: false,
        isError: false,
        alertMsg: '',
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        isLogin: false,
        token: '',
      };
    }
    default: {
      return state;
    }
  }
};
