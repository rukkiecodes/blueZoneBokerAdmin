import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "@/plugins/firebase"

const state = {
    allWithdrawRequests: []
}

const getters = {
    allWithdrawRequests: state => state.allWithdrawRequests
}

const mutations = {
    setWithdrawRequests(state, withdrawRequest) {
        state.allWithdrawRequests.push(withdrawRequest)
    }
}

const actions = {
    getWithdrawRequests({ commit }) {
        const unsub = onSnapshot(collection(db, 'users'),
            snapshot => {

                snapshot.forEach(async doc => {
                    let withdrawRequests = await getDocs(collection(db, 'users', doc.id, 'withdraws'))

                    this.state.withdrawRequests.allWithdrawRequests = []
                    withdrawRequests.forEach(doc => {
                        commit('setWithdrawRequests', {
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                })
            })
        return unsub
    }
}

export default { state, getters, mutations, actions }