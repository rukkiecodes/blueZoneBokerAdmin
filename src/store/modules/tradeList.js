import { db } from "@/plugins/firebase"
import { collection, getDocs } from "firebase/firestore"

const state = {
    allTradeList: []
}

const getters = {
    allTradeList: state => state.allTradeList
}

const mutations = {
    setTradeList(state, payload) {
        state.allTradeList.push(payload)
    }
}

const actions = {
    getAllTradeList({ commit }) {
        getDocs(collection(db, "copyTrades")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                commit('setTradeList', {
                    id: doc.id,
                    ...doc.data()
                })
            })
        })
    }
}

export default { state, getters, mutations, actions }