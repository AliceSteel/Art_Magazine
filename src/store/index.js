import { createStore } from "vuex";
import { findById } from "@/helpers";
import { db } from '@/main'
import { getDocs, collection, query, orderBy, where, limit } from 'firebase/firestore'

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
		async fetchAuthorPosts ({ commit/*, state*/ }, { authorName } ) {
			
			const postsQuery = query(collection(db, 'magazine'), 
				where('author', '==', authorName),
				orderBy('id', 'desc'),
				limit(2)
				)
	
			let posts = await getDocs(postsQuery)
			posts.forEach((doc) => {
				const item = {...doc.data(), id: doc.id}
				commit('setCollection', { item, resource: 'postsByAuthor'})
			})
		}
	},
	mutations: {
		setCollection (state, { item, resource }){
			console.log(item);
			state[resource].push(item)
		},
		setItem (state,  { item, resource }) {
			state[resource] = item
		}
	}
})


