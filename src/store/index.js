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

		
		async fetchAllMagazine ({ commit }) {
			const magazine = await getDocs(collection(db, "magazine"))
			magazine.forEach((doc) => {
				const article = {...doc.data(), id: doc.id}
				commit('setMagazine', { article })
			})
			return magazine
		},
			
		async fetchAllPodcasts ({ commit }) {
			const podcasts = await getDocs(collection(db, "podcasts"))
			podcasts.forEach((doc) => {
				const podcast = {...doc.data(), id: doc.id}
				commit('setPodcasts', { podcast })
			})
			return podcasts
		},
		async fetchAllAuthors ({ commit }) {
			const authors = await getDocs(collection(db, "authors"))
			authors.forEach((doc) => {
				const author = {...doc.data(), id: doc.id}
				commit('setAuthors', { author })
			})
			return authors
		}
	},
	mutations: {
		setMagazine (state, { article }){
			state.magazine.push(article)
		},
		setPodcasts ( state, { podcast }) {
			state.podcasts.push(podcast)
		},
		setAuthors ( state, { author }) {
			state.authors.push(author)
		}

		/*setCollection (state, { resource, item }) {
			console.log(state[resource]);
			state[resource].push(item)
		}*/
	}
})


