import { db } from "@/plugins/firebase"
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"

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
    },

    deleteTrader({ commit, dispatch }, trader) {
        updateDoc(doc(db, "copyTrades", trader.id), {
            isDeleted: true
        })

        return dispatch('getAllTradeList')
    }
}

export default { state, getters, mutations, actions }