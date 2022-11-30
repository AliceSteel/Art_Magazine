import { createStore } from "vuex";
import { findById } from "@/helpers";
import { db } from '@/main'
import { getDocs, getDoc, collection, query, where, limit, startAfter, doc} from 'firebase/firestore'

export default createStore({
	state: {
		magazine: [],
		podcasts: [],
		authors: [],
		author: {},
		postsByAuthor: []
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
		findAuthor: (state) => {
			return (id) => {
				const author = findById(state.authors, id);
				return {...author};
			};
		}
	},
	actions: {
		
		async fetchAllCollection ({ commit }, { resource }) {
			const docs = await getDocs(collection(db, `${resource}`))
			docs.forEach((doc) => {
				const item = {...doc.data(), id: doc.id}
				commit('setCollection', { item, resource })
			})
			return docs
		},
		async fetchAuthorPosts ({ commit/*, state*/ }, { authorName, startAftr = null }) {
			let postsQuery = null
			const commonQuery = [
				collection(db, "magazine"), 
				where("author", "==", authorName),
				limit(3)
			];
			if(startAftr){
				const postRef = doc(db, 'magazine', startAftr.id)
				const lastPost = await getDoc(postRef)
				postsQuery = query(...commonQuery, startAfter(lastPost));
			}else {
				postsQuery = query(...commonQuery);
			}
	
			const posts = await getDocs(postsQuery)
			posts.forEach((doc) => {
				const item = {...doc.data(), id: doc.id}
				commit('setCollection', { item, resource: 'postsByAuthor'})
			})
		},
		emptyCollection ({commit}, {resource}){
			commit('emptyItems', { resource })
		}
	},
	mutations: {
		setCollection (state, { item, resource }){
			state[resource].push(item)
		},
		setItem (state,  { item, resource }) {
			state[resource] = item
		},
		emptyItems ( state, {resource}) {
			state[resource] = []
		}
	}
})


