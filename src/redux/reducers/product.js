const initialState = {
  isLoading: false,
  isError: false,
  adressSuccess: false,
  isSuccess: false,
  alertMsg: '',
  loadData: false,
  newProduct: [],
  popularProduct: [],
  cataog: [],
  pageInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'NEW_PRODUCT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        newProduct: action.payload.data.data,
      };
    }
    case 'NEW_PRODUCT_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'GET_CATALOG_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: '',
      };
    }
    case 'GET_CATALOG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        catalog: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_CATALOG_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'POPULAR_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Login ...',
      };
    }
    case 'POPULAR_PRODUCT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        popularProduct: action.payload.data.data,
        alertMsg: action.payload.data.message,
      };
    }
    case 'POPULAR_PRODUCT_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: action.payload.response.data.message,
      };
    }

    case 'LOAD_DATA_PENDING': {
      return {
        ...state,
        isError: false,
        loadData: true,
        alertMsg: '',
      };
    }
    case 'LOAD_DATA_FULFILLED': {
      return {
        ...state,
        isError: false,
        loadData: false,
        catalog: [...state.catalog, ...action.payload.data.data],
        pageInfo: {...action.payload.data.pageInfo},
        alertMsg: action.payload.data.message,
      };
    }
    case 'LOAD_DATA_REJECTED': {
      return {
        ...state,
        isError: true,
        loadData: false,
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
