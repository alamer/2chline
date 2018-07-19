    // src/js/reducers/index.js
    import {ADD_IMAGES,REMOVE_IMAGE, REMOVE_THREAD, START_FETCHING, END_FETCHING} from '../constants/action-types'
    
        const initialState = {
            images: [ ],
            isFetching: false
          };
          const rootReducer = (state = initialState, action) => {
            switch (action.type) {
                case ADD_IMAGES:
                    return { ...state, images: [...state.images, ...action.payload] };
                    case REMOVE_IMAGE:
                    return {
                        ...state,
                        images: state.images.filter(item => item.image_url !== action.payload)
                      };
                      case REMOVE_THREAD:
                      return {
                          ...state,
                          images: state.images.filter(item => item.thread !== action.payload)
                        };      
                        case START_FETCHING:         
                        return {
                            ...state,
                            isFetching: true
                          };
                          case END_FETCHING:         
                          return {
                              ...state,
                              isFetching: false
                            };                          
                default:
                  return state;
            }
          };
          export default rootReducer;