const stateDefault = {
    maDanhMuc:"",
    tenDanhMuc:""
}

const CategoryReducer = (state = stateDefault , action ) => {
    switch(action.type) {
        case 'MA_DANH_MUC' : {
            state.maDanhMuc = action.maDanhMuc;
            state.tenDanhMuc = action.tenDanhMuc
            return {...state}
        }
        default: return {...state}
    }
}

export default CategoryReducer;