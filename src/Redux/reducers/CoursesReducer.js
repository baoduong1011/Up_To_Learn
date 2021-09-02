const stateDefault = {
    maKhoaHoc:"",
}

const CoursesReducer = (state = stateDefault , action ) => {
    switch(action.type) {
        case 'MA_KHOA_HOC': {

            state.maKhoaHoc = action.data;
            return {...state}

        }

        default: return {...state}
    }

}

export default CoursesReducer;