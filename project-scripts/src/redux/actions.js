
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

export const setTitleTypeClothes = (title) => ({
    type: SET_TITLE_CLOTHES_TYPE,
    payload: title,
})

export const setCurrentGroupCloth = ({cloths, CElements, step}) => ({
    type: SET_CURRENT_GROUP_CLOTH,
    payload: {cloths, CElements, step},
})

export const setCloth = ({key, data}) => ({
    type: SET_CLOTH,
    payload: {key, data},
})

export const setCElement = ({key, data}) => ({
    type: SET_CELEMENT,
    payload: {key, data},
})

export const setFewCElements = ({id, data, title}) => ({
    type: SET_FEW_CELEMENTS,
    payload: {id, data, title},
})

export const setCurrentCElements = (currentCElements) => ({
    type: SET_CURRENT_CELEMENTS,
    payload: currentCElements,
});

export const setTableClothes = (table) => ({
    type: SET_TABLE_CLOTHES,
    payload: table,
}); 

export const setInitData = () => ({
    type: SET_INIT_DATA,
}); 
