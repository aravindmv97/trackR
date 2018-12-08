import { initialstate } from '../Store/InitialStateStore';

export default function reducer(state = initialstate, action) {

    switch (action.type) {
        case 'HANDLE_DRAWER':
            state = {
                ...state,
                drawerIsOpen: !state.drawerIsOpen
            }
            break;
        case 'SNACKBAR_OPEN':
            state = {
                ...state,
                snackbarIsOpen: true
            }
            break;
        case 'SNACKBAR_CLOSE':
            state = {
                ...state,
                snackbarIsOpen: false
            }
            break;
        case 'HIGHLIGHT_MARKER':
            state = {
                ...state,
                map_marker: [...action.payload]
            }
            break;
        case 'UNHIGHLIGHT_MARKER':
            state = {
                ...state,
                map_marker: [...initialstate.vehicle_data]
            }
            break;
        default:
            break;
    }
    return state;
}
