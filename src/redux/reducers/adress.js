const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  adressSuccess: false,
  isSuccess: false,
  alertMsg: '',
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'GET_ADRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.data.data,
      };
    }
    case 'GET_ADRESS_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CREATE_ADRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        adressSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'CREATE_ADRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        adressSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'CREATE_ADRESS_REJECTED': {
      return {
        ...state,
        isError: true,
        adressSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'CHANGE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: 'Login ...',
      };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
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
