import { createStore } from "vuex";
import { findById } from "@/helpers";
//import { db } from '@/utilities/firebase'

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
	},
	actions: {
		fetchArticles({ dispatch }, { ids }) {
			return dispatch("fetchItems", { resource: "magazine", ids, emoji: "📄" });
		},
		fetchPodcasts({ dispatch }, { ids }) {
			return dispatch("fetchItems", { resource: "forums", ids, emoji: "🏁" });
		},
		fetchAuthors({ dispatch }, { ids }) {
			return dispatch("fetchItems", { resource: "users", ids, emoji: "🙋" });
		},

		/*fetchItem({ state, commit }, { id, emoji, resource }) {
			console.log("🔥", state, emoji, id);
			return new Promise((resolve) => {
				firebase
					.firestore()
					.collection(resource)
					.doc(id)
					.onSnapshot((doc) => {
						const item = { ...doc.data(), id: doc.id };
						commit("setItem", { resource, item });
						resolve(item);
					});
			});
		},*/

		fetchItems({ dispatch }, { ids, resource, emoji }) {
			return Promise.all(
				ids.map((id) => dispatch("fetchItem", { id, resource, emoji }))
			);
		},
	},
	mutations: {
		setMagazine (state, { article }){
			state.magazine.push(article)
		}
	}
});
