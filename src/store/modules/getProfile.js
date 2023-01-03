import { db } from "@/plugins/firebase"
import { doc, getDoc } from "firebase/firestore"

const state = {

}

const actions = {
    async getUserProfile() {
        const profile = await (await getDoc(doc(db, "admin", "CU9BvsCEKCMHdy2LcoEY6QtydVM2"))).data()
        this.state.getProfile = { ...profile }
    }
}

export default { state, actions }