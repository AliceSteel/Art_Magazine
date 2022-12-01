<template>
	<main class="container" v-if="asyncDataStatus_ready">
		<h1>magazine</h1>
		<div class="categories">
			<h4>categories</h4>
			<button @click='filterPosts("all")' class="label">all</button>
			<button @click='filterPosts("art")' class="label">art</button >
			<button @click='filterPosts("street art")' class="label">street art</button>
			<button @click='filterPosts("sculptures")' class="label">sculptures</button>
		</div>

		<div class="articles_wrap">
			<ArticleCardMagComp 
				v-for='article in posts'
				:key='article.id'
				:article='article'
			/>
			<AppInfiniteScroll
					v-if="this.$store.state.magazine.length < count"
					@load="fetchLatestPosts"
					:done="posts.length === count"
				/>
		</div>
	</main>
</template>

<script>
import ArticleCardMagComp from '@/components/articles/ArticleCardMagComp.vue'
import asynDataStatus from '@/mixins/asyncDataStatus'
import { mapActions } from 'vuex'

export default {
    name: 'MagazinePage',
	mixins: [asynDataStatus],
    components: {
        ArticleCardMagComp
    },
	data(){
		return {
			posts: this.$store.state.magazine
		}	
	},
	computed: {
	/*	getLatestPosts () {
			return this.$store.state.magazine
		},*/
		lastPostFetched() {
			if (this.posts.length === 0) return null;
			return this.posts[this.posts.length - 1];
		},
		count(){
			return this.$store.state.collectionCount
		}
	},
	methods: {
        ...mapActions(['fetchCollectionByScroll']),
		...mapActions(['fetchFirestoreCollectionCount']),
		fetchLatestPosts() {
			return this.fetchCollectionByScroll({
				resource: 'magazine',
				startAftr: this.lastPostFetched,
			});
		},
		filterPosts (catName) {
			this.posts = this.$store.state.magazine
			if(catName !== 'all') {
				this.posts = this.posts.filter((post) => {
					return post.label === catName
				})
			}
		}
    },
	async created () {
        if(this.$store.state.magazine.length === 0){
			await this.fetchFirestoreCollectionCount({resource: 'magazine'})
            await this.fetchLatestPosts({resource: 'magazine'})
		}
		this.asyncDataStatus_fetched()
	}
}
</script>

<style lang="scss" scoped>
.categories {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
	padding: 67px 0;

	h4 {
		margin-right: auto;
	}
	.label {
		margin: 0;
	}
}

.articles_wrap {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	margin-bottom: 12vw;

	a {
		color: #000;
	}
}
</style>
