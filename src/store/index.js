import {
    createStore
} from 'vuex'

// MODULES
import login from './modules/login'
import snackbar from './modules/snackbar'
import getProfile from './modules/getProfile'
import drawer from './modules/drawer'
import addCopy from './modules/addCopy'

export default createStore({
    strict: false,
    modules: {
        login,
        snackbar,
        getProfile,
        drawer,
        addCopy
    },
})