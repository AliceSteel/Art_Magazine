import { createStore } from "vuex";
import { findById } from "@/helpers";
import { db } from '@/main'
import { getDocs, collection } from 'firebase/firestore'

export default createStore({
	state: {
		magazine: [],
		podcasts: [],
		authors: [],
	},
	getters: {
		article: (state) => {
			return (id) => {
				const article = findById(state.magazine, id);
				return { ...article };
			};
		},

		podcast: (state) => {
			return (id) => {
				const podcast = findById(state.podcasts, id);
				return { ...podcast };
			};
		},
		author: (state) => {
			return (id) => {
				const author = findById(state.authors, id);
				return { ...author};
			};
		}
	},
	actions: {
		
		async fetchAllCollection ({ commit }, { resource }) {
			const docs = await getDocs(collection(db, resource))
			docs.forEach((doc) => {
				const item = {...doc.data(), id: doc.id}
				commit('setCollection', { item, resource })
			})
			return docs
		},
	},
	mutations: {
		setCollection (state, { item, resource }){
			state[resource].push(item)
		}
	}
})


