export const CONFIG = "CONFIG";
export const SubmitConfiguration = (data) => {

    return (dispatch) => {
        dispatch({
            type: CONFIG,
            data: data,
        })
    }
}
