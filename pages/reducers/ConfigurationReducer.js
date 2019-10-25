import { CONFIG } from "../Actions/ConfigurationAction"
const INITIAL_STATE = {
    WA_config:[]
}
const SubmitConfig = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CONFIG:
            {
                return Object.assign({}, state, { boards: action.data })
            }
        default:
            return state;
    }
}
export default SubmitConfig