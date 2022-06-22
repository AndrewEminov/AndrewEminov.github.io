import { 
    SET_TITLE_CLOTHES_TYPE, 
    SET_CURRENT_GROUP_CLOTH,
    SET_CLOTH, 
    SET_CELEMENT,
    SET_FEW_CELEMENTS,
    SET_CURRENT_CELEMENTS,
    SET_TABLE_CLOTHES,
    SET_INIT_DATA
} from './actionTypes'

const initValue = {
    title: '',
    table: {
      nameGroup: [],
      complicatingElements: [],
      data: {},
      dataCElements: {}
    },
    currentGoup: {
        cloths: [],
        CElements: [],
    },
    cloth: { key: null, data: {} },
    CElement: { key: null, data: {} },
    step: null,
    CElementList: [],
    CElementsTitle: '',
    currentCElements: [],
    CElementsId: null,
}

export default (state = initValue, action) => {
    switch (action.type) {
      case SET_INIT_DATA:
        return {...state, ...initValue};
      case SET_TABLE_CLOTHES: 
        return {...state, table: action.payload};
      case SET_TITLE_CLOTHES_TYPE:
        return {...state, title: action.payload};
      case SET_CURRENT_GROUP_CLOTH:
        return {...state, ...action.payload};
      case SET_CELEMENT:
        return {...state, CElement: action.payload};
      case SET_CLOTH:
        return {...state, cloth: action.payload};
      case SET_FEW_CELEMENTS:
        return {
            ...state,
            CElementsId: action.payload.id,
            CElementList: action.payload.data, 
            CElementsTitle: action.payload.title
        };
      case SET_CURRENT_CELEMENTS:
        return {...state, currentCElements: action.payload};
      default:
        return state
    }
}
