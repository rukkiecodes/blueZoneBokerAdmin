import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "@/plugins/firebase"

const state = {
    allTransactions: []
}

const getters = {
    allTransactions: state => state.allTransactions
}

const mutations = {
    setAllTransactions(state, withdrawRequest) {
        state.allTransactions.push(withdrawRequest)
    }
}

const actions = {
    getAllTransactions({ commit }) {
        const unsub = onSnapshot(collection(db, 'users'),
            snapshot => {
                snapshot.forEach(async doc => {
                    let withdrawRequests = await getDocs(collection(db, 'users', doc.id, 'transactions'))

                    this.state.withdrawRequests.allTransactions = []
                    withdrawRequests.forEach(doc => {
                        console.log(doc.data())
                        commit('setAllTransactions', {
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